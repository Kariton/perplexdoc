---
title: Ordered List
description: List marked with ordered natural numbers
subtitle: false
date: '2021-03-24T21:44:46+01:00'
weight: 130
authors:
- Georg Makowski
categories:
- Markdown
tags:
- List
- Block
menu:
  doc:
    name: Ordered List
    parent: basic
    pre: format_list_numbered
resources:
- name: featured
  src: jan-antonin-kolar-lRoX0shwjUQ-unsplash.jpg
  params:
    alt: An old wooden library database
---

Ordered lists group related items and mark them with ascending counters. They provide a very clear structure for a relatively short number of items.
{.p-first} <!--more-->

Consider inserting a normal paragraph or another block element in between the items of a long list.
## Syntax

List items begin with an integer followed by a period and a space. The order of the numbers has no effect on the result, we even may use always the same number. Markdown treats the numbers as markers and ignores their values. Every list or sub-list will follow 1, 2, 3…, a, b, c… or I, II, III… .

{{< mnote up=14 >}}
**CommonMark** injects the **first number** of a list as the `start` attribute of the `<ol>`-tag if this number is not equal to {$1}. Unfortunately, this value is only accessible for the browser-internal list counter. This theme declares its own counters and I’ve found no good way to get hold of this start value.
{{< /mnote >}}

It’s possible to manipulate the counters with attributes. The one currently available is `.ol-continue` and lets a new list continue counting where the last one did end (see [With Interruption](#nested-loose-list-with-interruption)).

## Layout

Only two layout examples are following here because the styling options for an ordered list are basically the same as for an unordered [bullet list](/doc/basic/bullet-list).

### Tight List

1. {{% pangram %}}
2. {{% pangram %}}
3. {{% pangram %}}
{.placeholder data-pagefind-ignore="all"}

### Nested Loose List with interruption 

1. {{% pangram 2 %}}
   {.placeholder}

    1. {{% pangram 2 %}}
       {.placeholder}

    2. {{% pangram 2 %}}
       {.placeholder}

2. {{% pangram 2 %}}
   {.placeholder}
{data-pagefind-ignore="all"}

#### The interruption {.h-p .up-1}
of an ordered list for a general remark should not interrupt the counting. We need to proceed where we left off. The [class attribute](/doc/enhancing/attribute/howto) `{.ol-continue}` lets a list continue counting, where the previous did stop.
{.up-1}

1. {{% pangram 3 %}}
   {.placeholder}

   1. {{% pangram 2 %}}
      {.placeholder}

      1. {{% pangram 2 %}}
         {.placeholder}

      2. {{% pangram 2 %}}
         {.placeholder}

      We can **interrupt every sub-list** with a text block and continue afterward:

      3. {{% pangram 2 %}}
         {.placeholder}
      
      4. {{% pangram 2 %}}
         {.placeholder}
      {.ol-continue}

   2. {{% pangram 3 %}}
      {.placeholder}

2. {{% pangram 1 %}}
   {.placeholder}
{.ol-continue data-pagefind-ignore="all"}
