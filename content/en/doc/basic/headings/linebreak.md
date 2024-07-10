### Linebreak for Headings

There is one problem, we can’t solve directly with Markdown, attributes or even a shortcode. Sometimes we want to force a linebreak in long headings, when the usual line length on larger screens breaks them at an unfortunate place.

In this case we can use the [replacement]({{< relref "doc/enhancing/replace/howto-replace">}}) `{‍/}` like this:

```md
### A long subsection heading about a very complex topic{‍/}exceeding the line length
```

#### Beware {.h-warn .h-p}
This special linebreak replacement is only needed in headings or titles, because they can’t be wrapped in Markdown. Otherwise Markdown [can handle them](/doc/basic/linebreak).

### A long subsection heading about a very complex topic exceeding the line length

Because of the line break before the last word this heading looks quite bad on larger screens. We can correct this with the replacement `{‍/}`:

### Another subsection heading about a very complex topic{/}exceeding the line length

The inserted `<br>`-tag gets disabled on small screens, because it would make things even worse there for long headings.
