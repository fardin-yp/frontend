"use strict";
(() => {
var exports = {};
exports.id = 636;
exports.ids = [636,2149,3970,2208,6157,3309];
exports.modules = {

/***/ 9602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7513);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







async function getServerSideProps(context1) {
    const json = "6LfMd88dAAAAANh6pGI5JNg-q4m3gkwi8BlYKmHo";
    if (context1.req.cookies.token) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        };
    }
    const usersloggedIn = await fetch("http://dreamweb.runflare.run/authentication/find", {
        credentials: "include",
        headers: {
            cookie: context1.req.cookies.token
        }
    });
    const user = await usersloggedIn.json();
    if (user.username) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        };
    }
    return {
        props: {
            json
        }
    };
}
const index = ({ json  })=>{
    const { 0: username , 1: setUserName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: confirm , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { getUserLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: seePassword , 1: setSeePassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const reRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('');
    async function post(e) {
        e.preventDefault();
        setLoading(true);
        setErr("");
        const captcha = await reRef.current.executeAsync();
        reRef.current.reset();
        const ex = {
            email,
            number,
            username,
            password,
            confirm,
            captcha
        };
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://dreamweb.runflare.run/authentication/signup", ex, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    setErr(res.data.errMessage);
                    setLoading(false);
                }
                if (!res.data.errMessage) {
                    getUserLoggedIn();
                    if (lastpage !== window.document.URL) {
                        window.location = lastpage;
                    }
                    if (lastpage === window.document.URL) {
                        window.location = '/';
                    }
                }
            });
        } catch (err) {
            setLoading(false);
        }
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "login",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/art.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: " ثبت نام"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                style: {
                    height: "75%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "ثبت نام"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {},
                        onChange: (e)=>setUserName(e.target.value)
                        ,
                        placeholder: "نام کاربری"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: (e)=>setEmail(e.target.value)
                        ,
                        placeholder: "ایمیل"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: (e)=>setNumber(e.target.value)
                        ,
                        placeholder: "شماره همراه"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: "40%"
                                },
                                id: "password",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    style: {
                                        width: "100%"
                                    },
                                    type: seePassword ? "text" : "password",
                                    onChange: (e)=>setPassword(e.target.value)
                                    ,
                                    placeholder: "تکرار رمز عبور "
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    width: "40%"
                                },
                                id: "password",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        style: {
                                            width: "100%"
                                        },
                                        type: seePassword ? "text" : "password",
                                        onChange: (e)=>setConfirmPassword(e.target.value)
                                        ,
                                        placeholder: "رمز عبور "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        style: seePassword ? {
                                            opacity: "1",
                                            left: "0px"
                                        } : {
                                            left: "0"
                                        },
                                        src: '/uploads/view.png',
                                        onClick: ()=>setSeePassword((prev)=>!prev
                                            )
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_5___default()), {
                        style: {
                            zIndex: "30",
                            opacity: "0"
                        },
                        size: "invisible",
                        sitekey: json,
                        ref: reRef
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: post,
                        children: [
                            "ثبت نام ",
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "loading-spinner"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "Auth-err",
                        children: err && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: err
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            flexFlow: "column",
                            alignItems: "flex-start",
                            width: "70%",
                            marginTop: "35px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    pointerEvents: "all"
                                },
                                children: [
                                    " ثبت نام کرده اید؟ ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/Auth/Login",
                                        children: "ورود"
                                    }),
                                    " "
                                ]
                            }),
                            " "
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7513], () => (__webpack_exec__(9602)));
module.exports = __webpack_exports__;

})();