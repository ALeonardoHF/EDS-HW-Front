"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwt-decode";
exports.ids = ["vendor-chunks/jwt-decode"];
exports.modules = {

/***/ "(ssr)/./node_modules/jwt-decode/build/jwt-decode.cjs.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.cjs.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("function e(e){this.message=e}e.prototype=new Error,e.prototype.name=\"InvalidCharacterError\";var r=\"undefined\"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,\"\");if(t.length%4==1)throw new e(\"'atob' failed: The string to be decoded is not correctly encoded.\");for(var n,o,a=0,i=0,c=\"\";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\".indexOf(o);return c};function t(e){var t=e.replace(/-/g,\"+\").replace(/_/g,\"/\");switch(t.length%4){case 0:break;case 2:t+=\"==\";break;case 3:t+=\"=\";break;default:throw\"Illegal base64url string!\"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t=\"0\"+t),\"%\"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if(\"string\"!=typeof e)throw new n(\"Invalid token specified\");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(\".\")[o]))}catch(e){throw new n(\"Invalid token specified: \"+e.message)}}n.prototype=new Error,n.prototype.name=\"InvalidTokenError\";const a=o;a.default=o,a.InvalidTokenError=n,module.exports=a;\n//# sourceMappingURL=jwt-decode.cjs.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYSxjQUFjLGVBQWUsK0RBQStELHFGQUFxRixrQ0FBa0Msa0dBQWtHLHlCQUF5QixnQkFBZ0Isc0pBQXNKLFVBQVUsY0FBYyw0Q0FBNEMsbUJBQW1CLGFBQWEsZUFBZSxNQUFNLGNBQWMsTUFBTSx5Q0FBeUMsSUFBSSxtQkFBbUIsNkRBQTZELGlEQUFpRCxtQ0FBbUMsSUFBSSxJQUFJLFNBQVMsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLDZEQUE2RCxtQkFBbUIsYUFBYSxJQUFJLHNDQUFzQyxTQUFTLG9EQUFvRCwyREFBMkQsVUFBVTtBQUNuckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZW5yaXItY29sbGVjdGlibGVzLWFkbWluLXdlYi8uL25vZGVfbW9kdWxlcy9qd3QtZGVjb2RlL2J1aWxkL2p3dC1kZWNvZGUuY2pzLmpzP2U4MmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXt0aGlzLm1lc3NhZ2U9ZX1lLnByb3RvdHlwZT1uZXcgRXJyb3IsZS5wcm90b3R5cGUubmFtZT1cIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiO3ZhciByPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5hdG9iJiZ3aW5kb3cuYXRvYi5iaW5kKHdpbmRvdyl8fGZ1bmN0aW9uKHIpe3ZhciB0PVN0cmluZyhyKS5yZXBsYWNlKC89KyQvLFwiXCIpO2lmKHQubGVuZ3RoJTQ9PTEpdGhyb3cgbmV3IGUoXCInYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKTtmb3IodmFyIG4sbyxhPTAsaT0wLGM9XCJcIjtvPXQuY2hhckF0KGkrKyk7fm8mJihuPWElND82NCpuK286byxhKyslNCk/Yys9U3RyaW5nLmZyb21DaGFyQ29kZSgyNTUmbj4+KC0yKmEmNikpOjApbz1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIuaW5kZXhPZihvKTtyZXR1cm4gY307ZnVuY3Rpb24gdChlKXt2YXIgdD1lLnJlcGxhY2UoLy0vZyxcIitcIikucmVwbGFjZSgvXy9nLFwiL1wiKTtzd2l0Y2godC5sZW5ndGglNCl7Y2FzZSAwOmJyZWFrO2Nhc2UgMjp0Kz1cIj09XCI7YnJlYWs7Y2FzZSAzOnQrPVwiPVwiO2JyZWFrO2RlZmF1bHQ6dGhyb3dcIklsbGVnYWwgYmFzZTY0dXJsIHN0cmluZyFcIn10cnl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocihlKS5yZXBsYWNlKC8oLikvZywoZnVuY3Rpb24oZSxyKXt2YXIgdD1yLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7cmV0dXJuIHQubGVuZ3RoPDImJih0PVwiMFwiK3QpLFwiJVwiK3R9KSkpfSh0KX1jYXRjaChlKXtyZXR1cm4gcih0KX19ZnVuY3Rpb24gbihlKXt0aGlzLm1lc3NhZ2U9ZX1mdW5jdGlvbiBvKGUscil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpdGhyb3cgbmV3IG4oXCJJbnZhbGlkIHRva2VuIHNwZWNpZmllZFwiKTt2YXIgbz0hMD09PShyPXJ8fHt9KS5oZWFkZXI/MDoxO3RyeXtyZXR1cm4gSlNPTi5wYXJzZSh0KGUuc3BsaXQoXCIuXCIpW29dKSl9Y2F0Y2goZSl7dGhyb3cgbmV3IG4oXCJJbnZhbGlkIHRva2VuIHNwZWNpZmllZDogXCIrZS5tZXNzYWdlKX19bi5wcm90b3R5cGU9bmV3IEVycm9yLG4ucHJvdG90eXBlLm5hbWU9XCJJbnZhbGlkVG9rZW5FcnJvclwiO2NvbnN0IGE9bzthLmRlZmF1bHQ9byxhLkludmFsaWRUb2tlbkVycm9yPW4sbW9kdWxlLmV4cG9ydHM9YTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWp3dC1kZWNvZGUuY2pzLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jwt-decode/build/jwt-decode.cjs.js\n");

/***/ })

};
;