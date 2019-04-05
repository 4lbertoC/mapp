import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import * as moment from 'moment'
import css from './style.pcss';
import boostrapOverrides from '../../styles/bootstrap-overrides.pcss';
import template from './template.html';

export default class MappMentorEvent extends PolymerElement {


  static get properties() {
    return {
      startDateTime: {
        type: String
      },
      fullName: {
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
    this.set('nameInitials', this.get('fullName')
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
    const toTime = moment(this.get('startDateTime')).add(1, 'hour').format('H:mm');

    return `${fromTime} - ${toTime}`;
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-mentor-event', MappMentorEvent);
