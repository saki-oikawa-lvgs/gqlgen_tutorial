"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./graphql/dist/client.ts":
/*!********************************!*\
  !*** ./graphql/dist/client.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateTodoDocument\": () => (/* binding */ CreateTodoDocument),\n/* harmony export */   \"GetTodosDocument\": () => (/* binding */ GetTodosDocument),\n/* harmony export */   \"getSdk\": () => (/* binding */ getSdk)\n/* harmony export */ });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GetTodosDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\n    query getTodos {\n  getTodos {\n    id\n    text\n  }\n}\n    `;\nconst CreateTodoDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\n    mutation createTodo {\n  createTodo(text: \"test\") {\n    id\n    text\n    done\n  }\n}\n    `;\nconst defaultWrapper = (action, _operationName, _operationType)=>action();\nfunction getSdk(client, withWrapper = defaultWrapper) {\n    return {\n        getTodos (variables, requestHeaders) {\n            return withWrapper((wrappedRequestHeaders)=>client.request(GetTodosDocument, variables, {\n                    ...requestHeaders,\n                    ...wrappedRequestHeaders\n                }), \"getTodos\", \"query\");\n        },\n        createTodo (variables, requestHeaders) {\n            return withWrapper((wrappedRequestHeaders)=>client.request(CreateTodoDocument, variables, {\n                    ...requestHeaders,\n                    ...wrappedRequestHeaders\n                }), \"createTodo\", \"mutation\");\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2Rpc3QvY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRThCO0FBZ0R2QixNQUFNQyxnQkFBZ0IsR0FBR0Qsb0RBQUcsQ0FBQzs7Ozs7OztJQU9oQyxDQUFDLENBQUM7QUFDQyxNQUFNRSxrQkFBa0IsR0FBR0Ysb0RBQUcsQ0FBQzs7Ozs7Ozs7SUFRbEMsQ0FBQyxDQUFDO0FBS04sTUFBTUcsY0FBYyxHQUF1QixDQUFDQyxNQUFNLEVBQUVDLGNBQWMsRUFBRUMsY0FBYyxHQUFLRixNQUFNLEVBQUU7QUFFeEYsU0FBU0csTUFBTSxDQUFDQyxNQUFxQixFQUFFQyxXQUErQixHQUFHTixjQUFjLEVBQUU7SUFDOUYsT0FBTztRQUNMTyxRQUFRLEVBQUNDLFNBQWtDLEVBQUVDLGNBQTJDLEVBQTBCO1lBQ2hILE9BQU9ILFdBQVcsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBS0wsTUFBTSxDQUFDTSxPQUFPLENBQWdCYixnQkFBZ0IsRUFBRVUsU0FBUyxFQUFFO29CQUFDLEdBQUdDLGNBQWM7b0JBQUUsR0FBR0MscUJBQXFCO2lCQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEwsQ0FBQztRQUNERSxVQUFVLEVBQUNKLFNBQXVDLEVBQUVDLGNBQTJDLEVBQStCO1lBQzVILE9BQU9ILFdBQVcsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBS0wsTUFBTSxDQUFDTSxPQUFPLENBQXFCWixrQkFBa0IsRUFBRVMsU0FBUyxFQUFFO29CQUFDLEdBQUdDLGNBQWM7b0JBQUUsR0FBR0MscUJBQXFCO2lCQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUwsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZ3JhcGhxbC9kaXN0L2NsaWVudC50cz9hMTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuaW1wb3J0ICogYXMgRG9tIGZyb20gJ2dyYXBocWwtcmVxdWVzdC9kaXN0L3R5cGVzLmRvbSc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBJbnB1dE1heWJlPFQ+ID0gTWF5YmU8VD47XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGNyZWF0ZVRvZG86IFRvZG87XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlVG9kb0FyZ3MgPSB7XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBnZXRUb2RvczogQXJyYXk8VG9kbz47XG59O1xuXG5leHBvcnQgdHlwZSBUb2RvID0ge1xuICBfX3R5cGVuYW1lPzogJ1RvZG8nO1xuICBkb25lOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGlkOiBTY2FsYXJzWydJRCddO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldFRvZG9zUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBHZXRUb2Rvc1F1ZXJ5ID0geyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JywgZ2V0VG9kb3M6IEFycmF5PHsgX190eXBlbmFtZT86ICdUb2RvJywgaWQ6IHN0cmluZywgdGV4dDogc3RyaW5nIH0+IH07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVRvZG9NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVRvZG9NdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIGNyZWF0ZVRvZG86IHsgX190eXBlbmFtZT86ICdUb2RvJywgaWQ6IHN0cmluZywgdGV4dDogc3RyaW5nLCBkb25lOiBib29sZWFuIH0gfTtcblxuXG5leHBvcnQgY29uc3QgR2V0VG9kb3NEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBnZXRUb2RvcyB7XG4gIGdldFRvZG9zIHtcbiAgICBpZFxuICAgIHRleHRcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgQ3JlYXRlVG9kb0RvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIGNyZWF0ZVRvZG8ge1xuICBjcmVhdGVUb2RvKHRleHQ6IFwidGVzdFwiKSB7XG4gICAgaWRcbiAgICB0ZXh0XG4gICAgZG9uZVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IHR5cGUgU2RrRnVuY3Rpb25XcmFwcGVyID0gPFQ+KGFjdGlvbjogKHJlcXVlc3RIZWFkZXJzPzpSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiBQcm9taXNlPFQ+LCBvcGVyYXRpb25OYW1lOiBzdHJpbmcsIG9wZXJhdGlvblR5cGU/OiBzdHJpbmcpID0+IFByb21pc2U8VD47XG5cblxuY29uc3QgZGVmYXVsdFdyYXBwZXI6IFNka0Z1bmN0aW9uV3JhcHBlciA9IChhY3Rpb24sIF9vcGVyYXRpb25OYW1lLCBfb3BlcmF0aW9uVHlwZSkgPT4gYWN0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZGsoY2xpZW50OiBHcmFwaFFMQ2xpZW50LCB3aXRoV3JhcHBlcjogU2RrRnVuY3Rpb25XcmFwcGVyID0gZGVmYXVsdFdyYXBwZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRUb2Rvcyh2YXJpYWJsZXM/OiBHZXRUb2Rvc1F1ZXJ5VmFyaWFibGVzLCByZXF1ZXN0SGVhZGVycz86IERvbS5SZXF1ZXN0SW5pdFtcImhlYWRlcnNcIl0pOiBQcm9taXNlPEdldFRvZG9zUXVlcnk+IHtcbiAgICAgIHJldHVybiB3aXRoV3JhcHBlcigod3JhcHBlZFJlcXVlc3RIZWFkZXJzKSA9PiBjbGllbnQucmVxdWVzdDxHZXRUb2Rvc1F1ZXJ5PihHZXRUb2Rvc0RvY3VtZW50LCB2YXJpYWJsZXMsIHsuLi5yZXF1ZXN0SGVhZGVycywgLi4ud3JhcHBlZFJlcXVlc3RIZWFkZXJzfSksICdnZXRUb2RvcycsICdxdWVyeScpO1xuICAgIH0sXG4gICAgY3JlYXRlVG9kbyh2YXJpYWJsZXM/OiBDcmVhdGVUb2RvTXV0YXRpb25WYXJpYWJsZXMsIHJlcXVlc3RIZWFkZXJzPzogRG9tLlJlcXVlc3RJbml0W1wiaGVhZGVyc1wiXSk6IFByb21pc2U8Q3JlYXRlVG9kb011dGF0aW9uPiB7XG4gICAgICByZXR1cm4gd2l0aFdyYXBwZXIoKHdyYXBwZWRSZXF1ZXN0SGVhZGVycykgPT4gY2xpZW50LnJlcXVlc3Q8Q3JlYXRlVG9kb011dGF0aW9uPihDcmVhdGVUb2RvRG9jdW1lbnQsIHZhcmlhYmxlcywgey4uLnJlcXVlc3RIZWFkZXJzLCAuLi53cmFwcGVkUmVxdWVzdEhlYWRlcnN9KSwgJ2NyZWF0ZVRvZG8nLCAnbXV0YXRpb24nKTtcbiAgICB9XG4gIH07XG59XG5leHBvcnQgdHlwZSBTZGsgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTZGs+OyJdLCJuYW1lcyI6WyJncWwiLCJHZXRUb2Rvc0RvY3VtZW50IiwiQ3JlYXRlVG9kb0RvY3VtZW50IiwiZGVmYXVsdFdyYXBwZXIiLCJhY3Rpb24iLCJfb3BlcmF0aW9uTmFtZSIsIl9vcGVyYXRpb25UeXBlIiwiZ2V0U2RrIiwiY2xpZW50Iiwid2l0aFdyYXBwZXIiLCJnZXRUb2RvcyIsInZhcmlhYmxlcyIsInJlcXVlc3RIZWFkZXJzIiwid3JhcHBlZFJlcXVlc3RIZWFkZXJzIiwicmVxdWVzdCIsImNyZWF0ZVRvZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./graphql/dist/client.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_dist_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/dist/client */ \"./graphql/dist/client.ts\");\n\n\n\nconst Home = ()=>{\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_graphql_dist_client__WEBPACK_IMPORTED_MODULE_2__.GetTodosDocument);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"0 auto\",\n            width: \"1000px\"\n        },\n        children: data?.getTodos?.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: todo.text\n                    }, void 0, false, {\n                        fileName: \"/Users/saki.oikawa/gqlgen_tutorial/frontend/src/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"id:\",\n                            todo.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saki.oikawa/gqlgen_tutorial/frontend/src/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"text:\",\n                            todo.text\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saki.oikawa/gqlgen_tutorial/frontend/src/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, todo.text, true, {\n                fileName: \"/Users/saki.oikawa/gqlgen_tutorial/frontend/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/saki.oikawa/gqlgen_tutorial/frontend/src/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQzBDO0FBRW1CO0FBRzdELE1BQU1FLElBQUksR0FBYSxJQUFNO0lBQzNCLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdILHdEQUFRLENBQWdCQyxrRUFBZ0IsQ0FBQztJQUMxRCxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsTUFBTSxFQUFFLFFBQVE7WUFBRUMsS0FBSyxFQUFFLFFBQVE7U0FBRTtrQkFDOUNKLElBQUksRUFBRUssUUFBUSxFQUFFQyxHQUFHLENBQUMsQ0FBQ0MsSUFBUSxpQkFDNUIsOERBQUNOLEtBQUc7O2tDQUNGLDhEQUFDTyxJQUFFO2tDQUFFRCxJQUFJLENBQUNFLElBQUk7Ozs7O2lDQUFNO2tDQUNwQiw4REFBQ0MsR0FBQzs7NEJBQUMsS0FBRzs0QkFBQ0gsSUFBSSxDQUFDSSxFQUFFOzs7Ozs7aUNBQUs7a0NBQ25CLDhEQUFDRCxHQUFDOzs0QkFBQyxPQUFLOzRCQUFDSCxJQUFJLENBQUNFLElBQUk7Ozs7OztpQ0FBSzs7ZUFIZkYsSUFBSSxDQUFDRSxJQUFJOzs7O3lCQUliLENBQ047Ozs7O2lCQUNFLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVWLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmltcG9ydCB7IEdldFRvZG9zRG9jdW1lbnQgfSBmcm9tIFwiLi4vLi4vZ3JhcGhxbC9kaXN0L2NsaWVudFwiO1xuaW1wb3J0IHsgR2V0VG9kb3NRdWVyeSB9IGZyb20gXCIuLi8uLi9ncmFwaHFsL2Rpc3QvY2xpZW50XCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PEdldFRvZG9zUXVlcnk+KEdldFRvZG9zRG9jdW1lbnQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiLCB3aWR0aDogXCIxMDAwcHhcIiB9fT5cbiAgICAgIHtkYXRhPy5nZXRUb2Rvcz8ubWFwKCh0b2RvOmFueSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17dG9kby50ZXh0fT5cbiAgICAgICAgICA8aDE+e3RvZG8udGV4dH08L2gxPlxuICAgICAgICAgIDxwPmlkOnt0b2RvLmlkfTwvcD5cbiAgICAgICAgICA8cD50ZXh0Ont0b2RvLnRleHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlUXVlcnkiLCJHZXRUb2Rvc0RvY3VtZW50IiwiSG9tZSIsImRhdGEiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbiIsIndpZHRoIiwiZ2V0VG9kb3MiLCJtYXAiLCJ0b2RvIiwiaDEiLCJ0ZXh0IiwicCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();