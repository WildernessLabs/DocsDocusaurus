# TODO

* [ ] Default to index.md when clicking on the Developers top nav item, rather than jumping directly to Meadow Guides.
* [ ] Handle `{:standalone}` images ([example](http://localhost:3000/DocsDocusaurus/docs/Meadow/Meadow_Basics/IO/Digital/))
* [ ] Update to WL social card (becomes `<meta property="og:image" content="{whatever}" ... />`)
  * [ ] Find current WL social card, if any
* [ ] Deal with `npm install` warning for `@babel/plugin-proposal-object-rest-spread@7.12.1` to use `@babel/plugin-transform-object-rest-spread` instead
* [ ] Get some site setting values from config (possibly `customFields`), especially for footer details
* [ ] Footer: [May require theme work] Add "Portland, Oregon" as text-only label (no `to` or `href`)
* [ ] API docs links should be relative to the built site, currently absolute to the live docs until they are generated here.
  * [ ] Generate API docs (possibly via https://github.com/Jan0660/DocFxMarkdownGen)
* [ ] Handle current docs YAML front matter within the Docusaurus system.
* [ ] Refactor raw-HTML tables with `style="..."` attributes. Currently blowing up their own page build, which causes linked pages to throw errors for broken links.

## Notes

* You appear to be able to build successfully locally and have things blow up in deployment during `npm run build`.
* If a page contains weirdness, like a `style` attribute on a raw HTML element (e.g., [table at the bottom of Maple](http://beta-developer.wildernesslabs.co/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/)), it won't build correctly and won't throw an error. But, after that, any page that references it will have a broken link error, making them fail to build.
