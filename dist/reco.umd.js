(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Reco = {}));
})(this, (function (exports) { 'use strict';

  var a = 1;
  var b = function () {
      return Promise.resolve(0);
  };
  var c = Object.assign({}, { d: 1 });

  exports.a = a;
  exports.b = b;
  exports.c = c;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
