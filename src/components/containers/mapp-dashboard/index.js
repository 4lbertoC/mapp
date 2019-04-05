import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

export default class MappDashboard extends PolymerElement {
  static get properties() {
    return {
      mentors: {
        value() {
          return [
            { fullName: 'Karol Masiak', skills: [{ name: 'Java' }], startDateTime: '2019-01-05T10:00:00', },
            { fullName: 'Damir Cohadarevic', skills: [{ name: 'Bots' }], startDateTime: '2019-01-05T13:00:00' },
            { fullName: 'Michael Ehleben', skills: [{ name: 'Drawing' }], startDateTime: '2019-01-05T15:00:00' },
          ];
        }
      }
    };
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-dashboard', MappDashboard);
