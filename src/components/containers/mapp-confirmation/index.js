
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
            fullName: 'Damir Cohadarevic',
            role: 'Mentor'
          };
        }
      },
      mentee: {
        type: Object,
        value() {
          return {
            fullName: 'Alberto Congiu',
            role: 'Mentee'
          };
        }
      },
      timeSlot: {
        type: String,
        value: 'Wed 10 Apr, 10-11'
      },
      skill: {
        type: String,
        value: 'Bots'
      }
    };
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-confirmation', MappConfirmation);
