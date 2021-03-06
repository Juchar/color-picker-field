import {html, PolymerElement} from '@polymer/polymer';
import '@vaadin/vaadin-demo-helpers/vaadin-demo-ready-event-emitter';

class ColorPickerFieldStylingDemos extends window.DemoReadyEventEmitter(ColorPickerFieldDemo(PolymerElement)) {
  static get is() {
    return 'color-picker-field-styling-demos';
  }

  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>Themes and Hover icon</h3>
    <p>You can display the color picker field without an input by applying the theme <code>no-input</code>. Additionally
      you can change the icon that is shown while hovering the color button.</p>
    <vaadin-demo-snippet id="color-picker-field-styling" when-defined="color-picker-field">
        <color-picker-field value="#00b4f0" theme="no-input" hover-icon="vaadin:fill"></color-picker-field>
    </vaadin-demo-snippet>

    <h3>Pinning</h3>
    <h4>Pinned palettes</h4>
    <p>If you want all the palettes to be visible all the time instead of displaying
      a switch button, use the property <code>pinned-palettes</code>.</p>
    <vaadin-demo-snippet id="color-picker-field-pinned-palettes" when-defined="color-picker">
        <color-picker-field value="#00b4f0" pinned-palettes palettes='[
        ["hsl(0,100%,50%)","hsl(45,100%,50%)","hsl(90,100%,50%)","hsl(135,100%,50%)","hsl(180,100%,50%)","hsl(225,100%,50%)","hsl(270,100%,50%)"],
        ["hsla(0,100%,50%,0.5)","hsla(45,100%,50%,0.5)","hsla(90,100%,50%,0.5)","hsla(135,100%,50%,0.5)","hsla(180,100%,50%,0.5)","hsla(225,100%,50%,0.5)","hsla(270,100%,50%,0.5)"]
        ]'></color-picker-field>
    </vaadin-demo-snippet>

    <h4>Pinned inputs</h4>
    <p>If you want all the input fields to be visible all the time instead of displaying
      a switch button, use the property <code>pinned-inputs</code>.</p>
    <vaadin-demo-snippet id="color-picker-field-pinned-inputs" when-defined="color-picker-field">
        <color-picker-field value="#00b4f0" pinned-inputs></color-picker-field>
    </vaadin-demo-snippet>

    <h3>Inherited <code>&lt;vaadin-text-field&gt;</code> functionality</h3>
    <p>You can use all functionalities that <code>vaadin-text-field</code> provides as the color picker is an extension
      of it.</p>
    <vaadin-demo-snippet id="color-picker-text-field" when-defined="color-picker-field">
        <color-picker-field value="#00b4f0" label="Pick Color" clear-button-visible></color-picker-field>
    </vaadin-demo-snippet>
   `;
  }
}

customElements.define(ColorPickerFieldStylingDemos.is, ColorPickerFieldStylingDemos);

