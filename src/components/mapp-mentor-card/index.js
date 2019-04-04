
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappMentorCard extends PolymerElement {

  static get properties() {
    return {
      fullName: {
        type: String
      },
      nameInitials: {
        type: String
      },
      skills: {
        type: Array,
        value() {
          return [
            { name: 'Java' },
            { name: 'Python' },
          ];
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

window.customElements.define('mapp-mentor-card', MappMentorCard);
