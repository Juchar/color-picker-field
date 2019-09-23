import '../../../vaadin-material-styles/color.js';
import '../../../vaadin-material-styles/shadow.js';
import '../../../vaadin-material-styles/typography.js';
import '../../../vaadin-text-field/theme/material/vaadin-text-field.js';
import '../../../vaadin-icons/vaadin-icons.js';
import '../../../vaadin-button/theme/material/vaadin-button.js';
import '../../../vaadin-context-menu/theme/material/vaadin-context-menu.js';
import '../../../color-picker/theme/material/color-picker.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`
<dom-module id="material-color-picker-field" theme-for="color-picker-field">
  <template>
    <style>
      :host {
        --color-picker-field-alpha-checkerboard-foreground-color: var(--material-disabled-color);
        --color-picker-field-alpha-checkerboard-background-color: var(--material-background-color);
        --color-picker-field-alpha-checkerboard-tile-size: 16px;
        --color-picker-field-alpha-checkerboard-background-style: {
          background-image:
            linear-gradient(45deg, var(--color-picker-field-alpha-checkerboard-foreground-color) 25%, transparent 25%, transparent 75%, var(--color-picker-field-alpha-checkerboard-foreground-color) 75%),
            linear-gradient(45deg, var(--color-picker-field-alpha-checkerboard-foreground-color) 25%, var(--color-picker-field-alpha-checkerboard-background-color) 25%, var(--color-picker-field-alpha-checkerboard-background-color) 75%, var(--color-picker-field-alpha-checkerboard-foreground-color) 75%);
          background-size: var(--color-picker-field-alpha-checkerboard-tile-size) var(--color-picker-field-alpha-checkerboard-tile-size);
          background-position: 0 0, calc(var(--color-picker-field-alpha-checkerboard-tile-size) / 2) calc(var(--color-picker-field-alpha-checkerboard-tile-size) / 2);
        };
      }

      [part="select-color-button"] {
        border-radius: 2px;
        padding: 0;
        margin-right: 0.25em;
        background: #fff;
        @apply --color-picker-field-alpha-checkerboard-background-style;
      }

      [part="select-color-button-icon"] {
        transition: transform .1s, opacity .2s;
        will-change: transform;
      }

      [part="popup-content"] {
        width: 350px;
        padding: 16px;
      }

      [part="footer"] {
        margin-top: 32px;
      }

      [part="submit"] {
        margin-left: 8px;
      }

      [part="cancel"] {
        margin-right: 8px;
      }

      :host([theme~="no-input"]) {
        width: 24px;
      }

      :host([theme~="no-input"]) [part="switch-format-button"] {
        display: none;
      }
    </style>
  </template>
</dom-module>

<dom-module id="material-color-picker-field-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style>
      :host([theme~="color-picker-field-overlay"]) [part="overlay"] {
        overflow: hidden;
      }

      :host([theme~="color-picker-field-overlay"]) [part="content"] {
        padding: 0;
      }
    </style>
  </template>
</dom-module>
`;

document.head.appendChild($_documentContainer.content);
