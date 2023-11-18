---
authors: [Georg Makowski]
title: Page Navigation
description: Sidebar, Prev/Next and Table of Contents
subtitle: false
date: 2022-01-18T23:25:10+01:00 
menu:
  doc:
    name: Navigation
    parent: page
    pre: switch_right
categories: [template]
tags: [navigation, page]
weight: 640
---

The navigation between consecutive pages and the table of contents (TOC) is mostly generated from already existing data. We only need to set the additional {$weight} parameter for documentation pages.
{.p-first} <!--more-->

Which parameter orders our pages depends on its section:

Documentation pages
: are ordered by their page `weight`. This is the one additional mandatory parameter we need to fill with a decimal number.

News, blog, and article postings
: are ordered by the publishing `date` which is mandatory for all pages anyway.

## Order of pages

### Documentation

The parameter to order the documentation pages is the _page {$weight}_. Hugo also accepts weights for menu entries, but this theme relies only on the general page weight. The first page gets the smallest decimal weight number, the second page a bigger one and so on.
{.inline}

{{< mnote >}}And there is also a special section weight (undocumented afaik).{{< /mnote >}}

The idea is simple but there is **one big caveat**: We should never use continuous decimal numbers in a growing project because we probably add new pages and sections later or reorder existing ones. With continuous numbering, we would need to change all numbers again and again. Better to leave ample space (lots of missing numbers) right from the start.

For this project, I was expecting roughly 10 sections with 10 documentation pages in each one. I chose to use only every tenth decimal number in the beginning. The first section got `weight: 100`, the first page therein `weight: 110` and so on. The second section `weight: 200`… &ensp;Works fine for me.
{.inline}

{{< mnote >}}
Actually, I started the intro section with {$1} --- :wink:. Later I needed the overview section to be the first one and had to change many weights to make room. Should have started with {$100} like I’m telling you.  
{{< /mnote >}}

### Postings

Are usually ordered by their publishing date. But we can optionally add weight to the frontmatter if we want a posting to appear always first: We give him and only him `weight: 1`.

Hugo offers many other options to [order pages](https://gohugo.io/templates/lists/#order-content). The effort to adapt the templates for specific use cases should be relatively small.

## Table of Contents (ToC)

The theme fills the ToC with three levels of headings by default. The minimum number of headings for a TOC is 2 by default.

These constraints are configurable in the `params` section of our project config or individually in the page frontmatter:

```yaml {.left-in}
toc:
  startLevel: 2      
  endLevel: 4        
  minNumHeadings: 2
```

We can reduce the depth with `endLevel` and change the minimum number of headings for a TOC with `minNumHeadings`.