import {html, PolymerElement} from '@polymer/polymer';
import '@vaadin/vaadin-demo-helpers/vaadin-demo-ready-event-emitter';

class ColorPickerFieldBasicDemos extends window.DemoReadyEventEmitter(ColorPickerFieldDemo(PolymerElement)) {
  static get is() {
    return 'color-picker-field-basic-demos';
  }

  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }

      .warning {
        background: #ffc13f;
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
      }

      .warning a {
        color: #fff2d6;
      }

      .warning a:hover {
        color: #fff;
      }
    </style>

    <h3>Color Picker Field</h3>
    <p>Click the arrows to switch between <b>hex</b>, <b>rgb</b> and <b>hsl</b>. Click the color to use a color picker
      inside a popup.</p>
    <vaadin-demo-snippet id="color-picker-field-basic-color-picker" when-defined="color-picker-field">
        <color-picker-field style="width:400px"></color-picker-field>
        <color-picker-field show-change-format-button></color-picker-field>
        <color-picker-field value="#00b4f0" disabled></color-picker-field>
        <color-picker-field value="#00b4f0" readonly></color-picker-field>
    </vaadin-demo-snippet>

    <h3>Palettes</h3>
    <p>Use the <code>palettes</code> property to set an array of palettes to be shown, whereas each
      palette is an array of colors specified as a valid css-color.</p>
    <p>
      <b>Note:</b> the array has to be in a valid JSON Format, so you have to invert the quotes
      (use single quotes outside, and double quotes inside):
    </p>
    <p>
      <code>
        '[
        [
        "hsl(0,100%,50%)",
        "hsl(60,100%,50%)",
        "hsl(120,100%,50%)",
        "hsl(180,100%,50%)",
        "hsl(240,100%,50%)",
        "hsl(300,100%,50%)"
        ],
        [
        "hsla(0,100%,50%,0.5)",
        "hsla(60,100%,50%,0.5)",
        "hsla(120,100%,50%,0.5)",
        "hsla(180,100%,50%,0.5)",
        "hsla(240,100%,50%,0.5)",
        "hsla(300,100%,50%,0.5)"
        ]
        ]'
      </code>
    </p>
    <vaadin-demo-snippet id="color-picker-field-palettes" when-defined="color-picker-field">
        <color-picker-field value="#00b4f0" palettes='[
        ["hsl(0,100%,50%)","hsl(60,100%,50%)","hsl(120,100%,50%)","hsl(180,100%,50%)","hsl(240,100%,50%)","hsl(300,100%,50%)"],
        ["hsla(0,100%,50%,0.5)","hsla(60,100%,50%,0.5)","hsla(120,100%,50%,0.5)","hsla(180,100%,50%,0.5)","hsla(240,100%,50%,0.5)","hsla(300,100%,50%,0.5)"]
        ]'></color-picker-field>
    </vaadin-demo-snippet>

    <h3>History</h3>
    <p>You can enable the history of picked colors by setting <code>enable-history</code>. The property
      <code>max-history</code>
      will specify the maximum count of items to be visible in the history.</p>
    <p class="warning">
      <b>Note:</b> If the history is enabled it is not possible to use palettes as they are internally used for the
      history.
    </p>
    <vaadin-demo-snippet id="color-picker-field-history" when-defined="color-picker-field">
        <color-picker-field value="#00b4f0" enable-history max-history="10"></color-picker-field>
    </vaadin-demo-snippet>
  `;
  }
}

customElements.define(ColorPickerFieldBasicDemos.is, ColorPickerFieldBasicDemos);
