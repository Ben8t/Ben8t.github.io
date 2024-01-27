---
title: "A 2.0 Path to Wealth"
meta_title: ""
description: "this is meta description"
date: 2021-08-23T00:00:00Z
image: "/images/blogs/path_to_wealth.png"
categories: ["Business", "PKM"]
tags: ["business", "pkm"]
draft: false
---

Saving money is [a well-known path to wealth](https://www.goodreads.com/book/show/30646587-the-simple-path-to-wealth).

Still, keeping a portion of income every month for the coming days while enjoying the present is hard. Finding a balance is hard.

Banking applications don’t provide advanced features to track and analyze daily expenses.

They give basic information of every transaction but there are no user-based categories or aggregations to keep an eye on where and what you spent your money on.

I remember my father doing shitty spreadsheets at the time. Logging expenses in [Excel sheets and then creating formulas to analyze](https://towardsdatascience.com/microsoft-excel-in-the-era-of-big-data-401e67ca28a5) what matters to him.

It’s still useful to control your financial balance and perspective.

Recently I went a little further.

By using new tools and programming languages, I created my own tracking and analytics workflow. All the way down to my inbox.

## Logging daily outlays

If you’re using Trello, Evernote, Google Sheets, etc…: any combination of notes and organizational tools, you probably don’t know [Notion](https://www.notion.so/product).

It’s the new boy in self-tech town!

Notion is an all-in-one workspace with a lot of different features. It’s available on the web, as a desktop or mobile app.

![](/blog/15_path_to_wealth/01.png)

My workflow to log my expenses is quite simple: I open my banking app and log each raw into a Notion database. It’s just an array you can fill with many different cell formats and data types.

That way I can control everything: category tags, descriptions, dates, etc…

![](/blog/15_path_to_wealth/02.png)

Yes, it’s still manual, the old fashion way.

Banking apps don’t label expenses well enough for the moment and extracting data programmatically would require complex authentification processes.

Waiting for an AI to understand that a row with “Durand & Son’s” for $1 a Sunday morning is just the purchase of a croissant…

_Even 2.0 bank apps don’t reach a level where expenses are tracked by user-defined categories and where extracting data through an API is not a difficult task._

Anyway, what’s really cool about Notion is their [new API access](https://developers.notion.com/). It opens the possibility to download databases as proper CSV files and then process data automatically.

# Spending analytics

Now we can gather flat data we can play the data-visualization game.

What’s interests me in my personal finances is how much I spend on main categories such as house rent, food, transportation, restaurants & bars, clothing, etc… and how much I save every month.

Also, I really like to compare each month with another to see any trend and analyze my spendings in time.

After some tests I ended up with this plot:

![](/blog/15_path_to_wealth/03.png)

For each category, it shows how much I spent during the corresponding month.

That grey number below each bar represents the median spendings for the category. I chose the median over the mean because of outliers within several categories.

For example, buying a car for 5000€ will outstand too much compared to usual transportation spendings.

Other grey points and bars show the distribution of previous months: the darker it is, the more recent it is.

I’m pretty happy with this plot while it can be arranged for different needs. As I built it with a programming language I can add or update categories in my Notion logger without changing anything.

I tried to log someone else spendings with different categories: it worked like charm!

# Report automation: toward the inbox

The whole point of this chart is to get a monthly report of my spendings. While I could launch an R session and run the code each month or so, I would like to go a little further.

What if I can get this monthly chart directly in my inbox?

Also, as logging spendings can be tedious and not funny, what if I can receive an email reminder some days before the actual report?

[There are a lot of scheduling tools out there](https://towardsdatascience.com/you-dont-need-an-orchestrator-6517b243dece). Still, for a side-project like this one, I wanted something cheap and easy to set up.

As I’m working with [GitHub](https://github.com/) for version control, the choice is straight: [GitHub Action!](https://github.com/features/actions)

GitHub Action is a recent GitHub feature to automate software workflows. Usually, it’s used for CI/CD pipelines but we can use it as a scheduler for little job triggering too.

As I already had [a project to automatically save my Spotify playlists](https://github.com/Ben8t/savetify) (what would become my hours of music digging if the Sweden company collapse one day or so?), it was kind of duck taping.

I stuck a little bit to actually send an email.

Gmail API is quite good but needs too much setup. After some search for free email SFTP providers, I finally find [Mailjet](https://www.mailjet.com/) which offers an API with a good free tier. Moreover, it’s easy to integrate while they provide [different API clients](https://github.com/mailjet/mailjet-apiv3-python).

![](/blog/15_path_to_wealth/04.png)

That’s it!

Running this pipeline for two months and it works pretty well. Before email reminders I was lazy to track my expenses: now getting an email forces me to actually take those few minutes.

Getting the report each month is really pleasant and kind of self-rewarding.

![](/blog/15_path_to_wealth/05.png)

If you feel inspired and want to mimic this project, [you can find the whole code of this project on GitHub](https://github.com/Ben8t/personal-finance-analytics). Don’t hesitate to reach me to ask any questions or give some improvements!