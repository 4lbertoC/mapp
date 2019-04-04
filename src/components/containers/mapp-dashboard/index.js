import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

export default class MappDashboard extends PolymerElement {
  static get properties() {
    
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-dashboard', MappDashboard);
