import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import css from './style.pcss';
import template from './template.html';


export default class UserIcon extends PolymerElement {
  getUserName() {
    return sessionStorage.getItem('username') !== 'undefined' ? sessionStorage.getItem('username') : 'User';
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  constructor() {
    super();
  }
}

window.customElements.define('user-icon', UserIcon);
