
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

// import css from './style.pcss';
// import template from './template.html';
// import '../../dumbs/sk-button';

export default class MappLogin extends PolymerElement {
  static get properties() {
    
  }

  static get template() {
    return html([`<style></style> HELLO LOGIN! <a href="/dashboard">Click to login</a>`]);
  }
}

window.customElements.define('mapp-login', MappLogin);
