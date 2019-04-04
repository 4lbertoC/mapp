'use strict';

/* Import WebpackApp */

import '@polymer/polymer/lib/elements/dom-if';
import './components/containers/sk-app';
import './components/containers/mapp-dashboard';
import './components/containers/mapp-login';

import {Router} from '@vaadin/router';

const outlet = document.getElementById('mapp-container');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'mapp-login'},
  {path: '/dashboard',  component: 'mapp-dashboard'},
]);
