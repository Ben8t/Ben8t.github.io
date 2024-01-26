---
title: "Easy development environments with Operation"
meta_title: ""
description: "this is meta description"
date: 2020-05-10T00:00:00Z
image: "/images/blogs/operation.png"
categories: ["Ops"]
tags: ["ops", "cli", "terminal"]
draft: false
---

Like more and more engineers, data scientists are moving to [Docker](https://www.docker.com/). This framework sets apart resources and applications from the global system, helps for better reproducibility, and thus take out some headaches during software installation and deployment.

While it is mainly used to deploy isolated applications, we can leverage this technology in a slightly derived way to build lightweight and portable development environments.

With more and more different tools and libraries, it is sometimes difficult to know what is installed in our workstation and how to manage all this stuff easily. Everybody has encountered hours of debugging just to install a specific Python library or a Bash utility.

> _If you want to know more details about Docker technology, there are already a lot of good resources_ [_here on Medium_](https://medium.com/@kelvin_sp/docker-introduction-what-you-need-to-know-to-start-creating-containers-8ffaf064930a)_._

## Mobile laboratory with Docker

When I received my last laptop, I didn’t install any library or code utility on the global system installation. Instead, I moved a lot of my daily workspaces to Docker containers.

There are a lot of advantages to this workflow :

- You can install and test libraries without any concerns about destroying your global system. All isolated in containers.
- You keep track of your different workspaces and how they evolve, thanks to Dockerfiles — tracked in Git.
- You can run any of your workspaces on any computer. Just need Docker installed (which is pretty straightforward).
- You can share workspaces. Any of your projects can run on your friend’s computer.

Ok, that sounds good. We won’t be afraid anymore when installing or upgrading libraries. The possibility to run projects anywhere is quite exiting and getting all historic changes thanks to Git will save time.

Still, there is a little downside: you have to write long commands to be able to launch these containers

![](/blog/09_operation/01.png)

## We always want quick and simple tools

To resolve this pitfall, I first thought about [docker-compose](https://github.com/docker/compose). This tool is really useful to define and run multi-container Docker applications. It can resume a complex running operation into a simple `docker-compose up` command.

Yet, this is not the tool we would use in our context for at least two reasons :

First, you have to run docker-compose command either in the folder containing the `docker-compose.yml` or supply full Dockerfile paths which are quite long. This is not as easy as just typing `jupyter-notebook` in your console or launch the Rstudio application as we may be used to.

Secondly, you have to install docker-compose. Ok, this is not the hardest thing. But you still have to add that layer when installing your workspaces.

So I asked myself, what is the tool you have by default on the majority of Unix systems? Simple answer: Bash.

[Operation](https://github.com/Ben8t/operation) was born.

# Operation: Docker environments empowered with Bash.

The tool is very simple. In fact, it is just a mapping of docker container run commands to simple expressions in a shell script.

An environment — or “operation” — is defined by a **Dockerfile** and a **configuration file**. The latter is used to specify the container run command and all needed parameters such as volumes, environment variables, etc…

![](/blog/09_operation/02.png)

The mapping is interpreted into a simple [shell script](https://github.com/Ben8t/operation/blob/master/operation.sh). We can build all Docker images with a simple `operation briefing` .

Then, instead of running the long Docker command to run a Jupyter Notebook, you just have to type `operation jupyter` .

Operation was designed to be very simple, it is not a revolutionary tool, only a small side-project. The goal is to be able to run a single application or development tool without worrying about system dependencies and installation.

When working on a more complex project I will prefer to setup Dockerfiles or even docker-compose files inside the project rather than build it in Operation. It is better for project reproducibility.

As I use mainly use Python and R, I started to build “operations” like IPython or in-browser Rstudio environments. I also took advantage of this solution to set up some tasks I don’t do every day but which are very useful such as CSV file transformations, image rotation, or datetime operations.

These little utilities could be installed on my global system. They don’t require a lot of dependencies. Still, I want to be able to use them without worrying about my system configuration at all and also being able to find them quickly when I change to another workstation.

With Operation, I just have them at hand.

## The story behind

The idea here is not new. [Jessie Frazelle](https://twitter.com/jessfraz), former Docker-Google-Microsoft engineer already has a [full repository of Dockerfiles](https://github.com/jessfraz/dockerfiles) to run isolated desktop applications. I encourage you to read the [corresponding blog post](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/).

The name “Operation” came to my mind after reading Tom Clancy’s book. Like [military operations](https://en.wikipedia.org/wiki/List_of_military_operations), Docker containers are defined, operated, and then classified. To go through with the idea, I even add “secret” operation aliases. For example, you can launch an IPython console either running `operation ipython` or `operation rattlesnake`.

This lockdown also let me learn a bit about 3D modelization and rendering with Blender. Did some artworks around the Docker whale. [Find more on the specific Behance project](https://www.behance.net/gallery/95156933/Operation).

![](/blog/09_operation/03.png)

![](/blog/09_operation/04.png)

## Future development

I took advantage of the lockdown to start this little project and improve my Bash skills. As we used to face many new tools and environments, it will be probably updated regularly. A lot of improvements can be done like :

- Optimize image definitions and work on Docker’s good practices.
- Better installation process (apt-get support ?).
- Potential volumes “security” and authorizations breaches.
- Improve documentation.
- Adding operation “priorities” to quickly build specific Docker images.
- Better CLI without using any other tool than Bash.

For the moment each operation is quite close to my personal preferences. If you want to add your own operations: add your Dockerfile and fill a `config.yml` file and you are ready.

Do you have ideas for improvements? Think some new environments should be created? You can find [the repository on Github](https://github.com/Ben8t/operation). Don’t hesitate to add an issue or create a merge request, add a comment below, or [connect with me on Twitter](https://twitter.com/Ben8t). I will be glad to hear from you.