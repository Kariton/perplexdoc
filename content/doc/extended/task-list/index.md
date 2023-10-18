---
authors: [Georg Makowski]
date: "2021-03-25T10:34:57+01:00"
description: A feature designed from and for GitHub
menu:
  doc:
    name: Task list
    parent: extended
    pre: task_alt
subtitle: false
title: Task List
toc: false
weight: 250
categories: [Markdown]
tags: [List, Block]
resources:
  - name: featured
    src: glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg
    params:
      alt: Hand written task list
---

A task list on a web page should be an interactive element which directly changes the corresponding Markdown. A theme can't establish such a connection on its own.
{.p-first} <!--more-->

The task list element is a GitHub specialty. GitHub has established a bidirectional connection between the view in the browser and its hosted Markdown files.

Without that, we can still use the Markdown task list, but we can change it only in the content file.

## Syntax

```md
- [x] First entry of a task list, which has already been completed.
- [ ] Second entry
- [ ] Third entry
```

## Layout
The task list gets rendered into a static list with inactive input elements:

- [x] First entry of a task list, which has already been completed.
- [ ]  Second entry
- [ ]  Third entry
