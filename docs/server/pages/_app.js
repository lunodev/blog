/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/StoreProvider.tsx":
/*!*******************************!*\
  !*** ./app/StoreProvider.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/store */ \"./lib/store.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_2__, _lib_store__WEBPACK_IMPORTED_MODULE_3__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_2__, _lib_store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction StoreProvider({ children }) {\n    const storeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    if (!storeRef.current) {\n        // Create the store instance the first time this renders\n        storeRef.current = (0,_lib_store__WEBPACK_IMPORTED_MODULE_3__.makeStore)();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: storeRef.current,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/sjuarez/PROJECTS/CV-SERGIO/blog/app/StoreProvider.tsx\",\n        lineNumber: 16,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvU3RvcmVQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDRDtBQUNZO0FBR2xELFNBQVNHLGNBQWMsRUFBQ0MsUUFBUSxFQUUvQjtJQUNHLE1BQU1DLFdBQVdMLDZDQUFNQTtJQUN2QixJQUFJLENBQUNLLFNBQVNDLE9BQU8sRUFBRTtRQUNuQix3REFBd0Q7UUFDeERELFNBQVNDLE9BQU8sR0FBR0oscURBQVNBO0lBQ2hDO0lBRUEscUJBQU8sOERBQUNELGlEQUFRQTtRQUFDTSxPQUFPRixTQUFTQyxPQUFPO2tCQUFHRjs7Ozs7O0FBQy9DO0FBR0EsaUVBQWVELGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vYXBwL1N0b3JlUHJvdmlkZXIudHN4PzJmNTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQge1JlYWN0Tm9kZSwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBtYWtlU3RvcmUsIEFwcFN0b3JlIH0gZnJvbSAnLi4vbGliL3N0b3JlJ1xuXG5cbmZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIoe2NoaWxkcmVufToge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn0pIHtcbiAgICBjb25zdCBzdG9yZVJlZiA9IHVzZVJlZjxBcHBTdG9yZT4oKTtcbiAgICBpZiAoIXN0b3JlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBpbnN0YW5jZSB0aGUgZmlyc3QgdGltZSB0aGlzIHJlbmRlcnNcbiAgICAgICAgc3RvcmVSZWYuY3VycmVudCA9IG1ha2VTdG9yZSgpO1xuICAgIH1cblxuICAgIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlUmVmLmN1cnJlbnR9PntjaGlsZHJlbn08L1Byb3ZpZGVyPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlUHJvdmlkZXI7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiUHJvdmlkZXIiLCJtYWtlU3RvcmUiLCJTdG9yZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdG9yZVJlZiIsImN1cnJlbnQiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/StoreProvider.tsx\n");

/***/ }),

/***/ "./constants/languages.ts":
/*!********************************!*\
  !*** ./constants/languages.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LANGUAGES: () => (/* binding */ LANGUAGES),\n/* harmony export */   LANG_CODES: () => (/* binding */ LANG_CODES),\n/* harmony export */   LANG_EN: () => (/* binding */ LANG_EN),\n/* harmony export */   LANG_ES: () => (/* binding */ LANG_ES),\n/* harmony export */   LANG_IT: () => (/* binding */ LANG_IT)\n/* harmony export */ });\nconst LANG_EN = \"en\";\nconst LANG_ES = \"es\";\nconst LANG_IT = \"it\";\nconst LANG_CODES = [\n    LANG_EN,\n    LANG_ES,\n    LANG_IT\n];\nconst LANGUAGES = [\n    {\n        code: LANG_EN,\n        name: \"English\"\n    },\n    {\n        code: LANG_ES,\n        name: \"Spanish\"\n    },\n    {\n        code: LANG_IT,\n        name: \"Italian\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvbGFuZ3VhZ2VzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsVUFBcUIsS0FBSztBQUNoQyxNQUFNQyxVQUFxQixLQUFLO0FBQ2hDLE1BQU1DLFVBQXFCLEtBQUs7QUFVaEMsTUFBTUMsYUFBYTtJQUN0Qkg7SUFDQUM7SUFDQUM7Q0FDSCxDQUFDO0FBQ0ssTUFBTUUsWUFBd0I7SUFDakM7UUFBQ0MsTUFBTUw7UUFBU00sTUFBTTtJQUFTO0lBQy9CO1FBQUNELE1BQU1KO1FBQVNLLE1BQU07SUFBUztJQUMvQjtRQUFDRCxNQUFNSDtRQUFTSSxNQUFNO0lBQVM7Q0FDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9jb25zdGFudHMvbGFuZ3VhZ2VzLnRzPzdmNjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExBTkdfRU46IExBTkdfQ09ERSA9ICdlbic7XG5leHBvcnQgY29uc3QgTEFOR19FUzogTEFOR19DT0RFID0gJ2VzJztcbmV4cG9ydCBjb25zdCBMQU5HX0lUOiBMQU5HX0NPREUgPSAnaXQnO1xuXG5cbmV4cG9ydCB0eXBlIExBTkdfQ09ERSA9ICdlbicgfCAnZXMnIHwgJ2l0JztcbmV4cG9ydCB0eXBlIExBTkdVQUdFID0ge1xuICAgIGNvZGU6IExBTkdfQ09ERSxcbiAgICBuYW1lOiBzdHJpbmcsXG59XG5cblxuZXhwb3J0IGNvbnN0IExBTkdfQ09ERVMgPSBbXG4gICAgTEFOR19FTixcbiAgICBMQU5HX0VTLFxuICAgIExBTkdfSVQsXG5dO1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFUzogTEFOR1VBR0VbXSA9IFtcbiAgICB7Y29kZTogTEFOR19FTiwgbmFtZTogXCJFbmdsaXNoXCJ9LFxuICAgIHtjb2RlOiBMQU5HX0VTLCBuYW1lOiBcIlNwYW5pc2hcIn0sXG4gICAge2NvZGU6IExBTkdfSVQsIG5hbWU6IFwiSXRhbGlhblwifSxcbl07XG4iXSwibmFtZXMiOlsiTEFOR19FTiIsIkxBTkdfRVMiLCJMQU5HX0lUIiwiTEFOR19DT0RFUyIsIkxBTkdVQUdFUyIsImNvZGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/languages.ts\n");

/***/ }),

/***/ "./constants/pages.ts":
/*!****************************!*\
  !*** ./constants/pages.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ACTIVE_PAGE: () => (/* binding */ ACTIVE_PAGE),\n/* harmony export */   PAGES: () => (/* binding */ PAGES)\n/* harmony export */ });\nvar ACTIVE_PAGE;\n(function(ACTIVE_PAGE) {\n    ACTIVE_PAGE[\"HOME\"] = \"Home\";\n    ACTIVE_PAGE[\"ABOUT\"] = \"About\";\n    ACTIVE_PAGE[\"CONTACT\"] = \"Contact\";\n    ACTIVE_PAGE[\"BLOG\"] = \"Blog\";\n})(ACTIVE_PAGE || (ACTIVE_PAGE = {}));\nconst PAGES = [\n    \"Home\",\n    \"About\",\n    \"Contact\",\n    \"Blog\"\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvcGFnZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O1VBQWtCQTs7Ozs7R0FBQUEsZ0JBQUFBO0FBT1gsTUFBTUMsUUFBdUI7Ozs7O0NBTW5DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vY29uc3RhbnRzL3BhZ2VzLnRzPzkyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVudW0gQUNUSVZFX1BBR0Uge1xuICAgIEhPTUU9J0hvbWUnLFxuICAgIEFCT1VUPSdBYm91dCcsXG4gICAgQ09OVEFDVD0nQ29udGFjdCcsXG4gICAgQkxPRz0nQmxvZycsXG4gICAgLy8gTE9HSU49J0xvZ2luJyxcbn1cbmV4cG9ydCBjb25zdCBQQUdFUzogQUNUSVZFX1BBR0VbXSA9IFtcbiAgICBBQ1RJVkVfUEFHRS5IT01FLFxuICAgIEFDVElWRV9QQUdFLkFCT1VULFxuICAgIEFDVElWRV9QQUdFLkNPTlRBQ1QsXG4gICAgQUNUSVZFX1BBR0UuQkxPRyxcbiAgICAvLyBBQ1RJVkVfUEFHRS5MT0dJTixcbl07XG4iXSwibmFtZXMiOlsiQUNUSVZFX1BBR0UiLCJQQUdFUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/pages.ts\n");

/***/ }),

/***/ "./lib/features/activePage.ts":
/*!************************************!*\
  !*** ./lib/features/activePage.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activePage: () => (/* binding */ activePage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setActivePage: () => (/* binding */ setActivePage)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _constants_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/pages */ \"./constants/pages.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst activePage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"activePage\",\n    initialState: {\n        value: _constants_pages__WEBPACK_IMPORTED_MODULE_1__.ACTIVE_PAGE.HOME\n    },\n    reducers: {\n        setActivePage: (state, action)=>{\n            state.value = action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { setActivePage } = activePage.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activePage.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmVhdHVyZXMvYWN0aXZlUGFnZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNJO0FBRzNDLE1BQU1FLGFBQWFGLDZEQUFXQSxDQUFDO0lBQ2xDRyxNQUFNO0lBQ05DLGNBQWM7UUFDVkMsT0FBT0oseURBQVdBLENBQUNLLElBQUk7SUFDM0I7SUFDQUMsVUFBVTtRQUNOQyxlQUFlLENBQUNDLE9BQU9DO1lBQ25CRCxNQUFNSixLQUFLLEdBQUdLLE9BQU9DLE9BQU87UUFDaEM7SUFDSjtBQUNKLEdBQUU7QUFHRiwrREFBK0Q7QUFDeEQsTUFBTSxFQUFFSCxhQUFhLEVBQUUsR0FBR04sV0FBV1UsT0FBTztBQUduRCxpRUFBZVYsV0FBV1csT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9saWIvZmVhdHVyZXMvYWN0aXZlUGFnZS50cz9hZmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7QUNUSVZFX1BBR0V9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvcGFnZXNcIjtcblxuXG5leHBvcnQgY29uc3QgYWN0aXZlUGFnZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnYWN0aXZlUGFnZScsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIHZhbHVlOiBBQ1RJVkVfUEFHRS5IT01FLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0QWN0aXZlUGFnZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICB9LFxufSlcblxuXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCB7IHNldEFjdGl2ZVBhZ2UgfSA9IGFjdGl2ZVBhZ2UuYWN0aW9uc1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFjdGl2ZVBhZ2UucmVkdWNlclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiQUNUSVZFX1BBR0UiLCJhY3RpdmVQYWdlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwiSE9NRSIsInJlZHVjZXJzIiwic2V0QWN0aXZlUGFnZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/features/activePage.ts\n");

/***/ }),

/***/ "./lib/features/langSelector.ts":
/*!**************************************!*\
  !*** ./lib/features/langSelector.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   langSelector: () => (/* binding */ langSelector),\n/* harmony export */   setCurrentLang: () => (/* binding */ setCurrentLang)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _constants_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/languages */ \"./constants/languages.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst langSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"langSelector\",\n    initialState: {\n        value: _constants_languages__WEBPACK_IMPORTED_MODULE_1__.LANG_EN\n    },\n    reducers: {\n        setCurrentLang: (state, action)=>{\n            state.value = action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { setCurrentLang } = langSelector.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (langSelector.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmVhdHVyZXMvbGFuZ1NlbGVjdG9yLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0k7QUFHM0MsTUFBTUUsZUFBZUYsNkRBQVdBLENBQUM7SUFDcENHLE1BQU07SUFDTkMsY0FBYztRQUNWQyxPQUFPSix5REFBT0E7SUFDbEI7SUFDQUssVUFBVTtRQUNOQyxnQkFBZ0IsQ0FBQ0MsT0FBT0M7WUFDcEJELE1BQU1ILEtBQUssR0FBR0ksT0FBT0MsT0FBTztRQUNoQztJQUNKO0FBQ0osR0FBRTtBQUdGLCtEQUErRDtBQUN4RCxNQUFNLEVBQUVILGNBQWMsRUFBRSxHQUFHTCxhQUFhUyxPQUFPO0FBR3RELGlFQUFlVCxhQUFhVSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL2xpYi9mZWF0dXJlcy9sYW5nU2VsZWN0b3IudHM/ZmMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQge0xBTkdfRU59IGZyb20gXCIuLi8uLi9jb25zdGFudHMvbGFuZ3VhZ2VzXCI7XG5cblxuZXhwb3J0IGNvbnN0IGxhbmdTZWxlY3RvciA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnbGFuZ1NlbGVjdG9yJyxcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgdmFsdWU6IExBTkdfRU4sXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRDdXJyZW50TGFuZzogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICB9LFxufSlcblxuXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCB7IHNldEN1cnJlbnRMYW5nIH0gPSBsYW5nU2VsZWN0b3IuYWN0aW9uc1xuXG5cbmV4cG9ydCBkZWZhdWx0IGxhbmdTZWxlY3Rvci5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJMQU5HX0VOIiwibGFuZ1NlbGVjdG9yIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJzZXRDdXJyZW50TGFuZyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/features/langSelector.ts\n");

/***/ }),

/***/ "./lib/store.ts":
/*!**********************!*\
  !*** ./lib/store.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeStore: () => (/* binding */ makeStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _features_langSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/langSelector */ \"./lib/features/langSelector.ts\");\n/* harmony import */ var _features_activePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/activePage */ \"./lib/features/activePage.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_langSelector__WEBPACK_IMPORTED_MODULE_1__, _features_activePage__WEBPACK_IMPORTED_MODULE_2__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_langSelector__WEBPACK_IMPORTED_MODULE_1__, _features_activePage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst makeStore = ()=>{\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            langSelector: _features_langSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            activePage: _features_activePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        }\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUNRO0FBQ0o7QUFHOUMsTUFBTUcsWUFBWTtJQUNyQixPQUFPSCxnRUFBY0EsQ0FBQztRQUNsQkksU0FBUztZQUNMQyxjQUFjSiw4REFBbUJBO1lBQ2pDSyxZQUFZSiw0REFBaUJBO1FBQ2pDO0lBQ0o7QUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL2xpYi9zdG9yZS50cz9lODQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBsYW5nU2VsZWN0b3JSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvbGFuZ1NlbGVjdG9yJ1xuaW1wb3J0IGFjdGl2ZVBhZ2VSZWR1Y2VyIGZyb20gJy4vZmVhdHVyZXMvYWN0aXZlUGFnZSdcblxuXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKCkgPT4ge1xuICAgIHJldHVybiBjb25maWd1cmVTdG9yZSh7XG4gICAgICAgIHJlZHVjZXI6IHtcbiAgICAgICAgICAgIGxhbmdTZWxlY3RvcjogbGFuZ1NlbGVjdG9yUmVkdWNlcixcbiAgICAgICAgICAgIGFjdGl2ZVBhZ2U6IGFjdGl2ZVBhZ2VSZWR1Y2VyLFxuICAgICAgICB9LFxuICAgIH0pXG5cbn1cblxuXG4vLyBJbmZlciB0aGUgdHlwZSBvZiBtYWtlU3RvcmVcbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gUmV0dXJuVHlwZTx0eXBlb2YgbWFrZVN0b3JlPjtcbi8vIEluZmVyIHRoZSBgUm9vdFN0YXRlYCBhbmQgYEFwcERpc3BhdGNoYCB0eXBlcyBmcm9tIHRoZSBzdG9yZSBpdHNlbGZcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xuLy8gSW5mZXJyZWQgdHlwZToge3Bvc3RzOiBQb3N0c1N0YXRlLCBjb21tZW50czogQ29tbWVudHNTdGF0ZSwgdXNlcnM6IFVzZXJzU3RhdGV9XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlWydkaXNwYXRjaCddO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibGFuZ1NlbGVjdG9yUmVkdWNlciIsImFjdGl2ZVBhZ2VSZWR1Y2VyIiwibWFrZVN0b3JlIiwicmVkdWNlciIsImxhbmdTZWxlY3RvciIsImFjdGl2ZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/StoreProvider */ \"./app/StoreProvider.tsx\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_StoreProvider__WEBPACK_IMPORTED_MODULE_1__]);\n_app_StoreProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_StoreProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/sjuarez/PROJECTS/CV-SERGIO/blog/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/sjuarez/PROJECTS/CV-SERGIO/blog/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ2xCO0FBRy9CLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0ksOERBQUNILDBEQUFhQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdoQztBQUdBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFN0b3JlUHJvdmlkZXIgZnJvbSBcIi4uL2FwcC9TdG9yZVByb3ZpZGVyXCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgIHtcbiAgcmV0dXJuIChcbiAgICAgIDxTdG9yZVByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJTdG9yZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();