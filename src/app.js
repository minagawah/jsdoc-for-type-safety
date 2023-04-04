import { Shop } from './shop';

/** @typedef {import("./shop").ShopConfig} ShopConfig */

/**
 * For `App` class.
 * @class
 */
function App() {
  /**
   * An internal hash remembering registered shops.
   * `Object.<string, Shop>` means that you have
   * `string` for key, and stores `Shop` object.
   * @type {Object.<string, Shop>}
   */
  this._lookup = {};

  /**
   * An array of registered shops.
   * @type {Shop[]}
   */
  this.shops = [];
}

/**
 * Adding a new shop.
 * @method App#addShop
 * @param {ShopConfig} params
 */
App.prototype.addShop = function (params = {}) {
  const shop = new Shop(params);
  this.shops.push(shop);
  this._lookup[params.key] = shop;
};

/**
 * Finding a specific shop by `key`.
 * @method App#getShop
 * @params {string} key
 * @returns {Shop | undefined}
 */
App.prototype.getShop = function (key) {
  return this._lookup[key];
};

export { App };
