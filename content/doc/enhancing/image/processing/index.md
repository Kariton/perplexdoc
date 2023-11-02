---
authors: [Georg Makowski]
title: Image Processing
description: The theme generates all necessary versions 
subtitle: false
date: 2023-03-23T11:51:34+01:00 
menu:
  doc:
    name: Processing
    parent: image
    pre: engineering
resources:
  - src: usgs-eVcfzGhVpYc-unsplash.jpg
    name: featured
    params:
      alt: Complicated image
categories: [markdown]
tags: [image, block]
series: [images]
weight: 320
---

The theme relies on the image-processing methods integrated into Hugo.
{.p-first}
<!--more-->

Many different-sized versions of every image are generated automatically, so every browser client can load a near-optimal size. We only need to supply an original image that is large enough.

## Resolution

The following table contains the necessary original width for all possible image sizes. For crisp images on high-density screens, we should provide images with double-density if anyhow possible.

| Image type                        |            Minimum width             |        2&times;density         |
| :-------------------------------- | :------------------------------: | :----------------------------: |
| extra-large block                 | {{% mod-img/width "xlarge" 1 %}} | {{% mod-img/width "xlarge" %}} |
| large block                       | {{% mod-img/width "large" 1 %}}  | {{% mod-img/width "large" %}}  |
| text (figure default)                   |  {{% mod-img/width "text" 1 %}}  |  {{< mod-img/width "text" >}}  |
| small (embed default) |      {{% mod-img/width "small" 1 %}}      |     {{% mod-img/width "small" %}}     |
| tiny                    |     {{% mod-img/width "tiny" 1 %}}     |     {{% mod-img/width "tiny" %}}     |
| micro                |     {{% mod-img/width "micro" 1 %}}     |     {{% mod-img/width "micro" %}}     |
{.normal}

When we build a project with lots of images — more than hundred like this project — we have to show a little patience on the first Hugo run. Image processing may take a few minutes. The generated images are cached by Hugo and we don’t have to wait again in subsequent runs.
{.inline}

{{< mnote >}}
When we publish our site with the help of a service provider we need to make sure caching works. (&rightarrow; [Publish](/doc/intro/workflow/publish))
{{< /mnote >}}

In case we can’t provide a large enough version of an image, Perplex applies an [excellent interpolation filter][filter] (provided by Hugo) to enlarge its size smoothly. Those interpolated images may look blurry nonetheless, there is no way to get the missing information back. A high resolution of the original is always preferable.

## Manipulation

### TODO

- Improve templates
- Document resource parameters


[filter]: https://gohugo.io/content-management/image-processing/#resampling-filter
