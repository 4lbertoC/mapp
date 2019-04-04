import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import css from './style.pcss';
import template from './template.html';

export class UserIcon extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String
      },
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();
  }
}

window.customElements.define('user-icon', UserIcon);
