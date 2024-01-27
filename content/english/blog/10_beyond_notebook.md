---
title: "Beyond Jupyter Notebook"
meta_title: ""
description: "this is meta description"
date: 2020-11-03T00:00:00Z
image: "/images/blogs/beyond_notebook.png"
categories: ["Analytics", "Tools"]
tags: ["analytics"]
draft: false
---

For a lot of data scientists, notebooks are the only way they have learned to write code. It’s quick to set up, easy to run and we don’t have to really understand what’s under the hood.

Though Jupyter Notebook has [well-known defaults](https://towardsdatascience.com/the-case-against-the-jupyter-notebook-d4da17e97243), there is no better Python tool actually for exploratory analysis and quick tests.

Still, when facing more real-world issues, collaborating within a larger team or keep reproducibility, only using notebooks for every task is quite limiting.

The point is that you are probably lacking something if most of your work relies on Jupyter Notebook.

## From experiment to production

There is a great similarity between data science stuff and the pharmaceutical industry.

Any drugs we can find on the market today have been discovered, studied by one or many scientists. They had to experiment with new chemical combinations to find the molecule that would fight the corresponding disease. The first step lives in their laboratory.

It is the same thing with data science: you are facing a problem and try different solutions in your notebook to find a correct solution.

When the pharmaceutical solution passes the laboratory test it moves to a whole other world before reaching out to your care shelf. To do mass production, pharmaceuticals engage a lot of assets in production factories, security, and all sanity checks needed.

Go back to our world, we can see these production assets as the beard guys: data engineer or software engineer who are technically closer to the real final product. They don’t use Jupyter Notebook because it is not designed for that kind of stuff and they have much more constraints than you with your notebook to fit the solution in a real-world application and infrastructure.

## What is production?

We will go straight here while there will be a plain article to write about this.

Production is a state of development or a running application that reaches the real world, that engages people and their decisions. Therefore the underlying code and infrastructure that serve this environment have to be under perfect control to be sure that there is no downtime and no error for the end-user.

An end-user is either a real customer or people inside your company that drives their decisions based on your report, dashboard, or algorithm. In fact, it can be also you: think of a database that you are querying, if it is down for any reason you won’t be able to do your work.

To fulfill the requirements of such an environment, code has to be designed in a way that when an error occurs it must be easy to see and resolve. It should be also possible for anyone to upgrade the code without too many headaches — that way you’re not alone with your codebase and the company can still use what you produced when you leave.

To do so, it’s easier when your code is clean, throw good message errors, and informs when important steps are passed. Respecting coding guidelines, do code reviewing through merge requests, and have in mind some design patterns are often good things to enforce when you are dealing with production responsibilities.

All these points are far from our minds when we are writing into Jupyter Notebook. We generally write as we think, test, come back, re-test, etc… The code is often not clean, doesn’t deal with exceptions, nobody but you read it, etc… And this is perfectly normal, we are experiencing.

## The Software Engineering shift

Most of the fancy machine learning and experimentation part is not that important if it doesn’t serve a business or an “applicable” goal.

Nowadays the technology we have to build great and powerful models don’t require a Ph.D.: almost every developer with some computer science background can use Scikit Learn for example.

It is the same at the other side of the spectrum: you don’t need to be a Linux master to understand serverless applications, containerization, and basic production requirements and assets.

When we go out of scholarship we often see the data stack split over three different positions: Data Engineer, Data Scientist, Data Analyst.

But what if we can gather all the requirements of these positions into one job?

This is how is emerging the “Full Stack Data Scientist” position. Though the word can be a bit overblown, there is in fact a lot of value in considering such a possibility.

In this kind of position, you would need to cover a lot of tools. You will have to learn a lot of things. But as data science becomes more mature now, we can find a bunch of blogposts, API, and high-level frameworks to easily bring our code closer to production and business requirements.

In fact, the position is already there and you probably already have the skillset to do so: there are not so many teams with big data stack relying on several data-scientists, data-engineers, and analysts. Most of the jobs are titled “Data Scientist” but are often roles that require many different skills and experiences.

Most people working with data have some computer science backgrounds. For companies, it would be much more valuable to allow people to extend their skills a little bit rather than fill an NLP researcher position with a guy who doesn’t know what is a server…

## Another workflow, closer to production

There is a huge lack of educations in doing stuff in production environments. So many people will take classes and feel very comfortable with NumPy/Pandas/Scikit-learn but have no idea how to make it works in the real world.

Though the job of a Data Scientist is not necessarily to reach production and deployment requirements, it might be a huge gain of time if we think ahead of how our work will be useful and applicate in real solutions.

There is no perfect remedy, and Jupyter Notebook is still a fantastic tool to explore and develop your features. But as we said earlier, your notebook — as well as it is — is not a finality.

Below is my personal workflow: it helps me to keep in mind that my code has to be sharp, consistent, and reproducible.

_Disclaimer: this will probably not fit with your way of working, but I think it worth sharing personal workflow to see how others make their bit._

1. **Always start on paper**

This is probably the most important step. If you start to code without having thought beforehand you are very likely to reach a dead end. You will feel to lose your time at first, but you are winning in the long run. Get a quick but proper design first, then start to code.

2. **Write code in a stateless way**

Instead of using Jupyter Notebook to execute my code chunks, I prefer to use its old brother: [IPython console](https://ipython.readthedocs.io/en/stable/index.html).

That way, my code is not saved (though I could run [the %save magic command](https://ipython.readthedocs.io/en/stable/interactive/magics.html)). So I have to save it and by the way, refactor it in proper Python files.

Furthermore, it forces me to think of my code as a whole, and so build separate functions in modules. This kind of code is much more powerful than Jupyter Notebook cells to be integrated into real-world applications and to fit into more complex pipelines.

3. **Think about reproducibility.**

Along the way to a working solution, I always ask myself how my co-workers can run my code on their computer. If your colleagues can run your solution independently they could experiments and reach out some pitfalls easier. That way my developments depend less on my local environment and it is closer to a production one.

My easy to go solution is to always write a README with build and run instructions. I tend to use Docker to skip headaches during setup (and to be closer to production environment) but starting with a simple requirements.txt is better than nothing.

Not only for production, it is also important for “future you”. When you are looking back at your code several months after writing it, you will thank yourself for writing documentation and add good setup instructions. It will save you a lot of time.

![](/blog/10_beyond_notebook/01.png)

## Conclusion

So what? Do we have to forget our cheering notebook for a full integrated IDE or even working only with our terminal? Do we have to learn all the amount of tools out there to be able to work from very raw data to user frontend application?

These questions have probably no straight answers, and as always, it will depend on what you have to do. Still, being curious about other possibilities and tools make you a better craftsman and helps you to see things differently.

More than the straight result you get in your notebook, this is the way you are designing and integrate solutions in the real world that make a success in the end.

> Amateurs focus on outcomes more than process. The more professional you become, the less you care about results — you still get results, but that’s because you know you can rely on the systems and the process. [_Ryan Holiday_](https://medium.com/@RyanHoliday)_._

_Thanks to_ [_Ismail Addou_](https://medium.com/@ismailaddou) _for the review and comments!_