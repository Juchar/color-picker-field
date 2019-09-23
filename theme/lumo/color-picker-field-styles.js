import "@vaadin/vaadin-lumo-styles/color.js";
import "@vaadin/vaadin-lumo-styles/sizing.js";
import "@vaadin/vaadin-lumo-styles/spacing.js";
import "@vaadin/vaadin-lumo-styles/style.js";
import "@vaadin/vaadin-lumo-styles/typography.js";
import "@vaadin/vaadin-text-field/vaadin-text-field.js";
import "@vaadin/vaadin-icons/vaadin-icons.js";
import "@vaadin/vaadin-button/vaadin-button.js";
import "@vaadin/vaadin-context-menu/vaadin-context-menu.js";
import "@polymer/polymer/lib/elements/dom-module";
import "@juchar/color-picker/src/color-picker.js";
import {html} from "@polymer/polymer";

const $_documentContainer = html`
<dom-module id="lumo-color-picker-field" theme-for="color-picker-field">
  <template>
    <style>
      :host {
      --color - picker - field - alpha - checkerboard - foreground - color: var(--lumo-contrast-20pct);
      --color-picker-field-alpha-checkerboard-background-color: var(--lumo-base-color);
      --color-picker-field-alpha-checkerboard-tile-size: calc(var(--lumo-size-xs) / 2);
      --color-picker-field-alpha-checkerboard-background-style: {
      background-image:
      linear-gradient(45deg, var(--color-picker-field-alpha-checkerboard-foreground-color) 25%, transparent 25%, transparent 75%, var(--color-picker-field-alpha-checkerboard-foreground-color) 75%),
      linear-gradient(45deg, var(--color-picker-field-alpha-checkerboard-foreground-color) 25%, var(--color-picker-field-alpha-checkerboard-background-color) 25%, var(--color-picker-field-alpha-checkerboard-background-color) 75%, var(--color-picker-field-alpha-checkerboard-foreground-color) 75%);
      background-size: var(--color-picker-field-alpha-checkerboard-tile-size) var(--color-picker-field-alpha-checkerboard-tile-size);
      background-position: 0 0, calc(var(--color-picker-field-alpha-checkerboard-tile-size) / 2) calc(var(--color-picker-field-alpha-checkerboard-tile-size) / 2);
    };
    } [part="select-color-button"] {
      border - radius: calc((0.375em + var(--lumo-border-radius) / 4 - 3px) / 2);
      margin-right: 0.25em;
      background: #fff;
      @apply --color-picker-field-alpha-checkerboard-background-style;
    } [part="select-color-button-icon"] {
      transition: transform .25s cubic-bezier(.12, .32, .54, 2), opacity .4s;
      will-change: transform;
    } [part="popup-content"] {
      width: 400px;
      min-width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      padding: var(--lumo-space-m);
    } [part="footer"] {
      margin - top: calc(2 * var(--lumo-space-m));
    } [part="submit"] {
      margin - left: calc(var(--lumo-space-m) / 2);
    } [part="cancel"] {
      margin - right: calc(var(--lumo-space-m) / 2);
    } :host([theme~="no-input"]) {
      width: var(--lumo-text-field-size);
    } :host([theme~="no-input"]) [part="switch-format-button"] {
      display: none;
    }
    </style>
  </template>
</dom-module>
`;

document.head.appendChild($_documentContainer.content);
