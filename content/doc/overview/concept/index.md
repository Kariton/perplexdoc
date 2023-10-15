---
authors: [Georg Makowski]
title: Concept
description: General goals of the theme
subtitle: false
date: 2022-05-12T22:29:06+02:00
menu:
  doc:
    name: Concept
    parent: tldr
    pre: featured_play_list
resources:
  - src: drew-beamer-xU5Mqq0Chck-unsplash.jpg
    name: featured
    params:
      alt: Horizon through a lensball
      zoom: 1.6
  - src: IBM_Plex_Sans.svg
    name: plex_sample
    params:
      background: light
      posh: left
      width: tiny
categories: [Overview]
tags: [feature]
weight: 5
---

A coherent site structure for different publishing formats and a versatile typographic layout for enriched Markdown content with good legibility on all screen sizes are the main traits of this theme.
{.p-first} <!--more-->

Perplex is an all-purpose theme for technical content. There are templates for three levels of documentation, a news stream, blog postings, author pages, and taxonomy pages. Templates for a distinct start page and articles will follow. At the moment, the example site included in the theme shows the news section as a start page the same way this documentation does.
{.inline}

{{< mnote down=9 >}}The entry `url: /` in the front-matter of the section’s list page does accomplish this.{{< /mnote >}}

## Design & Layout

![Sample of IBM Plex Sans](plex_sample)

The theme includes the open-source font family [Plex](https://www.ibm.com/plex/) and the layout takes their proportions into account from the beginning. But the design does absolutely **not** follow [IBM’s corporate design system](https://carbondesignsystem.com/).

The layout adapts to all screen sizes in a **fluid-responsive** way. This concept has been around for a while but doesn’t get realized often despite its [many advantages](/blog/accessibility-of-fluid-typography).

Many proportions can stay fixed between breakpoints beyond mobile and this means:

- The viewport is always used at full width when the screen space is limited.

- The optimal line length stays fixed on all wider screens beyond mobile.

- adjacent columns can stay in sync, we can place layout elements besides each other instead of letting them just flow from top to bottom like a stream.
{.col2}

All text is placed on a **baseline grid** to introduce a comfortable vertical rhythm and coherence between adjacent text elements. Combined with the fluid-responsive design this allows placing images (and other block elements) in and around the text with high accuracy. The blog contains layout demos for [stand-alone](/blog/image/standalone) & [embedded](/blog/image/embed) images, or [code blocks](/blog/codelayout).

## Usage concept

The theme is as self-sufficient as reasonably possible. Fonts and libraries are included, plugins are sometimes retrieved from the secure and GDPR-compliant CDN <https://jsdelivr.com>. Recent copies of all module dependencies are available in the {$_vendor} folder for an easy start. No other installations than the extended binary (for WEBP) of a very recent Hugo release and the theme are required. To stay up to date with the ongoing theme development, the installation of a GoLang environment is certainly more convenient than updating the theme manually.

## Support & development

There will be no public support channel in the foreseeable future because I won’t be able to maintain it. Improving this theme takes all my spare time. Support and collaborative development will only work bidirectional. Should you miss some information in the docs, find a bug in the theme, or have a suggestion for an improvement or a feature you need to file an official issue in the repositories (&rightarrow; [Introduction](doc/intro/perplex#in-case-of-problems)). Again, I will **never** answer private questions for help.

In case there are essential contributions to the theme or the modules it depends on, I would love to turn the effort into a community project and change the license holder accordingly to assure, that no contribution is ever in vain.
