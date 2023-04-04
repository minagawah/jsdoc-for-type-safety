/**
 * @namespace Area51
 * @property {module:area51} area51
 */

/**
 * @module area51
 */

import { App } from './app';

/**
 * @type {HTMLElement}
 * @listens window#DOMContentLoaded
 */
window.addEventListener('DOMContentLoaded', event => {
  const app = new App();
  app.addShop({ key: 'tacobell' });
});
