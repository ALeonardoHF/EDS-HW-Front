"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(AdminPanel)/machine/page",{

/***/ "(app-pages-browser)/./store/actions/machineActions.js":
/*!*****************************************!*\
  !*** ./store/actions/machineActions.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMachineAction: function() { return /* binding */ createMachineAction; },\n/* harmony export */   deleteMachineByidAction: function() { return /* binding */ deleteMachineByidAction; },\n/* harmony export */   getAllMachineListAction: function() { return /* binding */ getAllMachineListAction; },\n/* harmony export */   getMachineListAction: function() { return /* binding */ getMachineListAction; },\n/* harmony export */   setCurrentMachineAction: function() { return /* binding */ setCurrentMachineAction; },\n/* harmony export */   updateMachineByIdAction: function() { return /* binding */ updateMachineByIdAction; },\n/* harmony export */   updateMachineImageAction: function() { return /* binding */ updateMachineImageAction; },\n/* harmony export */   updateMachineTagImageAction: function() { return /* binding */ updateMachineTagImageAction; }\n/* harmony export */ });\n/* harmony import */ var _Api_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Api/machine */ \"(app-pages-browser)/./api/machine.js\");\n/* harmony import */ var _slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/machineSlice */ \"(app-pages-browser)/./store/slices/machineSlice.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _components_shared_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/shared/Toast */ \"(app-pages-browser)/./components/shared/Toast/index.jsx\");\n\n\n\n\nconst setCurrentMachineAction = function() {\n    let id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\";\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachine)());\n        try {\n            if (id) {\n                const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getMachineById)(id);\n                dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineSuccess)(response));\n            } else {\n                dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineSuccess)({}));\n            }\n        } catch (error) {\n            console.log(\"Error: \", error);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n};\nconst getMachineListAction = ()=>{\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineList)());\n        try {\n            //page < 0 ? 1 : page, search, role, limit\n            const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getMachineListApi)();\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListSuccess)(response));\n        } catch (error) {\n            console.log(\"Error: \", error);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n};\nconst getAllMachineListAction = ()=>{\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineList)());\n        try {\n            //page < 0 ? 1 : page, search, role, limit\n            const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getAllMachineListApi)();\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListSuccess)(response));\n        } catch (error) {\n            console.log(\"Error: \", error);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n};\nconst deleteMachineByidAction = (id)=>{\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineList)());\n        try {\n            await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.deleteMachine)(id);\n            const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getMachineListApi)();\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListSuccess)(response));\n        } catch (error) {\n            console.log(\"Error: \", error);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n};\nconst updateMachineByIdAction = (data)=>{\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachine)());\n        try {\n            const id = \"\".concat(data === null || data === void 0 ? void 0 : data._id);\n            await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.updateMachineByAdminApi)(data);\n            const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getMachineById)(id);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineSuccess)(response));\n        } catch (error) {\n            console.log(\"Error: \", error);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n};\nfunction updateMachineImageAction(id, file) {\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachine)());\n        try {\n            if (id) {\n                await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.updateMachineImageApi)(id, file);\n                const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getMachineById)(id);\n                dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineSuccess)(response));\n            }\n        } catch (error) {\n            console.log(error);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n}\nfunction updateMachineTagImageAction(id, file) {\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachine)());\n        try {\n            if (id) {\n                await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.updateMachineTagImageApi)(id, file);\n                const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getMachineById)(id);\n                dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineSuccess)(response));\n            }\n        } catch (error) {\n            console.log(error);\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setCurrentMachineError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n}\nconst createMachineAction = (data)=>{\n    return async (dispatch)=>{\n        dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineList)());\n        try {\n            await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.createMachineApi)(data);\n            const response = await (0,_Api_machine__WEBPACK_IMPORTED_MODULE_0__.getMachineListApi)();\n            console.log(\"response :>> \", response);\n            if (response.status) dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListError)({\n                error: \"Error: \".concat(response.msg, \" \")\n            }));\n            else dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListSuccess)(response));\n        } catch (error) {\n            dispatch((0,_slices_machineSlice__WEBPACK_IMPORTED_MODULE_1__.setMachineListError)({\n                error: \"Error: \".concat(error, \" \")\n            }));\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL2FjdGlvbnMvbWFjaGluZUFjdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzhJO0FBQ21JO0FBQzFPO0FBQzZCO0FBRTVELE1BQU1zQiwwQkFBMEI7UUFBQ0Msc0VBQUc7SUFDeEMsT0FBTyxPQUFNQztRQUNSQSxTQUFTZix1RUFBaUJBO1FBQzFCLElBQUk7WUFDRCxJQUFHYyxJQUFJO2dCQUNILE1BQU1FLFdBQVcsTUFBTXhCLDREQUFjQSxDQUFDc0I7Z0JBQ3RDQyxTQUFTYiw4RUFBd0JBLENBQUNjO1lBQ3RDLE9BQU87Z0JBQ0hELFNBQVNiLDhFQUF3QkEsQ0FBQyxDQUFDO1lBQ3ZDO1FBQ0gsRUFBRSxPQUFPZSxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRjtZQUN2QkYsU0FBU2QsNEVBQXNCQSxDQUFDO2dCQUFDZ0IsT0FBTyxVQUFnQixPQUFOQSxPQUFNO1lBQUU7UUFDOUQ7SUFDTDtBQUNILEVBQUM7QUFFSyxNQUFNRyx1QkFBdUI7SUFDaEMsT0FBTyxPQUFNTDtRQUNSQSxTQUFTVCxvRUFBY0E7UUFDdkIsSUFBSTtZQUNELDBDQUEwQztZQUN6QyxNQUFNVSxXQUFXLE1BQU16QiwrREFBaUJBO1lBQ3hDd0IsU0FBU1AsMkVBQXFCQSxDQUFDUTtRQUNuQyxFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDLFdBQVdGO1lBQ3ZCRixTQUFTUix5RUFBbUJBLENBQUM7Z0JBQUNVLE9BQU8sVUFBZ0IsT0FBTkEsT0FBTTtZQUFFO1FBQzNEO0lBQ0w7QUFDSCxFQUFDO0FBRU0sTUFBTUksMEJBQTBCO0lBQ3BDLE9BQU8sT0FBTU47UUFDUkEsU0FBU1Qsb0VBQWNBO1FBQ3ZCLElBQUk7WUFDRCwwQ0FBMEM7WUFDekMsTUFBTVUsV0FBVyxNQUFNckIsa0VBQW9CQTtZQUMzQ29CLFNBQVNQLDJFQUFxQkEsQ0FBQ1E7UUFDbkMsRUFBRSxPQUFPQyxPQUFPO1lBQ1pD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X05fRS8uL3N0b3JlL2FjdGlvbnMvbWFjaGluZUFjdGlvbnMuanM/NTAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNYWNoaW5lTGlzdEFwaSwgZ2V0TWFjaGluZUJ5SWQsIGRlbGV0ZU1hY2hpbmUsIFxyXG4gICAgICAgIHVwZGF0ZU1hY2hpbmVCeUFkbWluQXBpLCBnZXRBbGxNYWNoaW5lTGlzdEFwaSwgdXBkYXRlTWFjaGluZUltYWdlQXBpLCB1cGRhdGVNYWNoaW5lVGFnSW1hZ2VBcGksIGNyZWF0ZU1hY2hpbmVBcGkgfSBmcm9tIFwiQEFwaS9tYWNoaW5lXCJcclxuaW1wb3J0IHsgc2V0VXNlckF1dGhEYXRhLHNldEN1cnJlbnRNYWNoaW5lLHNldEN1cnJlbnRNYWNoaW5lRXJyb3Isc2V0Q3VycmVudE1hY2hpbmVTdWNjZXNzLHNldE1hY2hpbmVBdHRhY2htZW50cyxzZXRNYWNoaW5lQXR0YWNobWVudHNFcnJvcixzZXRNYWNoaW5lQXR0YWNobWVudHNTdWNjZXNzLHNldE1hY2hpbmVMaXN0LHNldE1hY2hpbmVMaXN0RXJyb3Isc2V0TWFjaGluZUxpc3RTdWNjZXNzLCBzZXRNYWNoaW5lRGF0YSB9IGZyb20gJy4uL3NsaWNlcy9tYWNoaW5lU2xpY2UnXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IFRvYXN0U3VjY2VzcywgVG9hc3RFcnJvciB9IGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZC9Ub2FzdCc7XHJcblxyXG4gZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRNYWNoaW5lQWN0aW9uID0gKGlkPScnKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmUoKSk7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE1hY2hpbmVCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRNYWNoaW5lU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmVTdWNjZXNzKHt9KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKVxyXG4gICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmVFcnJvcih7ZXJyb3I6IGBFcnJvcjogJHtlcnJvcn0gYH0pKVxyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiB9XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWFjaGluZUxpc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICAgZGlzcGF0Y2goc2V0TWFjaGluZUxpc3QoKSk7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vcGFnZSA8IDAgPyAxIDogcGFnZSwgc2VhcmNoLCByb2xlLCBsaW1pdFxyXG4gICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRNYWNoaW5lTGlzdEFwaSgpO1xyXG4gICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFjaGluZUxpc3RTdWNjZXNzKHJlc3BvbnNlKSlcclxuICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcilcclxuICAgICAgICAgICAgIGRpc3BhdGNoKHNldE1hY2hpbmVMaXN0RXJyb3Ioe2Vycm9yOiBgRXJyb3I6ICR7ZXJyb3J9IGB9KSlcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gfVxyXG5cclxuIGV4cG9ydCBjb25zdCBnZXRBbGxNYWNoaW5lTGlzdEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhc3luYyhkaXNwYXRjaCkgPT4ge1xyXG4gICAgICAgICBkaXNwYXRjaChzZXRNYWNoaW5lTGlzdCgpKTtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9wYWdlIDwgMCA/IDEgOiBwYWdlLCBzZWFyY2gsIHJvbGUsIGxpbWl0XHJcbiAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEFsbE1hY2hpbmVMaXN0QXBpKCk7XHJcbiAgICAgICAgICAgICBkaXNwYXRjaChzZXRNYWNoaW5lTGlzdFN1Y2Nlc3MocmVzcG9uc2UpKVxyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKVxyXG4gICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFjaGluZUxpc3RFcnJvcih7ZXJyb3I6IGBFcnJvcjogJHtlcnJvcn0gYH0pKVxyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gZXhwb3J0IGNvbnN0IGRlbGV0ZU1hY2hpbmVCeWlkQWN0aW9uID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZXRNYWNoaW5lTGlzdCgpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBkZWxldGVNYWNoaW5lKGlkKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRNYWNoaW5lTGlzdEFwaSgpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRNYWNoaW5lTGlzdFN1Y2Nlc3MocmVzcG9uc2UpKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcilcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TWFjaGluZUxpc3RFcnJvcih7ZXJyb3I6IGBFcnJvcjogJHtlcnJvcn0gYH0pKVxyXG4gICAgICAgIH1cclxuICAgfVxyXG4gfVxyXG5cclxuIGV4cG9ydCBjb25zdCB1cGRhdGVNYWNoaW5lQnlJZEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50TWFjaGluZSgpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGAke2RhdGE/Ll9pZH1gO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgdXBkYXRlTWFjaGluZUJ5QWRtaW5BcGkoZGF0YSk7XHJcbiAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TWFjaGluZUJ5SWQoaWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmVTdWNjZXNzKHJlc3BvbnNlKSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRNYWNoaW5lRXJyb3Ioe2Vycm9yOiBgRXJyb3I6ICR7ZXJyb3J9IGB9KSlcclxuICAgICAgICB9XHJcbiAgIH1cclxuIH1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gdXBkYXRlTWFjaGluZUltYWdlQWN0aW9uKGlkLCBmaWxlKSB7XHJcbiAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50TWFjaGluZSgpKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlTWFjaGluZUltYWdlQXBpKGlkLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TWFjaGluZUJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmVTdWNjZXNzKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmVFcnJvcih7ZXJyb3I6IGBFcnJvcjogJHtlcnJvcn0gYH0pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWFjaGluZVRhZ0ltYWdlQWN0aW9uKGlkLCBmaWxlKSB7XHJcbiAgICByZXR1cm4gYXN5bmMoZGlzcGF0Y2gpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50TWFjaGluZSgpKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlTWFjaGluZVRhZ0ltYWdlQXBpKGlkLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TWFjaGluZUJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmVTdWNjZXNzKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudE1hY2hpbmVFcnJvcih7ZXJyb3I6IGBFcnJvcjogJHtlcnJvcn0gYH0pKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hY2hpbmVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIGFzeW5jKGRpc3BhdGNoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TWFjaGluZUxpc3QoKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlTWFjaGluZUFwaShkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRNYWNoaW5lTGlzdEFwaSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgOj4+ICcsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzKWRpc3BhdGNoKHNldE1hY2hpbmVMaXN0RXJyb3Ioe2Vycm9yOiBgRXJyb3I6ICR7cmVzcG9uc2UubXNnfSBgfSkpXHJcbiAgICAgICAgICAgIGVsc2UgZGlzcGF0Y2goc2V0TWFjaGluZUxpc3RTdWNjZXNzKHJlc3BvbnNlKSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRNYWNoaW5lTGlzdEVycm9yKHtlcnJvcjogYEVycm9yOiAke2Vycm9yfSBgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImdldE1hY2hpbmVMaXN0QXBpIiwiZ2V0TWFjaGluZUJ5SWQiLCJkZWxldGVNYWNoaW5lIiwidXBkYXRlTWFjaGluZUJ5QWRtaW5BcGkiLCJnZXRBbGxNYWNoaW5lTGlzdEFwaSIsInVwZGF0ZU1hY2hpbmVJbWFnZUFwaSIsInVwZGF0ZU1hY2hpbmVUYWdJbWFnZUFwaSIsImNyZWF0ZU1hY2hpbmVBcGkiLCJzZXRVc2VyQXV0aERhdGEiLCJzZXRDdXJyZW50TWFjaGluZSIsInNldEN1cnJlbnRNYWNoaW5lRXJyb3IiLCJzZXRDdXJyZW50TWFjaGluZVN1Y2Nlc3MiLCJzZXRNYWNoaW5lQXR0YWNobWVudHMiLCJzZXRNYWNoaW5lQXR0YWNobWVudHNFcnJvciIsInNldE1hY2hpbmVBdHRhY2htZW50c1N1Y2Nlc3MiLCJzZXRNYWNoaW5lTGlzdCIsInNldE1hY2hpbmVMaXN0RXJyb3IiLCJzZXRNYWNoaW5lTGlzdFN1Y2Nlc3MiLCJzZXRNYWNoaW5lRGF0YSIsInRvYXN0IiwiVG9hc3RTdWNjZXNzIiwiVG9hc3RFcnJvciIsInNldEN1cnJlbnRNYWNoaW5lQWN0aW9uIiwiaWQiLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWFjaGluZUxpc3RBY3Rpb24iLCJnZXRBbGxNYWNoaW5lTGlzdEFjdGlvbiIsImRlbGV0ZU1hY2hpbmVCeWlkQWN0aW9uIiwidXBkYXRlTWFjaGluZUJ5SWRBY3Rpb24iLCJkYXRhIiwiX2lkIiwidXBkYXRlTWFjaGluZUltYWdlQWN0aW9uIiwiZmlsZSIsInVwZGF0ZU1hY2hpbmVUYWdJbWFnZUFjdGlvbiIsImNyZWF0ZU1hY2hpbmVBY3Rpb24iLCJzdGF0dXMiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/actions/machineActions.js\n"));

/***/ })

});