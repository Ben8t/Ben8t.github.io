---
title: "You don’t need an orchestrator"
meta_title: ""
description: "this is meta description"
date: 2021-03-12T00:00:00Z
image: "/images/blogs/you_dont_need_orchestrator.png"
categories: ["Data-Engineering", "Orchestration", "Tools"]
tags: ["data-engineering", "orchestration"]
draft: false
---

# You don’t need an orchestrator

![](/blog/12_you_dont_need_orchestrator/01.png)

It’s a great time to orchestrate data pipelines.

[Airflow](https://airflow.apache.org/), [Luigi](https://github.com/spotify/luigi), [Dagster](https://dagster.io/), [Nifi](https://nifi.apache.org/), [Prefect](https://www.prefect.io/), [Kedro](https://github.com/quantumblacklabs/kedro), etc… The technological landscape around data orchestrator tools is full of great software, mostly open-source.

We are slowly moving from classic scheduling (aka cron) to real orchestration.

Basic scheduling involves crontab and other similar programs. You just write the moment of time you want to run a task and the program will wait until it’s time to go.

Scheduling is about listing when events occur. Orchestration goes a step further by creating triggers between tasks. It’s much more organic.

These toolkits grow behind the concept of [Directed Acyclic Graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph)

TL;DR;

A DAG is a graph structure with only direct links between nodes, without any cycles. The big advantage of such a pattern is the ability to create simple one-direction flows.

There is no surprise why all these orchestrators are trending in the data-science field: they fit perfectly with the linear flow of data transformations.

![](/blog/12_you_dont_need_orchestrator/02.png)

## Engineering costs

The downside of these tools is setup time.

Getting started notes are quite easy to understand, and you can get working code in few minutes.

But to really take advantage of such frameworks you need time, experimentation, and experienced craftsmen.

You have to think deeply about the in and out of your data to make a great orchestration. Where your data come from? How businesses consume data? Are you dealing with stream or batch workflows? How your use cases evolve in times?…

If you can’t get straight answers, an orchestration solution should be the key to deal with complex business requirements, legacy, new data sources, team scales, etc…

They help to build pipelines you can leverage on long-term goals. This has a cost. An engineering cost.

First, your engineers will have to either know or learn a specific toolkit. Most orchestrators are here for only a decade or so. There are few very experienced guys on these, or if so, they are very expensive.

Learning curves for these tools are not that deep. Still, you can’t learn an Airflow in one day as you did with [Jupyter Notebook](https://towardsdatascience.com/beyond-jupyter-notebook-9ff6be598313).

Learning a new tool today will pay dividends tomorrow. But time is money too.


## Trigger, trigger, trigger…

There is another alternative to orchestrator frameworks: cloud provider serverless features.

Either in Amazon Web Services, Google Cloud Platform, or Microsoft Azure, there are services to orchestrate tasks at scale and for very low prices.

**Function as Service**: This is one of the most interesting services. You can deploy and launch your code without providing any server. Either to collect or transform data, functions services are easy and quick to set up with a very low cost of operation.

**Container as Service**: Similarly you can ship your own container to build tasks or web services without any server setup.

**Storage**: Part of the cloud revolution, you can store terabytes of data very cheaply nowadays. You can even set levels of accessibility to optimize costs.

**Queuing**: Cross service asynchronous communication. Message queues can be used to decouple heavyweight processing, to buffer or batch work, and to smooth spiky workloads.

**Event Triggering**: Trigger events according to rules. Links tasks.

Here is a high-level schema example with AWS features. It shows data ingestion from an FTP to a data lake, the transformation of these data into a data warehouse, and then the creation of an automated report or the trigger of a machine learning task.

**Orchestrating tasks with these features offer some advantages.**

**Quick development**. Within a unique cloud provider, these services follow the same kind of design. When you learn to use one it’s easy to go with others. It perfectly fits with other tools you’re used to in that cloud environment. Each service isn’t gathered in a whole framework. They are little pieces of software you can plug and play.

**No added infrastructure cost**. Most of the time, there is no need to set up a server or any complex architecture. There are services. You pay what you use.

**It enforces task isolation**. Designing tasks with a small scope is a good way to design things. Especially in terms of input and output. That way you can regularly add or update some parts when needed.

Classic orchestrator tools offer design freedom to create tasks in very complex ways. While this freedom is also true with cloud provider services, you’re still in a restricted environment. You can’t create your own service.

This is close to what it’s called “vendor lock-in”. However, restrictions often free your minds from too complex design decisions.

You just orchestrate your tasks. Straight.

In fact, this is true in the classic orchestrator landscape. But you need more time and experience to correctly design inputs and outputs of your tasks to keep things small. More freedom, more possibility, and so, [more thinking, more debate](https://medium.com/maisonsdumonde/migration-to-airflow-one-year-feedback-91a8a72cb4a1).

Sometimes you want to get shit done.

**Nevertheless, there are some downsides.**

The more you create workflows and triggers the more it’s complex to track the whole thing. The big picture is lost against ease of development in the short-term.

One can think of documentation with some housemade tools or [third-party solutions](https://www.cloudockit.com/) to gather all pipelines metadata information in one place. It can work in the beginning, but when you’ll have to scale, things will turn bad.

Vendor lock-in is also a concern. You have chosen to work with a cloud provider, so it’s part of a bigger choice. Still, you can’t customize, you can’t add new features. Your legacy can crash at any vendor's new update more easily.

As you design all your workflows according to the rule of the cloud provider, you can’t get out of it quickly.

These are classical arguments in the more global housemade, open-source software vs third-party services. Still a good point to keep in mind when building your workflow.

## When? Who? Where?

As always, each concept has its own set of advantages and defaults.

We described two ways of orchestrating tasks from a data perspective.

When choosing one or the other still depends on some factors:

If your team is small, beginning a new project, a new infrastructure (bonus if it’s cloud provider bounded), your choice might be cloud provider features.

You won’t have to set up any servers, don’t worry that much about big design problems, you can iterate quickly toward business solutions (and so deliver quickly) and it’s still very cheap.

If you have engineers, growing projects, many difficult data inputs and outputs then an orchestrator tool might be a good idea.

You get the advantage to get all your orchestration separate in proper files and you can visualize the big plumbery in a user interface.

Most of the time you can customize it. Add new features. Totally free if open-source but with engineering costs.

Anyway, **the whole landscape is mature**. It’s always good to get many solution opportunities for different sets of problems. The key is to experiment and learn about several assets to better know what it’s good for the current project.

If you want to discuss further about these problematics, let me know in the comments. I’ll be happy to get your sights on these always moving technologies.
