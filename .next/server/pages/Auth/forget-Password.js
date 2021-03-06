"use strict";
(() => {
var exports = {};
exports.id = 3160;
exports.ids = [3160,2149,3970,2208,6157,3309];
exports.modules = {

/***/ 2784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5623);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);





async function getStaticProps() {
    const json = "6LfMd88dAAAAANh6pGI5JNg-q4m3gkwi8BlYKmHo";
    return {
        props: {
            json
        },
        revalidate: 1
    };
}
const ForgetPassword = ({ json  })=>{
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: seccsess , 1: setSeccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const reRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('');
    async function forget() {
        try {
            setLoading(true);
            setError("");
            const captcha = await reRef.current.executeAsync();
            reRef.current.reset();
            const post = {
                email,
                captcha
            };
            await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://dreamweb.runflare.run/authentication/resetemail', post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.errMessage) {
                    setError(res.data);
                }
                setLoading(false);
                if (!res.data.errMessage) {
                    setSeccess(true);
                }
            });
        } catch (err) {
            setLoading(false);
            setSeccess(false);
        }
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "background",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/art.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: " ?????????????? ?????? ???????? "
                    })
                ]
            }),
            seccsess === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setSeccess(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            error.err === 'reset' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setError('')
                ,
                id: "backDrop",
                children: "hello"
            }),
            seccsess === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/accept.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "?????????? ?????????? ?????? ???????? ?????? ?????????? ????!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setEmail('');
                            setSeccess(false);
                        },
                        children: "?????????? ??????"
                    })
                ]
            }),
            error.err === "reset" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: error.errMessage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        style: {
                            background: "#fe1919"
                        },
                        onClick: ()=>{
                            setError('');
                        },
                        children: "?????????? ??????"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "forget-card",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "forget-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "?????????? ?????? ???? ???????? ???????? ...",
                                type: "email",
                                onChange: (e)=>setEmail(e.target.value)
                                ,
                                value: email
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "Auth-err",
                                children: error && !error.err && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/warning (1).png",
                                            alt: "warning"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: error.errMessage
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default()), {
                                style: {
                                    zIndex: "30",
                                    opacity: "0"
                                },
                                size: "invisible",
                                sitekey: json,
                                ref: reRef
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                disabled: loading === true,
                                onClick: forget,
                                children: [
                                    "?????????? ",
                                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "loading-spinner"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "forget-right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontSize: "20px",
                                    color: "white",
                                    fontWeight: "600"
                                },
                                children: "?????????????? ?????? ????????"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginTop: "40px",
                                    color: "white",
                                    direction: "rtl",
                                    width: "88%",
                                    fontSize: "15px"
                                },
                                children: "?????? ???????????????? ???? ???????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ???????? !"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginTop: "40px",
                                    color: "white",
                                    direction: "rtl",
                                    width: "88%",
                                    fontSize: "15px"
                                },
                                children: "???? ???? ?????????? ?????? ?????????? ???????? ?????????? ?????? ???????? ?? ???? ?????? ???????? ?????????? ?????? ???????? ????????."
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPassword);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2784));
module.exports = __webpack_exports__;

})();