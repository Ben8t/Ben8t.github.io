---
title: "On average we will prefer using distribution"
meta_title: ""
description: "this is meta description"
date: 2020-04-16T00:00:00Z
image: "/images/blogs/average.png"
categories: ["Analytics"]
tags: ["analytics"]
draft: false
---

The word “average” comes from Arabic “awar” which means “defects” or “something partially damaged”.

The Mediterranean world is the first to use the term in sea-commerce around the 12th century. It is used to describe damage, loss or non-normal expenses, a meaning we find in the French word “avarie” today.

Roots of current signification come from merchant-marine law contracts at the end medieval era. During a bad storm, marines had to throw some goods overboard to make the ship lighter and safer. All merchants were to suffer proportionately and more generally there was to be a proportionate distribution of any damage.

From there, the word was adopted by British insurers, creditors, and merchants for talking about their losses as being spread across their whole portfolio of assets and having a mean proportion. Today’s meaning developed out of that and started in the mid-18th century in English.

## The well-known drawback of average

The average is most likely the first metric you will look to understand data. We see and use it everywhere: on sales reports, TV news, running apps, car onboard instruments, etc…. It is quite convenient because it resumes a whole quantity of data into one figure.

But by design it is somewhat limited: summarizing many observations into one numeric asset can waste a lot of important information.

Let’s jump in a quick example to see how averaging can be inadequate.

Considering these two series : _2, 4, 6, 8, 16, 17, 32_ and _2, 4, 6, 8, 16, 17, 92_.

The average for the first one is 12.1 while it is equal to 20.7 for the second series. As we can see, there is only one element that changes between the two series.

Let’s look at the median now. You probably heard about it. It is sometimes close to the mean but represents another statistical attribute.

To make it simple the median is the “middle” of a set of numbers. In our example, the median is the same for both series with 8.

This a very simple example, but it underlines how average can be misleading if we don’t look at our data in detail, and especially at outliers.

More generally: mean, median or any other one figure summary are potentially dangerous and often hide all the patterns the data has to offer. Because they conceal by design, we risk error if we rely entirely on them.

## A more granular view

We have to get higher. Move to a more granular view.

When reaching a certain volume of data our brain can’t process information: there is too much. So instead of looking at raw data we often aggregate them by similar values: this is what we usually call distribution.

A distribution is a function that shows the possible values for a variable and how often they occur.

There are a lot of ways to visualize data distributions, here are some :

**Histogram**

They are probably the most simple way to plot distributions. A histogram displays the whole shape of data and informs about sample size. What is the difference between bar charts? Usually, a histogram deals with continuous data while bar charts are used when working with categorical data.

![](/blog/08_average/01.png)

**Boxplot**

Though they can be difficult to read for people without “data-literacy”, boxplots gather many interesting pieces of information. They express basic statistics like median, minimum, maximum or even quartiles. It is often interesting to use it along several groups (often a qualitative attribute of your data) to lighten the differences between those.

![](/blog/08_average/02.png)

**Violin chart**

Violin graphs combined boxplots with density plots. They add information about the full shape of the data distribution and they can be much more intuitive and attractive than boxplots.

![](/blog/08_average/03.png)

If you like violin charts, you will probably cherish [beeswarms plots](https://flowingdata.com/charttype/beeswarm/) which emphasized individual data points.

There are a lot of other ways to look at distributions. The three above are very easy to make and provide more details than single metrics.

We are often attracted by simple black figures we understand very quickly. However, taking a little extra time to look at data distribution is worth it. You will not be disappointed and better: you will be curious to learn more about your data.

**A word on isotype charts**

Back in the 20th century, a lot of governmental information programs used to display data elements through discrete graphic elements known as “isotype”. Isotype stands for International System Of Typographic Picture Education. [This kind of design was initiated by Otto Neurath, Marie Neurath, and Gerd Arntz](https://medium.com/nightingale/exploring-isotype-charts-only-an-ocean-between-part-1-399f227e1c69) with the aim to create a visual language to bring statistical elements understandable by the largest audience possible.

They are not only interesting to simplify information but also to quickly show big gaps in distribution. Illustrations and pictures stay in mind more easily than row numbers or classical histograms.

![](/blog/08_average/04.png)

# Distribution everywhere

Writing this in a train, my gaze was lost in the countryside and I was squinting on a long fence made by human hands. Contrary to modern fences, made by machines, this one was very irregular.

Then the Normal distribution appears.

![](/blog/08_average/05.png)

Across centuries, scientists discovered that a lot of observations are following the same mathematical distributions.

The number of people arriving at the store cashier during each hour follows a Poisson distribution, human-size obeys Normal distribution, a student will pass or fail an exam follows Bernoulli distribution, etc…. Mathematical distributions are everywhere in nature.

Looking at spaces between posts, I could notice a kind of pattern. In fact, the space between posts followed the Normal distribution.

![](/blog/08_average/06.png)

There are a lot of more technical assets behind these distributions we won’t cover here. But keep these names in mind when you hear and look about distributions: you will be surprised how naturally they can appear.

As RJ Andrews wrote in his excellent book [Info We Trust](https://infowetrust.com/project/272): “Data often does not display interesting patterns out of the box.”.

So, next time you see a one-figure statistic, ask yourself what is the shape of data distribution first.

Hope this piece was not average.