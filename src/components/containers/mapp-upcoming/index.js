import {PolymerElement, html} from '@polymer/polymer/polymer-element';

// import css from './style.pcss';
// import template from './template.html';
// import '../../dumbs/sk-button';

export default class MappUpcoming extends PolymerElement {
  static get properties() {
    
  }

  static get template() {
    return html([`<style></style> upcoming`]);
  }
}

window.customElements.define('mapp-upcoming', MappUpcoming);
