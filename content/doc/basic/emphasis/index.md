---
title: Emphasis
description: Accentuate pieces of text
date: '2021-03-23T21:46:33+01:00'
weight: 116
authors:
- Georg Makowski
categories:
- Markdown
tags:
- Inline
menu:
  doc:
    name: Emphasis
    parent: basic
    pre: format_italic
resources:
- name: featured
  src: brett-jordan-vyPVtz5p8D4-unsplash.jpg
  params:
    alt: The word “Bold” in bold letters
    hint: text
    ratio: 1.5
---

We have two types of emphasis to accentuate segments of our content: _Light emphasis_ and **strong emphasis**. And we can **_nest_** both types.
<!--more-->

## Light emphasis

Surrounding a word with an asterisk `*` or underscore `_` produces light emphasis:

- `*asterisk*` is rendered to *asterisk*.

- `_underscore_` shows as _underscore_.

Light emphasis is styled with an _italic_ version of the text font. Italics in the body copy don't attract attention at first glance but get noticed while reading the lines.

## Strong emphasis

Surrounding a word with two asterisks or underscores produces __strong emphasis__:

- `**asterisks**` is displayed  **asterisks**.

- `__underscores__` lead to __underscores__.

Strong emphasis is styled with a **bold** version of the normal text font. This way the emphasis stands out. A good choice for distinctively structured text like documentation, because we recognize the heavier weight immediately while scanning a page.

## Nested emphasis

If you prefer the asterisk `*` for emphasizing, the underscores come in handy when typing a nested emphasis. Both parts are much easier to distinguish then. To mix both types of emphasis you could type:

- `_one and  **two**_` for _one and  **two**_.
- `**one and _two_**` for **one and _two_**.
- `_one and *two*_` for _one and *two*_.

The nesting possibilities of the CommonMark specification are endless, but only a few combinations are meaningful in practice.

## Emphasis in the middle of a word

We can emphasize 

- `Un*fooling*believable` &emsp;for&emsp; Un*fooling*believable

- `Un_fooling_believable` &emsp;is left as it is:&emsp; Un_fooling_believable

## Which formatting characters are the best choice?

At first sight, CommonMark treats the asterisk `*` and the underscore `_` as equally appropriate options to mark either light or strong emphasis. But the Markdown concept suggests — at least to me — to use underscores for light emphasis because they have a smaller footprint in the Markdown. The asterisks are thicker and suit the strong emphasis.

I haven’t checked the specification details for this argument, but the asterisks are the only possible option in CommonMark to strongly emphasize characters inside of words.

We sometimes want to emphasize the first letter of some words to mark their abbreviation for example:

- `**H**yper-**T**ext **M**arkup **L**anguage`&emsp;for&emsp;
**H**yper-**T**ext **M**arkup **L**anguage is working fine.

- In `__H__yper-__T__ext __M__arkup __L__anguage` the underscores are ignored by CommonMark (Goldmark) and even left inside the text:
__H__yper-__T__ext __M__arkup __L__anguage. :thinking_face:

## General considerations

### Emphasis for sans-serif fonts {.h-info}

Sans-serif fonts often don’t include a distinctive italic style, even if their font includes an italic specimen. They look like a tilted version of the regular font --- which is a little awkward. You should prefer bold emphasis in your Markdown when you already know the result will be displayed in a sans-serif font.

### Don’t overuse it {.h-warn}

This dedicated page is full of emphasis, but in general, we should apply emphasis sparingly. Overemphasizing text is irritating and defeats the purpose. If there is emphasis everywhere, it doesn’t stand out anymore.
