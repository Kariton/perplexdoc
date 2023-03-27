---
author: Georg Makowski
title: Hugo’s local Server
description: Show an instant preview in your browser 
subtitle: false
date: 2022-09-11T14:58:16+02:00 
weight: 35
menu:
  doc:
    name: Local Server
    parent: workflow
    pre: dns
resources:
  - src: ales-nesetril-Im7lZjxeLhg-unsplash.jpg
    name: featured
    params:
      alt: A half open glowing computer notebook
categories: [Getting started]
tags: [Hugo]
---

When we are working on our content, we often like to examine the resulting pages immediately. To generate an immediate (local) preview, we can run Hugo in its server mode.
{.p-first} <!--more-->

 A command like the following in the root of a project starts the [Hugo server][server]:

```sh
hugo server -D --minify --navigateToChanged 
```

{{< mnote up=6 >}}
Hugo’s server is configurable and can also show your site under a public URL and an arbitrary port. But it's **not** a full-fledged web server and can't handle a lot of traffic. The server is **only** useful for private previews.
{{< /mnote >}}

The HTML pages are rendered into memory and the site is served under <http://localhost:1313> by default.

- The flag `-D` lets Hugo include **drafted** files. All files created with `hugo new` are usually configured as drafts, using `draft: true` in the front-matter. When a Markdown file is ready for [publishing](/doc/intro/workflow/publish), we need to remove this entry or change it to `draft: false`.

- The flag `--minify` tells Hugo to remove unnecessary whitespace from the resulting code.

- The flag `--navigateToChanged` tells the server to relay the page of the last changed file to the browser. As soon as we save a file the corresponding page pops up in the browser.

### Set a reasonable auto-save delay {.h-tip .h-p}
Some editors are saving our work so fast by default, that nearly every keystroke leads to a new file version and the regeneration of the corresponding page. When we are in the process of changing sensitive content like front-matter parameters this can easily bring down Hugo’s server, because Hugo can’t process inconsistent files. Then we have to restart the server, which is not a big deal, but gets annoying after a while. It’s better to set the auto-save delay to a bigger value, which lets us save consistent file versions manually.

## Adding your first content {#first}

To generate a new Markdown file, we go to the root folder of our project and use a command like

```sh {.left}
hugo new blog/first.md
```

The new file is created in the folder {$content/blog}. It already contains a front-matter section with some reasonable entries or placeholders to start with.

The `title`, `date` and `description` parameters are mandatory for Perplex as they are for many other themes. The pages headers, page sorting and the navigation depends on them.

```yaml {class="left" linenos=true }
---
title: First 
description: Description placeholder
date: 2022-07-01T21:22:27+02:00
categories: []
tags: []
draft: true
---
```

The title is guessed from the file name and the date from the moment we ran the `hugo new` command.[^1]

The Markdown content begins after the front-matter. Hugo will update our site in the browser as soon as we save a changed version of the file. When we make mistakes, Hugo will display a descriptive error message on its console and in the browser (if Hugo’s server is providing the pages).

[^1]: The templates for the file generation with `hugo new` reside in the folder {$archetypes}.

### Example session {#example}

TODO: Show all the steps described above. The following session is an old test:

{{< asciinema id=fFz7xPpWGOdRCcLXBdYTXqPXu rows=20 startAt=2  >}}

[server]: https://gohugo.io/commands/hugo_server

### Editor links {.h-tip}

A few editors offer a protocol to open files with a special link. As of now, Perplex provides a link to open the content file in a local instance of _Visual Studio Code_.

{{< mnote up=8 >}}
Links to other editors could be provided, too, if they offer this functionality.
{{< /mnote >}}

This link is only present if Hugo runs in server-mode. Then, its placed in the date at the top or the bottom of regular pages. Because taxonomy pages don’t show a date, the link is placed in the title.
