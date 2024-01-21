---
title: "Player similarities & interpolation"
meta_title: ""
description: "this is meta description"
date: 2019-12-22T00:00:00Z
image: "/images/blogs/player_similarities.png"
categories: ["Data-Viz", "Football"]
tags: ["R", "ggplot", "data-viz", "football", "machine-learning"]
draft: false
---

Analyzing video, finding players from similar teams, traveling all over the world to scouts player: scooting activity can be long and fastidious. Moreover, there are now more than one hundred professional leagues and so professionals players out there.

While scooting departments have many experts all over the world, the amount of games, players and statistics to follow on are sometimes too many to only relies on human abilities.

This is where soccer analytics comes in place. We will see in this piece that with some data and basic computer science, the scooting process can be enhanced with more speed, efficiency, and precision.

# Characterizing players

The first question we have to answer is how to characterize players? While scooting departments have experts who rely on their feelings and experience of football, it’s difficult to gather this expertise with only data.

There are many good metrics developed in the football analytics community to capture complex patterns in player characteristics. Here, we will concentrate our exploration with [EA Sports FIFA 20 video game](https://www.ea.com/fr-fr/games/fifa/fifa-20) player ratings.

These ratings are computed and refined by a whole team of scoots and experts in the domain. It is known that [even sports data companies are using stats from video games](https://www.theguardian.com/technology/2014/aug/12/why-clubs-football-manager-scouting-tool) to help real clubs recruit players. Although it can be a bit naive, this approach can be a good starting point to define real player attributes.

This database contains for every player more than thirty attributes: from attacking to defending or even mental ones.

As you would expect, we can see these attributes as characteristic vectors for every player. Maths begin.

![](/blog/05_player_similarities/01.png)

Once again, this is quite simplistic. For those being curious about more complex models and metrics to characterize players, here are some resources worth looking:

- [Using Deep Learning to Understand Patterns of Player Movement in the NBA](http://www.sloansportsconference.com/wp-content/uploads/2019/02/Using-Deep-Learning-to-Understand-Patterns-of-Player-Movement-in-the-NBA.pdf) by Akhil Nistala and John Guttag.
- [OptaPro Analytics Forum 2019 — Player2vec: A sequence-first approach to player and team styles](https://www.youtube.com/watch?v=t1y5incr5Gw) by Ben Tovarney.

# Computing similarities

Now we have vectors to characterize players, so we are able to compute distances. The most common distance is the Euclidean one which is defined by:

![](/blog/05_player_similarities/02.png)

[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is like using a ruler to measure the distance. However, choosing this distance is probably not the best option. For example, Ronaldo is close to Messi because they have high ratings in shoots, speed or dribbles. But a young player like Joao Felix who has same profile to Messi will be further away because his attributes are weaker, but in the same proportion.

![](/blog/05_player_similarities/03.png)

This is where [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity) comes. This is a measure of similarity between two vectors that looks at the angle between them.

Given two vectors of attributes x and y, the cosine similarity cos(θ), is represented using a dot product and magnitude as:

![](/blog/05_player_similarities/04.png)

In our example, the angle between Messi and Joao Felix is smaller than the angle between Messi and Ronaldo. Even though they were further away.

![](/blog/05_player_similarities/05.png)

Cosine similarity allows us to better capture “style” rather than pure “statistics” attributes. Let’s see some examples of similarities computed to better understand it:

[**James Maddison — Leicester City**](https://www.transfermarkt.fr/james-maddison/profil/spieler/294057)

![](/blog/05_player_similarities/06.png)

James Maddison is one of the best young midfielders of the Premier League and a key player for Leicester squad this 2019–2020 season. Here we compute cosine similarities to get the five most similar players.

Results can seem a bit weird, but we have to remember they are players who have “the same style of play” of Maddison. Thus, they won't have similar performances than the English player, but we can believe they have same skills and abilities on the pitch. Note that Martin Ødegaard, one of the most anticipated young, is the tenth most resembling player to James Maddison.

[**Valentin Rongier — Olympique Marseille**](https://www.transfermarkt.fr/valentin-rongier/profil/spieler/332889)

![](/blog/05_player_similarities/07.png)

This example is very interesting. Firstly, it is a good point to see Alcantara brothers (Thiago and Rafinha) close to each other. Though the Bayern Munich player perform better than his brother, they have logically the same style of play.

If you ever see Valentin Rongier play, you can feel how is style of play is close to Thiago. While Vladimir Darida and Lukas Rupp are more surprising names, there are Pablo Fornals, Aleix Garcia (a talent from Manchester City), Arthur or even Modric in the list of most similar players to Valentin Rongier. Not that much surprising.

# Going further with vector interpolation

As we saw, similarities are already interesting. For example, a club like Manchester United want to replace Paul Pogba could try to find the most similar players to the French midfielder.

But we can go a little further thanks to the nature of vector representation.

What if Manchester United staff wants to find a player like Paul Pogba with a part of Mesut Ozil skills?

This is where vector interpolation comes in. By taking Paul Pogba vector representation mixed with Mesut Ozil one, we can create an interpolated vector and then looking for the closest one from our player database.

![](/blog/05_player_similarities/08.png)

So in our example, the most similar player to both Paul Pogba and Mesut Ozil is Roberto Firmino. It is quite logical when you know the Brazilian striker is playing very low on the pitch. Like the French and the German, he is a very skilled player with a unique vision and sense of the game. Note that players that comes after Firmino in the list are Lionel Messi, Paulo Dybala, Philippe Coutinho or Kevin De Bruyne.

Here we equally mixed off Pogba and Ozil vectors. It is possible to vary the part of each player vector in the calculation of this interpolated vector. Instead of taking 50% of Pogba and Ozil vectors we could take 80% of Pogba and only 20% of Ozil to get a vector which will be more similar to Paul Pogba.

The general formula is quite straightforward, with alpha being our proportion parameter, x and y two-player vectors:

![](/blog/05_player_similarities/09.png)

Another interesting use case: what if a club wants to replace one of his player by a better player. A bit like an “upgrade”. This club doesn’t have the budget to buy a starship player but really want to find a player with a similar profile.

Here is an example with Angelo Obgonna the central defender of West Ham and Sergio Ramos.

By computing many interpolated vectors with different values of alpha we will obtain different players looking more or less similar to Ogbonna.

![](/blog/05_player_similarities/10.png)

The results are pretty interesting. Moving the proportion of vectors in the computation from Ogbonna to Ramos results in different “gradient” of players more or less similar to the two players.

Here is another example with Eric Lamela and Mohamed Salah.

![](/blog/05_player_similarities/11.png)

These examples prove the power of this effortless computation: players uncovered could be a good targets to improve either West Ham or Tottenham squads in these examples. Taking advantage of this “gradient” of player, this method also offers many solutions according to the willingness of the club.

# Limits and workarounds

As we noted earlier, doing this experiment with FIFA 20 player database can be too simplistic. Though these data are made by human experts, they can lack some traits or details on more stylistic attributes for each player. It sounds difficult to capture the style of play of Eden Hazard just by giving good ratings in speed, vista or vision items.

Beyond the problem of finding good representing vectors, this method is easy to set up. Distances are quite easy to implement in any modern “data” software and the interpolation computation is quite direct too. We could derive this idea on a full team and then comparing lineups for each game. We even can go further with entire games: taking all game events, what are the most similar games? Answering this question, we could compare games at a high scale and maybe try to detect the best options in specific moments…