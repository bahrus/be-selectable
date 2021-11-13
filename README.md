# be-selectable

```html
<nav>
    <a href="/demo/foo/firstView" be-selectable>My First View</a>
    <a href="/demo/foo/secondView" be-selectable>My Second View</a>
</nav>
```

Adds class "selected" to anchor element when the current route matches the href.

Additional features:

- [x] Listen for client-side address changes.
- [x] Fire event when selected status changes.
- [ ] Configure class name.
- [ ] Allow for transform to be specified on host container.