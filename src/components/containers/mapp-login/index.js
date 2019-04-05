import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappLogin extends PolymerElement {
  static get properties() {
    return {
      username: {
        type: String
      },
    };
  }

  handleClick() {
    sessionStorage.setItem('username', this.get('username'));
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-login', MappLogin);
