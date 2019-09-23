import {html, PolymerElement} from '@polymer/polymer';
import '@vaadin/vaadin-demo-helpers/vaadin-demo-ready-event-emitter';

class ColorPickerFieldAdvancedDemos extends window.DemoReadyEventEmitter(ColorPickerFieldDemo(PolymerElement)) {
  static get is() {
    return 'color-picker-field-advanced-demos';
  }

  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>Disabling Formats</h3>
    <p>To disable formats use and combine the properties <code>disable-hex</code>, <code>disable-rgb</code>
      or <code>disable-hsl</code></p>
    <vaadin-demo-snippet id="color-picker-field-disable-formats" when-defined="color-picker-field">
        <color-picker-field value="#00b4f0" disable-rgb disable-hsl label="Hex only"></color-picker-field>
    </vaadin-demo-snippet>

    <h3>Alpha handling</h3>
    <p>It is possible to disable the selection of an alpha value using the
      <code>disable-alpha</code> property.</p>
    <vaadin-demo-snippet id="color-picker-field-alpha" when-defined="color-picker">
        <color-picker-field value="#00b4f0" disable-alpha></color-picker-field>
    </vaadin-demo-snippet>

    <h3>Resolution</h3>
    <p>It is possible to change the resolution of the alpha and hsl values using the
      <code>step-alpha</code> and <code>step-hsl</code> property. The input of the user will be validated accordingly.
    </p>
    <vaadin-demo-snippet id="color-picker-field-resolution" when-defined="color-picker">
        <color-picker-field value="#00b4f0" step-alpha="0.001" step-hsl="0.01"></color-picker-field>
    </vaadin-demo-snippet>

    <h3>Native Input</h3>
    <p>You can use the <code>native-input-media-query</code> property to specify a <a
      href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp">CSS media query</a> that is evaluated to
      conditionally use the native input instead of the provided pop up.</p>
    <vaadin-demo-snippet id="color-picker-field-native-input" when-defined="color-picker-field">
        <color-picker-field value="#00b4f0"
                            native-input-media-query="(min-width: 0px), (min-height: 0px)"></color-picker-field>
    </vaadin-demo-snippet>

    <h3>CSS Custom Properties</h3>
    <p><b>CSS Custom Properties</b> can be used inside the field if enabled by using
      <code>enable-css-custom-properties</code>
    </p>
    <vaadin-demo-snippet id="color-picker-field-css-custom-properties" when-defined="color-picker-field">
        <color-picker-field value="--lumo-primary-color" enable-css-custom-properties></color-picker-field>
    </vaadin-demo-snippet>
  </template>
 `;
  }
}

customElements.define(ColorPickerFieldAdvancedDemos.is, ColorPickerFieldAdvancedDemos);
