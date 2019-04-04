
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappMentorProfile extends PolymerElement {
  static get properties() {
    return {
      fullName: {
        type: String,
        value() {
          return 'Damir Cohadarevic';
        }
      },
      skills: {
        type: Array,
        value() {
          return [
            { name: 'Bots' },
            { name: 'Tables' }
          ]
        }
      },
      timeSlots: {
        type: Array,
        value() {
          return [
            'Mon 8 Apr, 10-11',
            'Wed 10 Apr, 10-11',
            'Mon 15 Apr, 10-11',
            'Wed 17 Apr, 10-11',
          ]
        }
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.set('nameInitials', this.get('fullName')
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join(''));
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-mentor-profile', MappMentorProfile);
