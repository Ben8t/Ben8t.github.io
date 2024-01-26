---
title: "Microsoft Excel in the era of big data"
meta_title: ""
description: "this is meta description"
date: 2020-02-01T00:00:00Z
image: "/images/blogs/microsoft_big_data.png"
categories: ["Analytics"]
tags: ["analytics", "excel"]
draft: false
---

It’s a tool we all already know and use in our everyday life. To build reports, create charts or even to schedule projects, we use Microsoft Excel for anything.

But we never really learned to use it. While it is not a major concern for most people, this is starting to cause problems for those working with data who have to deal with complex pipelines and systems.

What if we learn about how to build efficient and consistent spreadsheets? More than just to get closer to this engineering stuff, there are a lot of benefits for our daily tasks to strengthen these files with more efficiency, consistency and reproducibility designs.

## Microsoft Excel and the general misusage

When the Redmond company released Microsoft Excel in 1985 it is already a success. The fresh personal computer market is quite open and with the introduction of Windows 3.0, Excel sales overtake the principal competitor Lotus 1–2–3 from IBM.

Since then, Windows is installed on more than 85% of the whole personal computer market. Therefore, Excel and all the Office suite are the most used software out there.

This success is not surprising: Microsoft Excel is easy to use, gather many features and has a simple user interface. Everybody can use it and it is available everywhere. What more do we want?

In fact, doing a product usable by almost everyone brings some counterparts.

**Excel is not learned at school**. Everybody can use it and so everyone as a different way to work with Excel. There are no clearly defined consensus or good practices. The fact that we are not aware of this kind of tools from primary school results in a lack of knowledge once arrived in the professional world.

**Excel is not automatable**. Though a programmable language — Visual Basic — is embedded in Excel, it’s still difficult to automate heavy tasks and to communicate with other software. Moreover, it’s still reserved for insiders.

**Excel is not scalable**. We are in the era of big data, thus it’s common to work with huge files that can’t be loaded in Excel. All will depend on your computation power. It also seems difficult to run the Microsoft software on dedicated servers. Again, it is not designed for that kind of usage.

**Excel is not reproducible**. Last but not least. When you receive an Excel file, with a lot of aggregate data, colors, abbreviation or formulas, it is very difficult to understand how all this stuff was set up and gathered. Excel doesn’t save any of the workflow states involved in building such file.

## Data teams in the house

These four points were not big concerns for the last twenty years.

But in the meantime, a “new” field took off. With the development of computer resources, companies discovered that they have now a lot of data but don’t know what to do with it.

A whole set a of new jobs were created: data-scientist, data-analyst, data-engineer, machine learning engineer, data-devops, etc… The master word is DATA, and the main objective of these new positions is to create value from these large volumes of data.

With these novelties, a large group of tools has been created to build data pipelines, to better visualize data or to create mathematical models allowing to predict future values.

But most of the data still lives in Excel files. Moreover, the tools developed are sometimes complex to use and only trained engineers can handle them.

Thus, a kind of gap remains here. On one side there are a lot of people who still use spreadsheets as one of their main tool and the other side is composed of engineers who have to deal with complex pipeline but also work with these messy files.

As a result, a relatively large amount of time and money* is lost in cleaning these files and then integrating them into the whole data pipeline. Data teams are composed of great minds that learn mathematics, computer science, etc…

In practice engineers don’t study Excel either, they just know about computer and their data pipelines, so they can bargain with it. However, this does not add value compared to what they could do during this time.

What if instead of letting engineers to deal with these messy files, we try to learn how to create and maintain clean files, from the beginning? By following simple rules we can build efficient, reproducible and automatable files and stop creating confusing spreadsheets.

## Clean spreadsheets in a nutshell

Here’s an example of a common spreadsheet :

![](/blog/06_microsoft_big_data/01.png)

While it seems pretty well designed, it is not from a reproducible perspective.

From this simple example, we will describe what are the best practices to build a file easily understandable for a computer.

**The first row doesn’t correspond to a specific field.** Here it should be replaced by “year”, “type”, “product”, “quantity”. This is what is called “headers”.

**Format cells with** **colors and font** **shape.** While it's convenient for the eyes, add colors and bold/italic texts is not useful for a computer. Moreover, these arrangements are not objectives and understanding of the file may differ depending on the user.

**Putting** **data of different nature on the same row****.** Like above, it seems convenient but in fact, each row has to contain information about only one observation. In the same way, aggregate ensemble value like total or average on the same line as other values is generally not a good idea. It’s not consistent and not understandable by a computer.

**Merge cells.** Same thing: each row has to contain information about only one data observation.

**Separate tables in the same sheets or in tabs.** Differentiating the years in different tabs is a common practice to make tables easier to read, but it will not be readable by a computer which will only read one sheet.

These are simple rules aren’t they? Here is the result after applying these guidelines.

![](/blog/06_microsoft_big_data/02.png)

## The best of both worlds

If you don’t work in the tech field, you might say that is not a very useful spreadsheet. You’re partly right. Through this design, we can’t handle aggregate value like sums or average, and it’s less convenient to find a particular value.

Still, there are ways to handle such file and even improve the former design.

**Keep one sheet with tidy data.** Firstly, always keep a sheet with data formatted like we demonstrate above. That way, a data-scientist or anyone working with specific software will be able to load the file without processing it afterwards.

**Process and aggregate data in another sheet or application**. To compute sum, add filters, create plots or any other data processing, just open another sheet and do whatever you want. See this space like a laboratory where you can experiment with the data and build your reports. This way you keep raw data protected.

Moreover you might want to use or learn other tools. Nowadays, there exist a lot of user-friendly tools to create dashboard or reports. They provide great design options and contains a lot of features to build and export your reports.

If you want to go further, you can move to tools that these data guys use every day. These are mostly programmable languages like Python or R that bring much more freedom and reproducibility. As it is actually code, the whole workflow of creating charts and reports is saved. Therefore, you can share the code and anybody can edit it to adapt to his need.

Though it’s more complex than Excel, the high degree of freedom allows you to build anything you want. Last but not least: it is free.

## This is just about little adaptation

There are two main advantages to improve those files design:

Firstly, you are going to help tech guys. More than just altruism, it could speed up how engineers build data pipelines and so the number of insights, bringing more value to the company.

Moreover, by applying these rules at team or even firm scale, we can end up with a more homogeny “language” to deal with those files and thereby a better understanding and manipulation of data through the company.

It’s 2020 and we are all hearing these buzzwords on AI, Big Data, machine learning, etc… without really knowing what it is. In fact, it starts with data and so within everybody hands and their computer.