---
author: Georg Makowski
title: .markdownlint.yaml
description: Configuration file for the Markdown linter
subtitle: false
date: 2022-04-18T13:33:28+02:00
weight: 999
featImg:
menu:
  doc:
    name: .markdownlint.yaml
    parent: appendix
    pre: edit
---

A Markdown linter helps to unify the markup style of the content. The following short configuration changes a few rules of [Markdownlint][mlint] for this project.
{.p-lead} <!--more-->

{{< highlight yaml "linenos=true" >}}
{{< readfile file="/content/.markdownlint.yaml" >}}
{{< /highlight >}}

[mlint]: https://github.com/DavidAnson/markdownlint "Markdownlint"
