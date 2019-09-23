# &lt;color-picker-field&gt;

[&lt;color-picker&gt;](https://github.com/juchar/color-picker-field) is a themable Web Component providing the possibility to select a color using sliders, inputs or palettes.

[Live Demo ↗](https://juchar.github.io/color-picker-field/components/color-picker-field/demo)
|
[API documentation ↗](https://juchar.github.io/color-picker-field/components/color-picker-field)

[![Build Status](https://travis-ci.org/Juchar/color-picker-field.svg?branch=master)](https://travis-ci.org/Juchar/color-picker-field)
[![Bower version](https://badgen.net/github/release/juchar/color-picker-field)](https://github.com/juchar/color-picker-field/releases)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/jucharcolor-picker-field)

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="color-picker-field.js">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<color-picker-field></color-picker-field>
```

[<img src="https://raw.githubusercontent.com/juchar/color-picker-field/master/screenshot.png" width="400" alt="Screenshot of color-picker-field">](https://github.com/juchar/color-picker-field)


## Installation

The Vaadin components are distributed as Bower and npm packages.
Please note that the version range is the same, as the API has not changed.
You should not mix Bower and npm versions in the same application, though.

The converted ES Modules are only published on npm, not pushed to GitHub repositories.

### Bower (HTML Imports compatible version)

Install `color-picker-field`:

```sh
bower i juchar/color-picker-field --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/color-picker-field/color-picker-field.html">
```

### npm (ES Modules compatible version)

Not available yet.

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The component with the Lumo theme:

  `theme/lumo/color-picker-field.html`

- The component with the Material theme:

  `theme/material/color-picker-field.html`

- Alias for `theme/lumo/color-picker-field.html`:

  `color-picker-field.html`


## Running demos and tests in a browser

1. Fork the `color-picker-field` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) and [Bower](https://bower.io) installed.

1. When in the `color-picker-field` directory, run `npm install` and then `bower install` to install dependencies.

1. Make sure you have [polymer-cli](https://www.npmjs.com/package/polymer-cli) installed globally: `npm i -g polymer-cli`.

1. Run `npm start`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:3000/components/color-picker-field/demo
  - http://127.0.0.1:3000/components/color-picker-field/test


## Running tests from the command line

1. When in the `color-picker-field` directory, run `npm test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `npm run lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).  
Huge credits also go to the developers of [TinyColor](https://github.com/bgrins/TinyColor) that is used for the internal color handling, released under the [MIT license](https://opensource.org/licenses/MIT).


## Contributing

  To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
