
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

// import css from './style.pcss';
// import template from './template.html';
// import '../../dumbs/sk-button';

export default class MappCompleted extends PolymerElement {
  static get properties() {
    
  }

  static get template() {
    return html([`<style></style> completed`]);
  }
}

window.customElements.define('mapp-completed', MappCompleted);
