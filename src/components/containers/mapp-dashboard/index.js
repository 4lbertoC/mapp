import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

import mockSessions from '../../../mockData/sessions.json';

export default class MappDashboard extends PolymerElement {

  connectedCallback() {
    super.connectedCallback();

    fetch('https://mapp.hackathon2019.dev.tda.link/v1/sessions').then( (response) => {
      return response.json();
    }).then( (sessions) => {
        let mentorSessions = [];

        for (const item of sessions) {
          let session = {};
          session = item.mentor;
          session.skills = [item.skill];
          session.startDateTime = item.timeSlot.date;
          mentorSessions.push(session);
        }

        this.set('mentors', mentorSessions);
      })
      .catch(() => {
        this.set('mentors', mockSessions);
      });
  }

  static get properties() {
    return {
      mentors: {
        type: Array
      }
    };
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-dashboard', MappDashboard);
