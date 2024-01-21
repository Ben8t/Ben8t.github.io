---
title: "PassSonar: Visualizing Player Interactions in Soccer Analytics"
meta_title: ""
description: "this is meta description"
date: 2019-08-16T00:00:00Z
image: "/images/blogs/passsonar.png"
categories: ["Data-Viz", "Football"]
tags: ["R", "ggplot", "data-viz", "football"]
draft: false
---

# PassSonar: Visualizing Player Interactions in Soccer Analytics

Democratized thanks to Michael Lewis’ Moneyball (both the book and then the movie adaptation), baseball and basketball have already gone quite far in the realm of sports analytics. Soccer is now also clearly in the place to take the next step, with a lot of work being done by companies like Opta and Statsbomb to explain and create analyses and statistical models.

Moreover, a small but growing community is advancing the boundaries and publishing influential work, coming forth with great ideas that have even been [sometimes followed by professional clubs](https://twitter.com/experimental361/status/1130171706604179457).

![](/blog/03_passsonar/01.png)

In this piece, we will take a look at one of the aspects of soccer analytics, PassSonar, a concept already known as “wagon wheels” in cricket analytics. One of the first to popularize this idea in the soccer field was [Eliot McKinley](https://twitter.com/etmckinley), who developed and used them on Major League Soccer (USA) game data. Thanks to his tips, I was able to create ones for the European leagues. Nowadays, the PassSonar concept is going viral, and other great enterprises like Football Whispers or now StatsBomb are also following the trend ([see the recent piece from StatsBomb CEO Ted Knutson](https://statsbomb.com/2019/07/a-sneak-peak-at-iq-tactics-a-brief-history-of-radials-sonars-wagon-wheels-in-soccer/)).

So with that said, here is a brief primer on PassSonar, with some design considerations and how the soccer analytics community uses them in their analysis.

## Starting with PassNetworks: the less flashy sister of PassSonar

Some of the first graphics built on top of soccer data were pass networks, or pass maps. They highlight connections between players in terms of pass frequencies and ball touches. It helps to show how a team is structured when playing with the ball and so can become very useful towards understanding the general team tactic. In the below network graphic, we can easily visualize the influence of Barcelona’s elite midfielders like Sergio Busquets and Lionel Messi. There’s also a dispersion and interconnected quality about the passing network that over the years has come to define Barcelona’s style.

![](/blog/03_passsonar/02.png)

PassSonars came afterward to bring a sense of pass direction and to help detail a bit more individual players’ pass trends. Analyzed next to pass maps, they can indicate a player’s influence on ball movements and the directionality of those passes. Whereas the pass networks helped to visualize interactions between players (the _to whom)_, the PassSonars help to visualize the diversity and effectiveness those passes, help to show the _where_.

![](/blog/03_passsonar/03.png)

## They said, “Just follow the legend”

In the first publications on Twitter, there were a lot of questions about reading such a map. It is true that for a first-time public, it can be difficult to understand these. However, if we let ourselves be guided by the legend, it is actually quite straight forward.

The most important trait in these pass sonars is the radial bar. As it would be in simple bar charts, they represent the pass angle frequency. Make a 360-degree transformation, and we can place them on a football pitch. The first goal of this visualization is to organize information on pass direction. Therefore, highlighting average pass distance is an important second feature, and can be accomplished through the use of color.

![](/blog/03_passsonar/04.png)

Comparing with the PassNetwork is essential, especially for players’ positions. PassSonar brings better insights on pass frequency: on the above example, we can see how the Arsenal midfield tended to pass on the left side, especially with Reiss Nelson. The map also underlines how the two center backs didn’t pass directly to their midfielders and preferred to go through the sides, with both Nacho Monreal and Ainsley Maitland-Niles playing high on the pitch.

Additionally, it is interesting to see the goalkeepers’ pass directions given the increased stylistic emphasis on a keeper’s ability to initiate the attack from the back, even more this beginning season with [new rules being for goal kicks](https://www.bbc.co.uk/newsround/49236534).

Folks have also tried and developed other ideas for PassSonars such as:

- Adding pass accuracy within each bar. It allows us to see if how effective players are at favoring passes towards certain sides.
- Inverting how color and bar length is encoded, so that color then represents density and size of the bar is pass length. This is a very good alternative, but it may not necessarily fit with “classic” statistics density bar charts where the proportion is represented by the size of the bars.
- Using average player position instead of the basic lineup for where players are placed on the graphic: unfortunately, it’s too much information on the same graphic and the placements can appear too confusing.

## Tips on designing the PassSonar maps

Firstly a word on the tech — I build my maps thanks to Opta data with [R under a custom Docker image](https://www.rocker-project.org/). This helps a lot to produce reproducible work. I even build a small frontend web app, being able to create whatever map in a minute.

While I have heard some folks succeed with making similar maps with Tableau or even Excel, I believe a programming language like R (which has one of the best plotting libraries, ggplot2) or Python is suited best to this kind of work. But anyway, depending on your background, it’s not that hard to produce this kind of visualization with whatever software you prefer.

It also takes some time to find a good color mix, essential to a graphic such as this one. While a black background works like a charm, I find me inspired by blueprints — showing underneath construction — and so came that blue in my maps. So I don’t finish with too flashy a graphic — the blue being a bit sharp — the green shade is a perfect complement.

For the end of 2018/2019 Premier League season, I tried to build a more “design”-intensive plot for the Manchester City champions (there’s Ederson, the champions’ passing wunderkind at the goalkeeper spot). You will notice that the color range is not perfect for data interpretation, but it feels quite good for the overall design, and even helps to more starkly highlight the binning of the pass distances. I also added other rotation players on a side panel, ordered by minute played during the season. The font used here is [Object Sans Typeface](https://www.behance.net/gallery/71644255/Object-Sans-Geometric-Font-Family-Free-Fonts).

![](/blog/03_passsonar/05.png)

With a pass network map as a sanity base, pass sonars help to understand both how players interact with each other and the directionality and effectiveness of those interactions. The overall design idea presented here is still fairly young in the football analytics community, so we can only wonder how it can continue to evolve and inspire other ideas.