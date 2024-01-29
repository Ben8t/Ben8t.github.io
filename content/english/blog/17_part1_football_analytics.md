---
title: "Part 1 — A Career in Football Analytics, The What"
meta_title: ""
description: "this is meta description"
date: 2022-02-04T00:00:00Z
image: "/images/blogs/part1_football_analytics.png"
categories: ["Business", "Football", "Analytics"]
tags: ["business", "football"]
draft: false
---


When I started in the football analytics community it was a bit intimidating. Smart guys who work for top clubs, who seem cool, doing shiny charts and complex models. And they still know a lot about football.

It looked like it will be very long to fill that knowledge gap between experts and myself — a student in data science looking at football games on weekends.

However, with great resources, hacky projects, and little help from the community, I made my way slowly in the football analytics community.

This series of posts is here to help everyone to understand what’s football analytics, get tips on how to work in the field and what’s really the state of the industry.

I would love to have that kind of post when I started a few years ago. The football analytics community is bright. Full of brilliant people from whose I learn and get inspired a lot.

So here are a few bits to give back to that community!

## Football Analytics in a nutshell

Football analytics is basically data science principles applied to football.

The sports industry has begun to develop towards data like any other industry at the beginning of the XXI century.

It started in the US with baseball, American football, and basketball. Now every sport has at least some fans who try to operate data to understand their sports passion.

Clubs, players, competition stakeholders, and betting companies are leaning to data to drive their decisions.

The first objective of this transformation is to analyze and model the game in the most objective way. To improve sports performances.

Understand players' choices, forecast team performance trends, study tactic and rules evolution, forecast injuries, optimize transfer decisions, find valuable — underrated — players, etc…

The list is infinite: the variety of data and the freedom of football make a perfect playground for data analytics.

Behind the focus on sports performance is the challenge to make data-driven decisions regarding financial decisions.

Come to mind player transfers: it’s the resource with the most leverage.

But in the long term stakeholders would like to improve business assets such as overall revenue, marketing and technology development, staff investments, or stadium rentability.

## What data? Where?

Like any data-science scheme, the force of the war is data. Some companies emerged in the last decades to collect, transform and analyze data from football games. Clients for these data are varied:

- **Football clubs**: to improve performances and drive decisions.
- **Betting companies**: to polish their odds and offer more and more options for betters.
- **Newsrooms**: to help readers understand the game. Find an explanation of player performances. Provide deeper analysis.

All these people have different needs. Therefore, it exists mainly three kinds of football data.

- **Contextual data**: main events like goals, replacement, yellow cards, etc… It’s characterized by the minute of the event, so quite basic. Still useful for news and betting companies for live broadcasts on the web.
- **Event data**: much detailed, they track every ball action: passes, tackles, crosses, dribbles, shoots, etc… They are characterized by coordinates data (sometimes in three dimensions), so very useful for any person looking to analyze and create models of the game. Used by football clubs, betting companies, and sometimes newsrooms. [Gathered by hand and algorithms](https://youtu.be/ySlAzS8Oouw).
- **Tracking data**: every player's position and ball position at really low framerates sometimes 15 frames by seconds. Less mature but used by big clubs and researchers. Gathered either by physical sensors or software algorithms.

It’s often too complex and too expensive for clubs, betting companies, and newsrooms to gather data by themself. So a landscape of providers emerged too, with diverse offers, diverse data :

- **Stats Perform (ex Opta)**: the big one. It’s one of the first which started to gather football data at scale. They have a range of clients from top football clubs to big newsrooms. They are well known for both contextual and event data.
- **Statsbomb**: the serious challenger. They provide detailed event data feeds and great analytics resources.
- **Skillcorner/Second Spectrum/Metrica:** focused on tracking data and analysis. They use state-of-the-art algorithms or sensors to track all the data they can. The utilization of these data is infinite but complex.

ℹ️ This is not a complete list of providers. There are many more!

The whole landscape is indeed pretty clear. However, it’s a new domain and the football industry is quite specific.

Few clubs have data scientists, researchers, or even real data analysts. I don’t talk about data engineers. Like any novelty, it takes time to apprehend the subject from the stakeholder's point of view.

What’s good toward the democratization of football analytics is the community.

Football is one if not the most played and viewed sport worldwide. There are a lot of passionates who try to analyze the game, share their ideas, etc…

The niche is not as small as it was a few years ago. There are open-source codes, open conferences, and more and more blog posts relating to football analytics.

## The football Data Scientist role

The data scientist position is often blurry. Between analysts, data engineers, and software developers.

It’s even more true in football, while there are few jobs to fill.

As I worked in a football club, I can say that the full-stack data scientist concept is real here. You have to know the full scope of data to really make a chance to deliver valuable and activable insights to stakeholders.

Because yes: as a football club is a low-mid sized company, you have a chance to be very close to the sports director, the first-team coach, and the academy.

Your missions are then very diverse :

- **Ingest and organize data**. There is no dedicated team for this. No dedicated data engineer. You have to know what’s a data lake, how to organize a data warehouse, schedule computer jobs, and all the tools behind it.
- **Analyze data**. Sometimes there are dedicated analysts — football analysts. Sometimes not, or they are more dedicated to video analysis. Not data. So you have to know how to analyze data and show it to stakeholders who are often not really data-literate (true in any industry).
- **Model data.** As a data-scientist, we expect you to bring new insights and to understand the game beyond the classical stats. You will have to create new models. Implement and tweak research papers.
- **Code real software.** Again, it’s uncommon to have a software engineer within a sports direction. Stakeholders would expect to get an interface to deal with your data and models. Sometimes you will have to write a website or application. It’s out of the scope of data-scientist, but if you don’t do that, nobody will use your data.

This in fact a full stack data scientist role. As we saw, it’s pretty different from a video analyst, a data analyst, a performance analyst, or a scoot.

A football data scientist has to be curious, to get a large range of knowledge, to be able to work alone, to talk with non-tech people, and finally to know about football…

_Side note: in other industries, data scientists don’t have to know much about business problems ahead. In football, it’s a not prerequisite, but you won’t be taken seriously by football guys._

---

We just did a full tour of what’s football analytics and what’s the work of a “data scientist” in this industry. I encourage you to look at the following resources to go deeper in the football analytics world :

- [Devin Pleuler — Soccer Analytics Handbook](https://github.com/devinpleuler/analytics-handbook).[Devin](https://twitter.com/devinpleuler)is director of analytics for Toronto FC in MLS. This handbook is diamond. It contains resources and suggestions for technical skills worth having for work in soccer analytics, tutorials, and collections of research and articles worth reading.==
- [Money Ball movie](https://en.wikipedia.org/wiki/Moneyball_(film)): based on the non-fiction book by Michael Lewis, it tells the story of an MLB franchise using analytics concepts to build a team of undervalued talents. A classic, with Brad Pitt and Jonah Hill.
- [Stats Perform](https://www.statsperform.com/resources/) & [Statsbomb](https://statsbomb.com/articles/) blog: basic resources every football analytics nerd has probably read many times.
- [American Soccer Analytics](https://www.americansocceranalysis.com/): as with every sport, American people are leaders in the analytics approach. A blog on MLS but the insights are applicable anywhere. Really smart guys there!

In the next blog post, I will share my personal journey in football analytics. How it started, how I meet people and made projects that gave me the go-ahead to work within a football club.

I hope you enjoyed this first post! Share it with your friends. You can comment and ask questions below.