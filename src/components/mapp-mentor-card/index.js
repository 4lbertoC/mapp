
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import boostrapOverrides from '../../styles/bootstrap-overrides.pcss';
import template from './template.html';

import profilePicturesMock from '../../mockData/profilePictures.json';

export default class MappMentorCard extends PolymerElement {

  static get properties() {
    return {
      id: {
        type: String,
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
        type: Array
      },
      actions: {
        type: Array
      },
      profilePicture: {
        type: String
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.set('nameInitials', [this.get('firstName') || '', this.get('lastName') || ''].join(' ')
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join(''));

    this.set('profilePicture', profilePicturesMock[this.get('id')]);
    this.set('showProfilePicture', !!this.get('profilePicture'));
  }

  static get template() {
    return html([`<style include="granite-bootstrap"></style> <style>${boostrapOverrides}</style> <style>${css}</style> ${template}`]);
  }
}

window.customElements.define('mapp-mentor-card', MappMentorCard);
