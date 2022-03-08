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

/***/ "./helpers/context/authContext.js":
/*!****************************************!*\
  !*** ./helpers/context/authContext.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: userLoggedIn , 1: setUserLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: find , 1: setFind  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"ws://dreamweb.runflare.run\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.current.on(\"getOnlineUsers\", (OnlineUsers)=>{\n            setUsers(OnlineUsers);\n        });\n    }, []);\n    async function getUserLoggedIn() {\n        try {\n            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://dreamweb.runflare.run/authentication/loggedIn\", {\n                withCredentials: true\n            });\n            setUserLoggedIn(usersloggedIn.data);\n        } catch (err) {}\n    }\n    async function getUserinfo() {\n        try {\n            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://dreamweb.runflare.run/authentication/findUser\", {\n                withCredentials: true\n            });\n            setFind(usersloggedIn.data);\n        } catch (err) {}\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getSession() {\n            try {\n                await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://dreamweb.runflare.run/session\", {\n                    withCredentials: true\n                });\n            } catch (err) {}\n        }\n        getSession();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserLoggedIn();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserinfo();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            userLoggedIn,\n            getUserLoggedIn,\n            find,\n            users\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\FARDIN\\\\frontend\\\\helpers\\\\context\\\\authContext.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2NvbnRleHQvYXV0aENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUMwQztBQUNsQztBQUlqQyxLQUFLLENBQUNNLFdBQVcsaUJBQUdMLG9EQUFhO0FBRXpCLEtBQUssQ0FBQ00sbUJBQW1CLElBQUksQ0FBQ0MsQ0FBQUEsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRWxELEtBQUssTUFBRUMsWUFBWSxNQUFHQyxlQUFlLE1BQUlQLCtDQUFRLENBQUMsS0FBSztJQUN2RCxLQUFLLE1BQUVRLElBQUksTUFBR0MsT0FBTyxNQUFJVCwrQ0FBUSxDQUFDLEtBQUs7SUFDdkMsS0FBSyxNQUFFVSxLQUFLLE1BQUVDLFFBQVEsTUFBSVgsK0NBQVEsQ0FBQyxJQUFJO0lBQ3ZDLEtBQUssQ0FBQ1ksTUFBTSxHQUFHWCw2Q0FBTTtJQUVyQkYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZhLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHWCw0REFBRSxDQUFDLENBQTRCO0lBQ2pELENBQUMsRUFBRyxDQUFDLENBQUM7SUFFUEgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2RhLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxFQUFFLENBQUMsQ0FBZ0Isa0JBQUdDLFdBQVcsR0FBSSxDQUFDO1lBQ2xESixRQUFRLENBQUNJLFdBQVc7UUFDdkIsQ0FBQztJQUNILENBQUMsRUFBQyxDQUFDLENBQUM7bUJBRVVDLGVBQWUsR0FBRyxDQUFDO1FBQ2hDLEdBQUcsRUFBQztZQUNGLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQ3BCLGdEQUFTLENBQUMsQ0FBc0QsdURBQUMsQ0FBQ3NCO2dCQUFBQSxlQUFlLEVBQUMsSUFBSTtZQUFBLENBQUM7WUFDbkhaLGVBQWUsQ0FBQ1UsYUFBYSxDQUFDRyxJQUFJO1FBQ3BDLENBQUMsQ0FBQyxLQUFLLEVBQUNDLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQzttQkFFVUMsV0FBVyxHQUFHLENBQUM7UUFDNUIsR0FBRyxFQUFDO1lBQ0osS0FBSyxDQUFDTCxhQUFhLEdBQUcsS0FBSyxDQUFDcEIsZ0RBQVMsQ0FBQyxDQUFzRCx1REFBQyxDQUFDc0I7Z0JBQUFBLGVBQWUsRUFBQyxJQUFJO1lBQUEsQ0FBQztZQUNuSFYsT0FBTyxDQUFDUSxhQUFhLENBQUNHLElBQUk7UUFDMUIsQ0FBQyxDQUNELEtBQUssRUFBQ0MsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRHRCLGdEQUFTLEtBQU8sQ0FBQzt1QkFDQXdCLFVBQVUsR0FBRyxDQUFDO1lBQzNCLEdBQUcsRUFBQztnQkFDSCxLQUFLLENBQUMxQixnREFBUyxDQUFDLENBQXNDLHVDQUFDLENBQUNzQjtvQkFBQUEsZUFBZSxFQUFDLElBQUk7Z0JBQUEsQ0FBQztZQUM5RSxDQUFDLENBQUMsS0FBSyxFQUFDRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUNMRSxVQUFVO0lBQ1YsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNKeEIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZpQixlQUFlO0lBQ2pCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSmpCLGdEQUFTLEtBQU8sQ0FBQztRQUNmdUIsV0FBVztJQUNiLENBQUMsRUFBQyxDQUFDLENBQUM7SUFLQSxNQUFNLDZFQUNMbkIsV0FBVyxDQUFDcUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDbkIsWUFBWTtZQUFFVSxlQUFlO1lBQUVSLElBQUk7WUFBRUUsS0FBSztRQUFBLENBQUM7a0JBQ3RFTCxRQUFROzs7Ozs7QUFJaEIsQ0FBQztBQUVELGlFQUFlRixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItc2hvcC8uL2hlbHBlcnMvY29udGV4dC9hdXRoQ29udGV4dC5qcz9iODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgLCB1c2VFZmZlY3QsIHVzZVN0YXRlICx1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcblxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4gZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlckxvZ2dlZEluICwgc2V0VXNlckxvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaW5kICwgc2V0RmluZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlcnMgLHNldFVzZXJzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhcIndzOi8vZHJlYW13ZWIucnVuZmxhcmUucnVuXCIpXHJcbiAgICAgfSAsIFtdKTtcclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwiZ2V0T25saW5lVXNlcnNcIiAsIE9ubGluZVVzZXJzID0+IHtcclxuICAgICAgICAgIHNldFVzZXJzKE9ubGluZVVzZXJzKVxyXG4gICAgICAgfSlcclxuICAgICB9LFtdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTG9nZ2VkSW4oKSB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2Vyc2xvZ2dlZEluID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2RyZWFtd2ViLnJ1bmZsYXJlLnJ1bi9hdXRoZW50aWNhdGlvbi9sb2dnZWRJblwiLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pO1xyXG4gICAgICAgIHNldFVzZXJMb2dnZWRJbih1c2Vyc2xvZ2dlZEluLmRhdGEpOyAgXHJcbiAgICAgIH0gY2F0Y2goZXJyKXt9XHJcbiAgICB9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyaW5mbygpIHtcclxuICB0cnl7XHJcbiAgY29uc3QgdXNlcnNsb2dnZWRJbiA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9kcmVhbXdlYi5ydW5mbGFyZS5ydW4vYXV0aGVudGljYXRpb24vZmluZFVzZXJcIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICBzZXRGaW5kKHVzZXJzbG9nZ2VkSW4uZGF0YSk7ICBcclxuICB9XHJcbiAgY2F0Y2goZXJyKXt9XHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuICAgIHRyeXtcclxuICAgICBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vZHJlYW13ZWIucnVuZmxhcmUucnVuL3Nlc3Npb25cIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgIH0gY2F0Y2goZXJyKXt9XHJcbiAgICB9XHJcbmdldFNlc3Npb24oKTtcclxufSxbXSk7XHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgZ2V0VXNlckxvZ2dlZEluKClcclxufSxbXSk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGdldFVzZXJpbmZvKClcclxufSxbXSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXJMb2dnZWRJbiAsZ2V0VXNlckxvZ2dlZEluICxmaW5kICx1c2Vyc319ID5cclxuICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaW8iLCJBdXRoQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJMb2dnZWRJbiIsInNldFVzZXJMb2dnZWRJbiIsImZpbmQiLCJzZXRGaW5kIiwidXNlcnMiLCJzZXRVc2VycyIsInNvY2tldCIsImN1cnJlbnQiLCJvbiIsIk9ubGluZVVzZXJzIiwiZ2V0VXNlckxvZ2dlZEluIiwidXNlcnNsb2dnZWRJbiIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJlcnIiLCJnZXRVc2VyaW5mbyIsImdldFNlc3Npb24iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/context/authContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.css */ \"./styles/home.css\");\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_routes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/routes.css */ \"./styles/routes.css\");\n/* harmony import */ var _styles_routes_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_routes_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/context/authContext */ \"./helpers/context/authContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__]);\n_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__.AuthContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\FARDIN\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\FARDIN\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSDtBQUNFO0FBQ0k7QUFDbUM7U0FFM0RDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQUVILDZFQUFtQjs4RkFDaEJFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFFcEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLXNob3AvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaG9tZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcm91dGVzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9yZXNwb25zaXZlLmNzcyc7XG5pbXBvcnQgeyBBdXRoQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy9jb250ZXh0L2F1dGhDb250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxBdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvQXV0aENvbnRleHRQcm92aWRlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/home.css":
/*!*************************!*\
  !*** ./styles/home.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/routes.css":
/*!***************************!*\
  !*** ./styles/routes.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();