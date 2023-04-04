/**
 * Defining constructor parameters for `Shop`.
 * `Object.<string, any>` means that you have
 * `string` for key, and `any` for value.
 * When having a type definition followed by "=",
 * it means the parameter is oprional, like in
 * `@property {string=} name`. Alternatively, you can
 * specify "[]" like `@property {string} [name]`.
 * @typedef {Object.<string, any>} ShopConfig
 * @property {string} key
 * @property {string=} name
 */

/**
 * For `Shop` class.
 * @class
 * @throws {Error}
 * @param {ShopConfig} params
 */
function Shop(params) {
  if (!params) throw new Error('No config');
  if (!params.key) throw new Error('No key');

  const { key, name } = params;

  /**
   * ID for the shop.
   * @type {string}
   */
  this.key = key;

  /**
   * Name of the shop. Becomes optional with "=".
   * @type {string=}
   */
  this.name = name || '';
}

/**
 * Setting `name` for the shop.
 * @method Shop#setName
 * @param {string} name
 */
Shop.prototype.setName = function (name) {
  this.name = name;
};

/**
 * Getting `name` of the shop.
 * @method Shop#getName
 * @returns {string}
 */
Shop.prototype.getName = function () {
  return this.name;
};

export { Shop };
