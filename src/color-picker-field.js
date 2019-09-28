import {html, PolymerElement} from '@polymer/polymer';
import '@appreciated/color-picker/color-picker.js';
import ColorPickerUtils from '@appreciated/color-picker/src/utils/color-picker-utils';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout';
import '@vaadin/vaadin-context-menu/src/vaadin-context-menu.js';
import 'tinycolor2';

/**
 * `<color-picker-field>` allows to select a color using sliders, inputs or palettes.
 *
 * ```
 * <color-picker-field></color-picker-field>
 * ```
 * @memberof global
 * @demo demo/index.html
 */

class ColorPickerField extends PolymerElement {
  static get template() {
    return html`
    <style>
      [part="select-color-button"] {
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        flex: none;
        width: 1.5em;
        height: 1.5em;
        line-height: 1;
      }

      [part="select-color-button-color"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      [part="native-input"] {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        opacity: 0;
        display: none;
      }

      [part="native-input"][native-input] {
        display: block;
      }

      :host([disabled]) [part="select-color-button"] {
        opacity: .2;
      }

      :host([readonly]) [part="select-color-button"],
      :host([readonly]) [part="switch-format-button"] {
        pointer-events: none;
      }

      :host([readonly]) [part="switch-format-button"] {
        display: none;
      }

      [part="select-color-button-icon"] {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.3);
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 4px;
        opacity: 0;
      }

      :host(:not([readonly])) [part="select-color-button"]:hover [part="select-color-button-icon"] {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      
      :host([theme~="color-picker-field-overlay"]) [part="overlay"] {
        max-height: unset;
      }

      [part="switch-format-button"] {
        padding: 2px;
        box-sizing: border-box;
      }

      [part="switch-format-button"][disabled] {
        pointer-events: none;
        opacity: 0.4;
      }

      [part="popup-content"] {
        display: flex;
        flex-direction: column;
      }

      [part="footer"] {
        display: flex;
        justify-content: flex-end; 
        width: 100%;
      }
      
    </style>  
    <vaadin-text-field id="text-field">
      <span part="select-color-button" slot="prefix">
        <vaadin-context-menu close-on="_closeColorPickerPopUp" open-on="click" theme="color-picker-field-overlay">
            <template>
              <vaadin-vertical-layout theme="spacing padding" part="popup-content">
                  <color-picker disable-alpha="[[disableAlpha]]" disable-hex="[[disableHex]]"
                                disable-hsl="[[disableHsl]]"
                                disable-rgb="[[disableRgb]]"
                                last-used-format="{{lastUsedFormat}}"
                                palettes="[[palettes]]"
                                pinned-inputs="[[pinnedInputs]]"
                                pinned-palettes="[[pinnedPalettes]]"
                                previous-value="{{_previousColor}}"
                                step-alpha="[[stepAlpha]]"
                                step-hsl="[[stepHsl]]"
                                theme$="[[theme]]"
                                value="{{_popUpColor}}"></color-picker>
                  <vaadin-horizontal-layout theme="spacing" part="footer">
                    <vaadin-button on-click="_cancelPopUp" part="cancel"
                                   theme$="[[theme]]">{{labelCancel}}</vaadin-button>
                    <vaadin-button on-click="_selectPopUpColor" part="submit" theme$="primary [[theme]]">{{labelSelect}}
                    </vaadin-button>
                  </vaadin-horizontal-layout>
                </vaadin-vertical-layout>
            </template>
          <iron-media-query query="[[nativeInputMediaQuery]]" query-matches="{{_nativeInput}}"></iron-media-query>
          <div part="select-color-button-color"></div>
          <iron-icon icon="[[hoverIcon]]" id="select-color-button-icon" part="select-color-button-icon"></iron-icon>
        </vaadin-context-menu>
        <input native-input$="[[_nativeInput]]" part="native-input" type="color" value="{{value::change}}">
      </span>
      <iron-icon slot="suffix" hidden$="[[!_showChangeFormatButton(disableHex,disableRgb,disableHsl)]]"
                 icon="vaadin:sort"
                 on-click="_nextFormat"
                 on-mousedown="_changeFormatButtonMouseDown"
                 on-touchend="_changeFormatButtonTouchend"
                 part="switch-format-button"></iron-icon>
    </vaadin-text-field>
  `;
  }

  static get is() {
    return 'color-picker-field';
  }

  static get version() {
    return '2.0.0-alpha.1';
  }

  static get properties() {
    return {
      /**
       * The label to show on the button to select a color in the color picker popup.
       */
      labelSelect: {
        type: String,
        value: 'Select'
      },
      /**
       * The label to show on the button to cancel/close the color picker popup.
       */
      labelCancel: {
        type: String,
        value: 'Cancel'
      },
      /**
       * The icon that is shown if hovering the color button.
       */
      hoverIcon: {
        type: String,
        value: 'vaadin:paintbrush'
      },
      /**
       * Media query used to enable native input.
       */
      nativeInputMediaQuery: {
        type: String
      },
      /**
       * Set to true to disable **hex** input.
       */
      disableHex: {
        type: Boolean,
        value: false,
        observer: '_updateInputPattern'
      },
      /**
       * Set to true to disable **rgb** input.
       */
      disableRgb: {
        type: Boolean,
        value: false,
        observer: '_updateInputPattern'
      },
      /**
       * Set to true to disable **hsl** input.
       */
      disableHsl: {
        type: Boolean,
        value: false,
        observer: '_updateInputPattern'
      },
      /**
       * Set to true to disable **alpha** input and **alpha** slider.
       */
      disableAlpha: {
        type: Boolean,
        value: false,
        observer: '_updateInputPattern'
      },
      /**
       * Set to true to have all inputs visible all the time instead of having a switch button.
       */
      pinnedInputs: {
        type: Boolean,
        value: false
      },
      /**
       * Set to true to have all palettes visible all the time instead of having a switch button.
       */
      pinnedPalettes: {
        type: Boolean,
        value: false
      },
      /**
       * The format that the user used last as input or by switching inputs. One of \`hex\`,\`rgb\`,\`hsl\`.
       */
      lastUsedFormat: {
        type: String,
        notify: true
      },
      /**
       * The palettes to be shown. Should be an Array of Arrays, whereas the inner Arrays should contain valid
       * CSS color codes or CSS Custom Properties.
       */
      palettes: Array,
      /**
       * The precision step to use for alpha values.
       */
      stepAlpha: {
        type: Number,
        value: 0.01
      },
      /**
       * The precision step to use for hsl values.
       */
      stepHsl: {
        type: Number,
        value: 1
      },
      /**
       * Set to true to enable the history for selected colors. If the history is enabled it is not possible to
       * use palettes as they are internally used for the history.
       */
      enableHistory: {
        type: Boolean,
        value: false
      },
      /**
       * The maximum amount of colors to be stored in the history.
       */
      maxHistory: {
        type: Number,
        value: 10
      },
      /**
       * Set to true to be able to use CSS Custom Properties as input value.
       */
      enableCssCustomProperties: {
        type: Boolean,
        value: false
      },
      /**
       * Set to true to show the button to change color formats.
       */
      showChangeFormatButton: {
        type: Boolean,
        value: false
      },
      _nativeInput: Boolean,
      _popUpColor: String,
      _previousColor: String,
      _selectColorButtonColor: Object,
      _selectColorButtonIcon: Object,
      _changeFormatButton: Object
    };
  }

  constructor() {
    super();
    this._updateInputPattern();
  }

  ready() {
    super.ready();
    this._selectColorButtonIcon = this.shadowRoot.querySelector('[part="select-color-button-icon"]');
    this._selectColorButtonColor = this.shadowRoot.querySelector('[part="select-color-button-color"]');
    this._changeFormatButton = this.shadowRoot.querySelector('[part="switch-format-button"]');
    this._changeFormatButton.addEventListener('click', evt => {
      this._changeFormatButtonTouchend(evt);
    });
    this._textField = this.shadowRoot.querySelector('#text-field');
    this._inputElement = this._textField.shadowRoot.querySelector('[part="value"]');
    this._textField.value = this.getAttribute('value');
    this._transferAttribute('disabled');
    this._transferAttribute('readonly');
    // this._textField._createPropertyObserver('value', this._updateOnValueChange, true);
    this._updateOnValueChange();
  }

  _transferAttribute(attribute) {
    if (this.hasAttribute(attribute)) {
      this._textField.setAttribute(attribute, this.getAttribute(attribute));
    }
  }

  _showChangeFormatButton() {
    return this._getEnabledFormats().length > 1 && this.showChangeFormatButton;
  }

  _changeFormatButtonMouseDown(e) {
    if (this.hasAttribute('focused')) {
      e.preventDefault();
    }
  }

  _changeFormatButtonTouchend(e) {
    e.preventDefault();
    this._nextFormat();
  }

  _nextFormat() {
    this._inputElement.blur();

    const allFormats = this._getEnabledFormats();
    const format = ColorPickerField._getColorFormat(this._textField.value);
    const nextFormat = allFormats[(allFormats.indexOf(format) + 1) % allFormats.length];
    const resolvedColor = this._getResolvedColor();
    const resolution = this['step' + nextFormat.charAt(0).toUpperCase() + nextFormat.slice(1)]
      || 1;

    this._textField.value = ColorPickerUtils.getFormattedColor(resolvedColor, nextFormat, this.stepAlpha, resolution).replace(/,/g, ', ');
    this.dispatchEvent(new CustomEvent('change', {bubbles: true}));

    this._inputElement.focus();
  }

  _selectPopUpColor(e) {
    this._cancelPopUp(e);
    this._textField.value = this._popUpColor.replace(/,/g, ', ');
    this.dispatchEvent(new CustomEvent('change', {bubbles: true}));
  }

  _cancelPopUp(e) {
    e.target.dispatchEvent(new CustomEvent('_closeColorPickerPopUp', {composed: true}));
  }

  _updateOnValueChange(value) {
    this._changeFormatButton.removeAttribute('disabled');
    const validColor = '' !== this._textField.value.trim() && this._textField.checkValidity();
    if (validColor) {
      const color = this._getResolvedColor();
      if (color !== undefined) {
        this._updateSelectedColor(color);
        this._updateHistory(color);
      } else {
        this._changeFormatButton.setAttribute('disabled', 'disabled');
      }
    } else {
      this._changeFormatButton.setAttribute('disabled', 'disabled');
    }
    return value;
  }

  _updateSelectedColor(color) {
    if (this._selectColorButtonColor) {
      this._selectColorButtonColor.style.background = color.toHslString();
    }

    if (this._selectColorButtonIcon) {
      this._selectColorButtonIcon.style.color = ColorPickerUtils.getContrastColor(color);
    }

    this._popUpColor = color.toHslString();
    this._previousColor = color.toHslString();
  }

  _updateHistory(color) {
    if (this.enableHistory) {
      const newColor = color.toHslString();
      this.palettes = [(this.palettes
        ? [newColor, ...this.palettes[0].filter(v => v !== newColor)].slice(0, this.maxHistory)
        : [newColor])];
    }
  }

  _getResolvedColor() {
    return this.enableCssCustomProperties
      ? ColorPickerUtils.getResolvedValue(this, this._textField.value)
      : tinycolor(this._textField.value);
  }

  _getEnabledFormats() {
    const formats = [];
    if (!this.disableHex) {
      formats.push('hex');
    }

    if (!this.disableRgb) {
      formats.push('rgb');
    }

    if (!this.disableHsl) {
      formats.push('hsl');
    }

    return formats;
  }

  static _getColorFormat(color) {
    const trimmedValue = color.trim();
    if (trimmedValue.startsWith('hsl')) {
      return 'hsl';
    } else if (trimmedValue.startsWith('rgb')) {
      return 'rgb';
    } else {
      return 'hex';
    }
  }

  _updateInputPattern() {
    const patterns = [];

    if (!this.disableHex) {
      patterns.push('#([0-9a-fA-F]{2}){2,3}');
      patterns.push('#[0-9a-fA-F]{3}');

      if (!this.disableAlpha) {
        patterns.push('#([0-9a-fA-F]{2}){4}');
      }
    }

    const countDecimalPlaces = number => {
      return number ? String(Math.abs(number)).replace(/^\\d*\\.?(.*)?$/, '$1').length : 0;
    };

    const decimalRegex = decimalPlaces => {
      return decimalPlaces > 0 ? `(\\\\.\\\\d{1,${decimalPlaces}})?` : '';
    };

    const decimalPlacesAlpha = countDecimalPlaces(this.stepAlpha);
    const decimalAlpha = decimalRegex(decimalPlacesAlpha);

    if (!this.disableRgb) {
      patterns.push('rgb\\\\((-?\\\\d+\\\\s*,\\\\s*){2}(-?\\\\d+\\\\s*)\\\\)');
      patterns.push('rgb\\\\((-?\\\\d+%\\\\s*,\\\\s*){2}(-?\\\\d+%\\\\s*)\\\\)');

      if (!this.disableAlpha) {
        patterns.push(`rgba\\\\((-?\\\\d+\\\\s*,\\\\s*){3}(-?\\\\d+${decimalAlpha}\\\\s*)\\\\)`);
        patterns.push(`rgba\\\\((-?\\\\d+%\\\\s*,\\\\s*){3}(-?\\\\d+${decimalAlpha}\\\\s*)\\\\)`);
      }
    }

    if (!this.disableHsl) {
      const decimalPlacesHsl = countDecimalPlaces(this.stepHsl);
      const decimalHsl = decimalRegex(decimalPlacesHsl);

      patterns.push(
        `hsl\\\\((-?\\\\d+${decimalHsl}\\\\s*,\\\\s*)(-?\\\\d+${decimalHsl}%\\\\s*,\\\\s*)(-?\\\\d+${decimalHsl}%\\\\s*)\\\\)`);

      if (!this.disableAlpha) {
        patterns.push(
          `hsla\\\\((-?\\\\d+${decimalHsl}\\\\s*,\\\\s*)(-?\\\\d+${decimalHsl}%\\\\s*,\\\\s*){2}(-?\\\\d+${decimalAlpha}\\\\s*)\\\\)`);
      }
    }

    if (this.enableCssCustomProperties) {
      patterns.push('--[a-zA-Z0-9]+[a-zA-Z0-9-]*');
    }

    this.pattern = '(' + patterns.join('|') + ')';
  }

}

customElements.define(ColorPickerField.is, ColorPickerField);
