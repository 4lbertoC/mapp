import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

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
      });
  }

  static get properties() {
    return {
      mentors: {
        value() {
          return [
            // {firstName: 'Karol', lastName: 'Masiak', skills: [{name: 'Java'}], startDateTime: '2019-01-05T10:00:00',},
            // {
            //   firstName: 'Damir',
            //   lastName: 'Cohadarevic',
            //   skills: [{name: 'Bots'}],
            //   startDateTime: '2019-01-05T13:00:00'
            // },
            // {
            //   firstName: 'Michael',
            //   lastName: 'Ehleben',
            //   skills: [{name: 'Drawing'}],
            //   startDateTime: '2019-01-05T15:00:00'
            // },
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
