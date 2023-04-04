# jsdoc-for-type-safety

## 1. About

Use JSDoc comments, and run a type-check using TypeScript.

- When you have a very old JS project, and you want a type check, but don't want to break your codes, JSDoc type-checking is useful.
- Even for your new project, write in JS instead of TS so that you will not waste your time struggling with TSC won't compile.
- One argument against JSDoc type-checking is that developers may forget to fix JSDoc comments when fixing the actual codes. However, both TS and JSDoc are just prevention measures for _compile-time_ errors. For _runtime_ errors, it always depends on developers to prevent them. Forgetting to add JSDoc comments is a mistake of such kind, and the same applies to TS when talking about runtime errors.
- When you think about it, TS transpiles to JS anyways, and realize that you only wants a type assurance. In a sense, TS is just a tool which assures types. Why not use JSDoc for the same goal which is less harmful and makes codes less lengthy.

### Note

Instead of using `class` syntax, the sample is using `prototype` to define classes.
Simply because there seems to be no examples out there doing so
in terms of using JSDoc for type checking.

## 2. Instructions

### 2-1. NPM Scripts

```shell
# Use TSC to run a type check.
npm run type:check

# Use TSC to generate 'types/*.d.ts` files.
npm run type:generate

# Generte JSDoc under 'jsdoc' directory.
npm run jsdoc
```

You see, I did not prepare `jsdoc` and `types` directories, but the above commands generate these directories.

### 2-2. VSCode Settings

In VSCode, go to _Preferences > Settings_, add the following:

```json
"javascript.implicitProjectConfig.checkJs": true
```

## 3. Notes

### 3-1. JSDoc Pitfalls

When using JSDoc, and you have ES6 modules, there are certain manners you must follow.

#### (a) Comments

Make sure the comments start with `/**` not `/*`.

```js
// BAD
/*
 * @module area51/shop
 */

// GOOD
/**
 * @module area51/shop
 */
```

#### (b) Avoid ES6 Arrow Functions

If you have your classes defined with `prototype` instead of `class` syntax,
make sure not to use ES6 arrow function.
Actually, this has nothing to do with JSDoc.
If you use ES6 arrow function, you won't get `this`.

```js
// BAD
const Shop = () => {};

// GOOD
function Shop() {}
```

#### (c) Do Named Exports

If you use inline `export` on the function, when you run `jsdoc`
to generate documentations, you will notice that your class
is described as `export.Shop` which isn't what you expect.
If we want JSDoc to display our `Shop` class as `Shop`,
then we want to explicitly use named export at the end of the file.

Nothing forbids you from not doing so, and it is technically
possible to use `export` on your function definition...
It is just I prefer not to see JSDoc displays the class as `export.Shop`.

```js
// BAD
export function Shop() {}

// GOOD
function Shop() {}
export { Shop };
```

#### (d) Optional: Explicit Module Namespace

To make it simple, each JS file in this sample is not defined as a module.
Yet, if you decided to give specific names for your files,
this is how you can tell JSDoc for which class belongs to which module,
and its method to which module.

```js
/**
 * @module area51/shop
 */

/**
 * @class
 * @memberof module:area51/shop.Shop
 */
function Shop() {}

/**
 * @method module:area51/shop.Shop#setName
 */
Shop.prototype.setName = function () {};
```

## 4. Installed NPM Packages

### dependencies

- core-js

### devDependencies

- @babel/cli
- @babel/core
- @babel/preset-env
- babel-loader
- webpack
- webpack-cli
- prettier
- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- rimraf
- http-server
- typescript@latest
- jsdoc
- jsdoc-tsimport-plugin

npm uninstall @ckeditor/jsdoc-plugins

```shell
npm install --save core-js

npm install --save-dev \
  @babel/cli @babel/core @babel/preset-env babel-loader \
  webpack webpack-cli prettier \
  eslint eslint-config-prettier eslint-plugin-prettier \
  rimraf http-server typescript@latest
```

## 5. References

Using Typescript without compilation - DEV Community  
https://dev.to/thepassle/using-typescript-without-compilation-3ko4

JSDoc Reference  
https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

JSDoc Cheatsheet and Type Safety Tricks | Joshua's Docs  
https://docs.joshuatz.com/cheatsheets/js/jsdoc/

Javascript jsdoc module exports code example  
https://copyprogramming.com/howto/javascript-jsdoc-module-exports-code-example

How to extend a typedef parameter in JSDOC? · Issue #1199 · jsdoc/jsdoc  
https://github.com/jsdoc/jsdoc/issues/1199

Design Doc: Use JavaScript instead of TypeScript for internal Deno Code  
https://docs.google.com/document/d/1_WvwHl7BXUPmoiSeD8G83JmS8ypsTPqed4Btkqkn_-4/preview?pru=AAABcrrKL5k*nQ4LS569NsRRAce2BVanXw#

Experiment: Remove all internal typescript code, manage bundle manually #4750 - deno  
https://github.com/denoland/deno/pull/4750

Google JavaScript Style Guide  
https://google.github.io/styleguide/jsguide.html

class methods are missing in documentation if class is inside module · Issue #1185 · jsdoc/jsdoc  
https://github.com/jsdoc/jsdoc/issues/1185

## 6. License

Dual-licensed under either of the followings.  
Choose at your option.

- The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE))
- MIT license ([LICENSE.MIT](LICENSE.MIT))
