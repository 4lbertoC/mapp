
/* Import WebpackApp */
import '@polymer/iron-icons';

import '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-bind';
import '@polymer/polymer/lib/elements/dom-module';
import '@granite-elements/granite-bootstrap/granite-bootstrap';
import './components/user-icon';
import './components/containers/mapp-dashboard';
import './components/containers/mapp-login';

import {Router} from '@vaadin/router';

const outlet = document.getElementById('mapp-container');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'mapp-login'},
  {path: '/dashboard',  component: 'mapp-dashboard'},
]);
