# Accessibility Testing with Storybook

Storybook is a great way to orient oneself in a web application with lots of components. Need to isolate a component to see how accessibility changes will affect it? If Storybook is in place, it might be the best place to start.

To start Storybook, run this command:

```
yarn storybook
```

## Exercise: Add a story for the DropdownList component

Using the `ListingExcerpt.stories.jsx` file as a reference, create a
new story in the same directory for the `DropdownList` component.
It can be imported from the same directory as the `ListingExcerpt`.

You can peek at the answer in `answer/DropdownList.stories-test.jsx`. Be sure to
update the filename to exclude `-test` for it to show up in Storybook.

Once you have a story for the DropdownList component, you can do some manual testing
in isolation and make accessibility improvements to it.
