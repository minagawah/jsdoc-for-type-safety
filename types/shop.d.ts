/**
 * Defining constructor parameters for `Shop`.
 * `Object.<string, any>` means that you have
 * `string` for key, and `any` for value.
 * When having a type definition followed by "=",
 * it means the parameter is oprional, like in
 * `@property {string=} name`. Alternatively, you can
 * specify "[]" like `@property {string} [name]`.
 */
export type ShopConfig = {
    [x: string]: any;
};
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
export function Shop(params: ShopConfig): void;
export class Shop {
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
    constructor(params: ShopConfig);
    /**
     * ID for the shop.
     * @type {string}
     */
    key: string;
    /**
     * Name of the shop. Becomes optional with "=".
     * @type {string=}
     */
    name: string | undefined;
    /**
     * Setting `name` for the shop.
     * @method Shop#setName
     * @param {string} name
     */
    setName(name: string): void;
    /**
     * Getting `name` of the shop.
     * @method Shop#getName
     * @returns {string}
     */
    getName(): string;
}
