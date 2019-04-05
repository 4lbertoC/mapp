
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappSchedule extends PolymerElement {
  static get properties() {
    return {
      mentors: {
        value() {
          const actions = [{ name: 'Schedule', href: '/mentor-profile' }]
          return [
            { fullName: 'Karol Masiak', skills: [{ name: 'Java' }, { name: 'Semicolons' }, { name: 'Javascript' }], actions },
            { fullName: 'Damir Cohadarevic', skills: [{ name: 'Bots' }, { name: 'Tables' }], actions },
            { fullName: 'Damir Alibegovic', skills: [{ name: 'Easter eggs' }, { name: 'TOML' }], actions },
            { fullName: 'Krzysztof Sakwerda', skills: [{ name: 'Tables' }, { name: 'Big Data' }, { name: 'Semicolons' }], actions },
            { fullName: 'Michael Ehleben', skills: [{ name: 'Drawing' }, { name: 'Java' }], actions },
          ];
        }
      }
    };
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-schedule', MappSchedule);
