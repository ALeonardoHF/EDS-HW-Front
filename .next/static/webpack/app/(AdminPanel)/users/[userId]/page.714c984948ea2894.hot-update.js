"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(AdminPanel)/users/[userId]/page",{

/***/ "(app-pages-browser)/./components/Users/TabSelector.jsx":
/*!******************************************!*\
  !*** ./components/Users/TabSelector.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @userActions */ \"(app-pages-browser)/./store/actions/userActions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TabSelector = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { currentUserTab } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-100 mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>dispatch((0,_userActions__WEBPACK_IMPORTED_MODULE_3__.setCurrentUserTabAction)(\"actions\")),\n                className: currentUserTab == \"actions\" ? \"btn btn-primary btn-active btn-tab-hover text-black\" : \"btn btn-primary rounded-0-right\",\n                children: \"Acciones\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\Proyectos\\\\DigitalSol\\\\Front\\\\AdminWeb-Template\\\\components\\\\Users\\\\TabSelector.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>dispatch((0,_userActions__WEBPACK_IMPORTED_MODULE_3__.setCurrentUserTabAction)(\"files\")),\n                className: currentUserTab == \"files\" ? \"btn btn-primary btn-active btn-tab-hover text-black\" : \"btn btn-primary rounded-0-left\",\n                children: \"Archivos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\Proyectos\\\\DigitalSol\\\\Front\\\\AdminWeb-Template\\\\components\\\\Users\\\\TabSelector.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leona\\\\Documents\\\\Proyectos\\\\DigitalSol\\\\Front\\\\AdminWeb-Template\\\\components\\\\Users\\\\TabSelector.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TabSelector, \"8dDsmje/b/uVjQTzIa/8fKeCWYs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = TabSelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabSelector);\nvar _c;\n$RefreshReg$(_c, \"TabSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVXNlcnMvVGFiU2VsZWN0b3IuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lCO0FBQzhCO0FBQ0E7QUFFdkQsTUFBTUksY0FBYzs7SUFDbEIsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU0sRUFBRUssY0FBYyxFQUFFLEdBQUdKLHdEQUFXQSxDQUFDSyxDQUFBQSxRQUFTQSxNQUFNQyxJQUFJO0lBRTFELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9DLE1BQUs7Z0JBQVNDLFNBQVMsSUFBTVIsU0FBU0YscUVBQXVCQSxDQUFDO2dCQUFhTyxXQUFXSixrQkFBa0IsWUFBWSx3REFBd0Q7MEJBQW1DOzs7Ozs7MEJBRXZOLDhEQUFDSztnQkFBT0MsTUFBSztnQkFBU0MsU0FBUyxJQUFNUixTQUFTRixxRUFBdUJBLENBQUM7Z0JBQVdPLFdBQVdKLGtCQUFrQixVQUFVLHdEQUF3RDswQkFBa0M7Ozs7Ozs7Ozs7OztBQUd4TjtHQVhNRjs7UUFDYUgsb0RBQVdBO1FBQ0RDLG9EQUFXQTs7O0tBRmxDRTtBQWFOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMvVGFiU2VsZWN0b3IuanN4PzU5NzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VXNlclRhYkFjdGlvbiB9IGZyb20gJ0B1c2VyQWN0aW9ucyc7XHJcblxyXG5jb25zdCBUYWJTZWxlY3RvciA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlclRhYiB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBtdC00Jz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldEN1cnJlbnRVc2VyVGFiQWN0aW9uKCdhY3Rpb25zJykpfSBjbGFzc05hbWU9e2N1cnJlbnRVc2VyVGFiID09ICdhY3Rpb25zJyA/ICdidG4gYnRuLXByaW1hcnkgYnRuLWFjdGl2ZSBidG4tdGFiLWhvdmVyIHRleHQtYmxhY2snIDogJ2J0biBidG4tcHJpbWFyeSByb3VuZGVkLTAtcmlnaHQnfT5BY2Npb25lczwvYnV0dG9uPlxyXG4gICAgICB7LyogPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldEN1cnJlbnRVc2VyVGFiQWN0aW9uKCdmaWxlcycpKX0gY2xhc3NOYW1lPXtjdXJyZW50VXNlclRhYiA9PSAnZmlsZXMnID8gJ2J0biBidG4tcHJpbWFyeSBidG4tYWN0aXZlIGJ0bi10YWItaG92ZXIgdGV4dC1ibGFjaycgOiAnYnRuIGJ0bi1wcmltYXJ5IHJvdW5kZWQtMCd9PkFyY2hpdm9zPC9idXR0b24+ICovfVxyXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0Q3VycmVudFVzZXJUYWJBY3Rpb24oJ2ZpbGVzJykpfSBjbGFzc05hbWU9e2N1cnJlbnRVc2VyVGFiID09ICdmaWxlcycgPyAnYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmUgYnRuLXRhYi1ob3ZlciB0ZXh0LWJsYWNrJyA6ICdidG4gYnRuLXByaW1hcnkgcm91bmRlZC0wLWxlZnQnfT5BcmNoaXZvczwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJTZWxlY3RvciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRDdXJyZW50VXNlclRhYkFjdGlvbiIsIlRhYlNlbGVjdG9yIiwiZGlzcGF0Y2giLCJjdXJyZW50VXNlclRhYiIsInN0YXRlIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Users/TabSelector.jsx\n"));

/***/ })

});