
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../../styles/bootstrap-overrides.pcss';
import template from './template.html';

import moment from 'moment';

export default class MappMentorProfile extends PolymerElement {
  static get properties() {
    return {
      firstName: {
        type: String,
        value() {
          return 'Damir';
        }
      },
      lastName: {
        type: String,
        value() {
          return 'Cohadarevic';
        }
      },
      skills: {
        type: Array,
        value() {
          return [
            { name: 'Bots' },
            { name: 'Tables' }
          ]
        }
      },
      timeSlots: {
        type: Array,
        value() {
          return [
            'Mon 8 Apr, 10-11',
            'Wed 10 Apr, 10-11',
            'Mon 15 Apr, 10-11',
            'Wed 17 Apr, 10-11',
          ]
        }
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUser();
  }

  async fetchUser() {
    const { id } = this.location.params;
    const fetchResult = await fetch(`https://mapp.hackathon2019.dev.tda.link/v1/members/${id}`);
    const user = await fetchResult.json();

    this.set('skills', user.skills);
    this.set('firstName', user.firstName);
    this.set('lastName', user.lastName);
    this.set('timeSlots', user.timeSlots.map(timeSlot => ({
      id,
      date: moment(timeSlot.date).format('MMM Do YYYY, HH:mm') + ', 1h'
    })));
    this.set('nameInitials', [ user.firstName || '', user.lastName || '' ].join(' ')
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join(''));
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-mentor-profile', MappMentorProfile);