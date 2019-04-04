
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

// import css from './style.pcss';
// import template from './template.html';
// import '../../dumbs/sk-button';

export default class MappSchedule extends PolymerElement {
  static get properties() {
    
  }

  static get template() {
    return html([`<style></style> schedule`]);
  }
}

window.customElements.define('mapp-schedule', MappSchedule);
