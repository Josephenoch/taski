"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/secondary/Task.tsx":
/*!***************************************!*\
  !*** ./components/secondary/Task.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib */ \"./components/lib/index.tsx\");\n/* harmony import */ var _context_TasksContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/TasksContext */ \"./context/TasksContext.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Task = (param)=>{\n    let { id, title, content, completed } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { changeState, deleteTask } = (0,_context_TasksContext__WEBPACK_IMPORTED_MODULE_3__.useTasks)();\n    const handleComplete = ()=>{\n        changeState(id, !completed);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        \"data-testid\": \"task\",\n        onClick: ()=>setActive((prevState)=>!prevState),\n        className: \"w-full cursor-pointer min-h-[72px] bg-brand-paleWhite rounded-[20px] flex flex-row p-5 lg:p-10 space-x-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib__WEBPACK_IMPORTED_MODULE_2__.CustomCheckBox, {\n                onClick: handleComplete,\n                selected: completed\n            }, void 0, false, {\n                fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" lg:text-lg font-semibold \".concat(completed ? \"line-through\" : \"\"),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\".concat(active ? \"h-auto opacity-100 mt-4 \" : \"h-0 opacity-0 mt-0\", \" transition-all duration-300 text-sm lg:text-base text-brand-slateBlue \").concat(completed ? \"line-through\" : \"\"),\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            !completed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-testid\": \"uncompleted\",\n                className: \"hidden lg:flex h-[30px] space-x-4 \".concat(active ? \"w-auto opacity-100\" : \"w-0 opacity-0-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/leadingicon.svg\",\n                        width: 30,\n                        height: 30,\n                        alt: \"leading icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/editicon.svg\",\n                        width: 30,\n                        height: 30,\n                        alt: \"edit icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        \"data-testid\": \"delete\",\n                        src: \"/cross.svg\",\n                        width: 30,\n                        height: 30,\n                        alt: \"close icon\",\n                        onClick: ()=>deleteTask(id, _context_TasksContext__WEBPACK_IMPORTED_MODULE_3__.CategoryType.UNCOMPLETED)\n                    }, void 0, false, {\n                        fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 10\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            completed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                \"data-testid\": \"delete\",\n                src: \"/delete.svg\",\n                width: 30,\n                height: 30,\n                alt: \"delete icon\",\n                onClick: ()=>deleteTask(id, _context_TasksContext__WEBPACK_IMPORTED_MODULE_3__.CategoryType.COMPLETED)\n            }, void 0, false, {\n                fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n                lineNumber: 53,\n                columnNumber: 20\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/josephenoch/Documents/Programming/freelance/taski/components/secondary/Task.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"3vR9RvSA06MELMwfmseog5LOcUU=\", false, function() {\n    return [\n        _context_TasksContext__WEBPACK_IMPORTED_MODULE_3__.useTasks\n    ];\n});\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY29uZGFyeS9UYXNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUVKO0FBQ3dCO0FBQ2pDO0FBRzlCLE1BQU1NLE9BQTRCO1FBQUMsRUFDakNDLEVBQUUsRUFDRkMsS0FBSyxFQUNMQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVjs7SUFDQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxFQUFDWSxXQUFXLEVBQUVDLFVBQVUsRUFBQyxHQUFHViwrREFBUUE7SUFDMUMsTUFBTVcsaUJBQWlCO1FBQ3RCRixZQUFZTixJQUFJLENBQUNHO0lBQ2xCO0lBQ0EscUJBQ0UsOERBQUNNO1FBQVFDLGVBQVk7UUFBT0MsU0FBUyxJQUFLTixVQUFVTyxDQUFBQSxZQUFZLENBQUNBO1FBQVlDLFdBQVU7OzBCQUNyRiw4REFBQ2xCLGdEQUFjQTtnQkFBQ2dCLFNBQVNIO2dCQUFnQk0sVUFBVVg7Ozs7OzswQkFDbkQsOERBQUNZO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQUVILFdBQVcsNkJBQTJELE9BQTlCVixZQUFXLGlCQUFnQjtrQ0FBT0Y7Ozs7OztrQ0FDN0UsOERBQUNlO3dCQUFFSCxXQUFXLEdBQXNJVixPQUFuSUMsU0FBUSw2QkFBNkIsc0JBQXFCLDJFQUF1RyxPQUE5QkQsWUFBVyxpQkFBZ0I7a0NBQzVLRDs7Ozs7Ozs7Ozs7O1lBR04sQ0FBQ0MsMkJBQ0EsOERBQUNZO2dCQUFJTCxlQUFZO2dCQUFjRyxXQUFXLHFDQUFxRixPQUFoRFQsU0FBUSx1QkFBc0I7O2tDQUMzRyw4REFBQ04sbURBQUtBO3dCQUNKbUIsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTs7Ozs7O2tDQUVMLDhEQUFDdEIsbURBQUtBO3dCQUNMbUIsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTs7Ozs7O2tDQUVMLDhEQUFDdEIsbURBQUtBO3dCQUNMWSxlQUFZO3dCQUNaTyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKVCxTQUFTLElBQUtKLFdBQVdQLElBQUtKLCtEQUFZQSxDQUFDeUIsV0FBVzs7Ozs7Ozs7Ozs7O1lBSzNEbEIsMkJBQWMsOERBQUNMLG1EQUFLQTtnQkFDZlksZUFBWTtnQkFDWk8sS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSTtnQkFDSlQsU0FBUyxJQUFLSixXQUFXUCxJQUFLSiwrREFBWUEsQ0FBQzBCLFNBQVM7Ozs7Ozs7Ozs7OztBQUk5RDtHQXZETXZCOztRQU84QkYsMkRBQVFBOzs7S0FQdENFO0FBeUROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2Vjb25kYXJ5L1Rhc2sudHN4P2Y5ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBFeHRlbmRlZFRhc2tUeXBlfSBmcm9tIFwiQC90eXBlcy9UYXNrXCJcbmltcG9ydCB7IEN1c3RvbUNoZWNrQm94IH0gZnJvbSBcIi4uL2xpYlwiXG5pbXBvcnQgeyBDYXRlZ29yeVR5cGUsIHVzZVRhc2tzIH0gZnJvbSBcIkAvY29udGV4dC9UYXNrc0NvbnRleHRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuXG5jb25zdCBUYXNrOkZDPEV4dGVuZGVkVGFza1R5cGU+ID0gKHtcbiAgaWQsXG4gIHRpdGxlLFxuICBjb250ZW50LFxuICBjb21wbGV0ZWRcbn0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7Y2hhbmdlU3RhdGUsIGRlbGV0ZVRhc2t9ID0gdXNlVGFza3MoKVxuICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9ICgpID0+IHtcbiAgIGNoYW5nZVN0YXRlKGlkLCAhY29tcGxldGVkKVxuICB9XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gZGF0YS10ZXN0aWQ9XCJ0YXNrXCIgb25DbGljaz17KCk9PiBzZXRBY3RpdmUocHJldlN0YXRlPT4gIXByZXZTdGF0ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBjdXJzb3ItcG9pbnRlciBtaW4taC1bNzJweF0gYmctYnJhbmQtcGFsZVdoaXRlIHJvdW5kZWQtWzIwcHhdIGZsZXggZmxleC1yb3cgcC01IGxnOnAtMTAgc3BhY2UteC02XCI+XG4gICAgICA8Q3VzdG9tQ2hlY2tCb3ggb25DbGljaz17aGFuZGxlQ29tcGxldGV9IHNlbGVjdGVkPXtjb21wbGV0ZWR9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXVwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2AgbGc6dGV4dC1sZyBmb250LXNlbWlib2xkICR7Y29tcGxldGVkID9cImxpbmUtdGhyb3VnaFwiOiBcIlwifWB9Pnt0aXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17YCR7YWN0aXZlPyBcImgtYXV0byBvcGFjaXR5LTEwMCBtdC00IFwiIDogXCJoLTAgb3BhY2l0eS0wIG10LTBcIn0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtc20gbGc6dGV4dC1iYXNlIHRleHQtYnJhbmQtc2xhdGVCbHVlICR7Y29tcGxldGVkID9cImxpbmUtdGhyb3VnaFwiOiBcIlwifWB9PlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICB7IWNvbXBsZXRlZCAmJiAoXG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwidW5jb21wbGV0ZWRcIiBjbGFzc05hbWU9e2BoaWRkZW4gbGc6ZmxleCBoLVszMHB4XSBzcGFjZS14LTQgJHthY3RpdmU/IFwidy1hdXRvIG9wYWNpdHktMTAwXCI6IFwidy0wIG9wYWNpdHktMC0wXCJ9YH0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9sZWFkaW5naWNvbi5zdmdcIlxuICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgIGFsdD1cImxlYWRpbmcgaWNvblwiXG4gICAgICAgIC8+XG4gICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvZWRpdGljb24uc3ZnXCJcbiAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICBhbHQ9XCJlZGl0IGljb25cIlxuICAgICAgICAvPlxuICAgICAgICAgPEltYWdlXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJkZWxldGVcIlxuICAgICAgICAgIHNyYz1cIi9jcm9zcy5zdmdcIlxuICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgIGFsdD1cImNsb3NlIGljb25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpPT4gZGVsZXRlVGFzayhpZCwgIENhdGVnb3J5VHlwZS5VTkNPTVBMRVRFRCl9XG4gICAgICAgIC8+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAge2NvbXBsZXRlZCAmJiAgPEltYWdlXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJkZWxldGVcIlxuICAgICAgICAgIHNyYz1cIi9kZWxldGUuc3ZnXCJcbiAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICBhbHQ9XCJkZWxldGUgaWNvblwiXG4gICAgICAgICAgb25DbGljaz17KCk9PiBkZWxldGVUYXNrKGlkLCAgQ2F0ZWdvcnlUeXBlLkNPTVBMRVRFRCl9XG4gICAgICAgIC8+fVxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDdXN0b21DaGVja0JveCIsIkNhdGVnb3J5VHlwZSIsInVzZVRhc2tzIiwiSW1hZ2UiLCJUYXNrIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb21wbGV0ZWQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjaGFuZ2VTdGF0ZSIsImRlbGV0ZVRhc2siLCJoYW5kbGVDb21wbGV0ZSIsInNlY3Rpb24iLCJkYXRhLXRlc3RpZCIsIm9uQ2xpY2siLCJwcmV2U3RhdGUiLCJjbGFzc05hbWUiLCJzZWxlY3RlZCIsImRpdiIsInAiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIlVOQ09NUExFVEVEIiwiQ09NUExFVEVEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/secondary/Task.tsx\n"));

/***/ })

});