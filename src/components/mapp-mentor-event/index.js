import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import * as moment from 'moment'
import css from './style.pcss';
import boostrapOverrides from '../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappMentorEvent extends PolymerElement {
  mentoringSessionDurationInHours = 1;

  static get properties() {
    return {
      startDateTime: {
        type: String
      },
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      nameInitials: {
        type: String
      },
      skills: {
        type: Array,
        value() {
          return [
            { name: 'Java' },
          ];
        }
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.set('nameInitials', [ this.get('firstName') || '', this.get('lastName') || '' ].join(' ')
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join(''));
  }

  sessionDate() {
    return moment(this.get('startDateTime')).format('MMMM Do YYYY');
  }

  sessionTime() {
    const fromTime = moment(this.get('startDateTime')).format('H:mm');
    const toTime = moment(this.get('startDateTime')).add(this.mentoringSessionDurationInHours, 'hour').format('H:mm');

    return `${fromTime} - ${toTime}`;
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-mentor-event', MappMentorEvent);
