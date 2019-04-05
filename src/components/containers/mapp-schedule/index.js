import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappSchedule extends PolymerElement {

  connectedCallback() {
    super.connectedCallback();
    fetch('https://mapp.hackathon2019.dev.tda.link/v1/members').then(response => {
      return response.json();
    })
      .then((myJson) => {
        for (const mentor of myJson) {
          mentor.actions = [{
            name: 'Schedule',
            href: '/mentor-profile/' + mentor.id
          }];
        }
        this.set('mentors', myJson);
      });
  }

  static get properties() {
    return {
      mentors: {
        value() {
          return [
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
