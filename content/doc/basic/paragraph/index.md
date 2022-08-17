---
author: Georg Makowski
date: "2021-03-23T21:38:25+01:00"
description: Essential building blocks of text
featImg: finn-mund-8q2r2XQpDO0-unsplash.jpg
menu:
  doc:
    name: Paragraphs
    parent: basic
    pre: segment
subtitle: false
title: Paragraphs
weight: 108
categories: [Markdown]
tags: [Block]
---

Paragraphs are essential for a website focused on textual information. Comfortable proportions and surrounding whitespace contribute to their legibility in Perplex. The layout of other elements is related to them.
{.p-first} <!--more-->

## Syntax

Paragraphs are text segments, which are completed by an empty line in the Markdown.

In addition to the normal paragraph Perplex offers a **first** paragraph — like the first one on this page — a **big** and a **small** one. These styles are applied with the [attributes]({{< relref "attribute" >}}) `{.p-first}`, `{.p-big}` and `{.p-small}`.

## Layout

Line height length follow the proportions of the fonts. The space between subsequent paragraphs is twice as big as the space between two lines inside a paragraph. On small screens it’s a little less.

{{< mnote up=11 >}}
In print subsequent paragraphs are sometimes separated by indenting their first line, to interrupt the reading flow as little as possible.

The technique is mostly used for prose, but also appropriate for notes like this one. Here, a vertical separation would falsely suggest the beginning of a new note.
{{< /mnote >}}

### Two standard Paragraphs

{{< farfar 2 >}}

### Big Paragraph

{{< farfar 1 >}}

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
{.p-big .blind}

{{< farfar 1 >}}

### Small Paragraph

{{< farfar 1 >}}

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
{.p-small .blind}

{{< farfar 1 >}}
