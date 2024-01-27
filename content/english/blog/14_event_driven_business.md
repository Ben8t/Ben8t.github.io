---
title: "Event Driven Architecture For Business"
meta_title: ""
description: "this is meta description"
date: 2021-06-07T00:00:00Z
image: "/images/blogs/event_driven_business.png"
categories: ["Business", "Event-Trigger"]
tags: ["business", "event-trigger"]
draft: false
---

Looking at modern data-engineering works sometimes feels boring. All live-in files, code, and version control system.

There are no fancy user interfaces, complex charts, [Excel manipulations](https://towardsdatascience.com/microsoft-excel-in-the-era-of-big-data-401e67ca28a5), or oral decisions.

Everything is traced.

Every data computation. Every step. Every decision.

As data scientists, engineers or analysts, we often wonder how our work is used to drive decisions.

The end of the data pipeline often lives in slide decks or dashboards, but decisions beyond usually have no shapes.

# Problems With Dashboard Driven Decisions

Dashboards are probably good. Not that much for business.

We are building an infinite number of dashboards like it’s the end product of any business questions. It’s not.

Dashboards grow the set of questions. They allow exploration and quick insights discovery.

But there are no traces of how people took decisions after looking at dashboards.

Furthermore, the lifecycle of dashboards is often short. Among data teams, we often hear “it will never be used at the end”. There is always back and forth between slides producers and users. It adds friction and time costs.

Self-serve analytics tools such as dashboards make it possible for anyone to extract and visualize data. Anyway, they don’t imbue their users with the skills required to make sense of data and all its complications. Serving insights as a service would be complete if we also teach business people about confounding, bias, and outliers.

Without those skills, data’s not that useful.

This is why reports or PowerPoint slides are sometimes more useful to answer business questions.

First, it’s often produced by a data analyst. It comes with more control, more data literacy and a better scope of what’s is possible or not.

Data analysts also have domain knowledge (and sometimes data analysts don’t work directly within business units…).

When released, the report can be showed to stakeholders during meetings. We can trace document updates and decisions through email history.

Still, it asks for data analyst work. Work that is not that scalable. Not a sustainable asset.

# Seeking Triggers For Action

Take a step back.

Business should not have “data” or statistics questions. They have to seek how they can improve or change current business to drive growth.

Business don’t care how much a market is growing. It cares about how they can grow in this market.

Relying on strong stakeholders' strategies, they must define metrics and thresholds that will tell what actions to take.

_When X new visitors don’t buy when they add products to the basket then it is likely that a decision will have to be made regarding the buying process._

_When Y customers don’t go to the new website feature it is likely that a decision will have to be made regarding content and layout choices._

Setting quantified objectives ([SLO](https://cloud.google.com/architecture/defining-SLOs)) and corresponding actions (SLA) into business is a key for data-driven decisions.

# Decisions In Direct Message

Is there an alternative to dashboards and reports?

Most of the time we are interrupted by messages or email. Moving decisions in that space could improve efficiency and visibility.

Instead of a new dashboard, why not link your fancy machine learning model or analytic query results to the messaging group? Why not send automatic questions to assess what decisions have been made after a meeting? What are the next steps?

[Slack](https://api.slack.com/), [Microsoft Teams](https://docs.microsoft.com/en-us/graph/teams-concept-overview), [Workspace](https://developers.facebook.com/docs/workplace/), etc… each of these applications provide simple APIs you can trigger to send messages into groups or specific users.

It’s now quite classic to see continuous integration and development into direct messages to alert developers of any release problems. Why not do the same for business assets?

For example, you can create an alarm informing that a threshold has been reached. You can customize the message body with links to some reports, email groups or even automatically set a meeting with concerned persons.

We can imagine some chatbot answers & questions sessions and then log the decision process for further analysis.

This is not THE solution: data-driven decisions come from data literacy on all levels of the company, probably hiring more analysts, and build more horizontal organizational charts.

Anyway, setting these kinds of event-driven decisions with a DevOps mindset and scale them into more classic data-analytics processes could speed a lot of companies' decisiveness.