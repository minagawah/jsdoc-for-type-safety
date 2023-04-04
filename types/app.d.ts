export type ShopConfig = import("./shop").ShopConfig;
/** @typedef {import("./shop").ShopConfig} ShopConfig */
/**
 * For `App` class.
 * @class
 */
export function App(): void;
export class App {
    /**
     * An internal hash remembering registered shops.
     * `Object.<string, Shop>` means that you have
     * `string` for key, and stores `Shop` object.
     * @type {Object.<string, Shop>}
     */
    _lookup: {
        [x: string]: Shop;
    };
    /**
     * An array of registered shops.
     * @type {Shop[]}
     */
    shops: Shop[];
    /**
     * Adding a new shop.
     * @method App#addShop
     * @param {ShopConfig} params
     */
    addShop(params?: ShopConfig): void;
    /**
     * Finding a specific shop by `key`.
     * @method App#getShop
     * @params {string} key
     * @returns {Shop | undefined}
     */
    getShop(key: any): Shop | undefined;
}
import { Shop } from './shop';
