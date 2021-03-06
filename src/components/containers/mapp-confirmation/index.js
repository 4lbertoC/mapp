
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappConfirmation extends PolymerElement {
  static get properties() {
    return {
      mentor: {
        type: Object,
        value() {
          return {
            firstName: 'Eduard',
            lastName: 'Schaeli',
            role: 'Mentor'
          };
        }
      },
      mentee: {
        type: Object,
        value() {
          return {
            firstName: 'Alberto',
            lastName: 'Congiu',
            role: 'Mentee'
          };
        }
      },
      timeSlot: {
        type: String,
        value: 'April 11th 2019, 7:00, 1h'
      },
      skill: {
        type: String,
        value: 'cooking'
      }
    };
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-confirmation', MappConfirmation);
