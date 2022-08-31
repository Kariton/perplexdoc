---
author: Georg Makowski
date: "2021-03-24T21:44:46+01:00"
description: List marked with ordered natural numbers
menu:
  doc:
    name: Ordered List
    parent: basic
    pre: format_list_numbered
subtitle: false
title: Ordered List
weight: 130
categories: [Markdown]
tags: [Block, Ordered List]
resources:
  - name: featured
    src: jan-antonin-kolar-lRoX0shwjUQ-unsplash.jpg
---

Ordered lists group related items and mark them with ascending counters.
{.p-first} <!--more-->

## Syntax

List items begin with an integer followed by a period and a space. The order of the numbers has no effect on the result, we even may use always the same number. Markdown treats the numbers as markers and ignores their values. Every list or sub-list will follow 1, 2, 3…, a, b, c… or I, II, III… .

It’s possible to manipulate the counters with attributes. The one currently available is `.ol-continue` and lets us continue to start a new list where the last one did end (see [With Interruption]({{< relref "#interruption" >}})).

{{< mnote up=8 >}}
**The first number** gets injected as the `start` attribute of the `<ol>`-tag. But this value affects only the browser-internal counter. Because Perplex declares CSS-counters itself, all lists start with 1 or a by default.
{{< /mnote >}}

## Layout

The examples here are short, because the styling is basically the same as for the unordered [bullet list]({{< relref "doc/basic/bullet-list" >}}).

### Tight List

1. First item
2. Second item
3. Third item

### Nested Loose List with interruption {#interruption}

1. {{< farfar 1 >}}

    1. {{< farfarshort 1 >}}

    2. {{< farfarshort 1 >}}

2. {{< farfarshort 2 >}}

#### The interruption {.h-p .up-1}
of an ordered list for a general remark should not interrupt the counting, we need to go on afterwards where we left. The class [attribute]({{< relref "doc/attribute" >}}) `{.ol-continue}` lets a list continue, where the previous did stop.
{.up-1}

1. {{< farfarshort 1 >}}

   1. {{< farfarshort 1 >}}

      1. {{< farfarshort 1 >}}

      2. {{< farfarshort 1 >}}
      3. {{< farfarshort 1 >}}
      4. {{< farfarshort 1 >}}

   2. {{< farfarshort 3 >}}

2. {{< farfarshort 1 >}}
{.ol-continue}
