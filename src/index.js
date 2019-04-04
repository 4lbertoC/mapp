/* Import WebpackApp */
import '@polymer/iron-icons';

import '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-bind';
import '@polymer/polymer/lib/elements/dom-module';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@granite-elements/granite-bootstrap/granite-bootstrap';
import './components/user-icon';
import './components/containers/mapp-dashboard';
import './components/containers/mapp-login';
import './components/containers/mapp-schedule';
import './components/containers/mapp-mentor-profile';
import './components/mapp-mentor-card';
import './components/mapp-mentor-event';

import {Router} from '@vaadin/router';

const outlet = document.getElementById('mapp-container');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'mapp-login'},
  {path: '/dashboard',  component: 'mapp-dashboard'},
  {path: '/schedule-new-session',  component: 'mapp-schedule'},
  {path: '/mentor-profile',  component: 'mapp-mentor-profile'},
]);
