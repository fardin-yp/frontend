"use strict";
(() => {
var exports = {};
exports.id = 4770;
exports.ids = [4770,2149,3970,2208,6157,3309];
exports.modules = {

/***/ 2515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch(`http://dreamweb.runflare.run/allRoutes/SeoService/${id}`);
    const json = await res.json();
    const usersloggedIn = await fetch("http://dreamweb.runflare.run/authentication/find", {
        credentials: "include",
        headers: {
            cookie: context.req.cookies.token
        }
    });
    const user = await usersloggedIn.json();
    if (!user || !user.username) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        };
    }
    if (!context.req.cookies.token) {
        return {
            redirect: {
                permanent: false,
                destination: "/404"
            }
        };
    }
    return {
        props: {
            json,
            user
        }
    };
}
const index = ({ json , user  })=>{
    const { 0: namee , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: des , 1: setDes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: PAy , 1: seTpay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: read , 1: setRead  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: laws , 1: setLaws  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const pay = async (e)=>{
        e.preventDefault();
        const post = {
            namee,
            email,
            number,
            des,
            information: name,
            price
        };
        await axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://dreamweb.runflare.run/allRoutes/orderSold", post, {
            withCredentials: true
        });
    };
    const law = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://dreamweb.runflare.run/allRoutes/laws", {
            withCredentials: true
        }).then((res)=>{
            setLaws(res.data[0].text);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) {
            setName(user.username);
            setEmail(user.email);
            setNumber(user.number[0].number);
            law();
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "order-web",
        children: [
            PAy === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>seTpay(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            read === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setRead(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            read === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "law",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        onClick: ()=>setRead(false)
                        ,
                        src: "/images/cancel (1).png",
                        alt: ""
                    }),
                    laws && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: laws
                        }
                    })
                ]
            }),
            PAy === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        style: {
                            marginTop: "15px",
                            color: "#fe0000"
                        },
                        children: " متاسفانه در حال حاضر درگاه پرداختی وجود ندارد !"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        style: {
                            textAlign: "center",
                            fontSize: "20px"
                        },
                        children: "شما میتوانید برای خرید این وبسایت با پشتیبانی تماس بگیرید!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        style: {
                            background: "#fe1919"
                        },
                        onClick: ()=>{
                            seTpay(false);
                        },
                        children: "متوجه شدم"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    " سفارش آنلاین ",
                    json.title
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: namee,
                        style: {
                            background: "#ddf0ff"
                        },
                        onChange: (e)=>setName(e.target.value)
                        ,
                        placeholder: "نام و نام خانوادگی"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: number,
                        style: {
                            background: "#ddf0ff"
                        },
                        onChange: (e)=>setNumber(e.target.value)
                        ,
                        placeholder: "شماره همراه"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: json._id,
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: `کد سرویس: ${json._id}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: email,
                        style: {
                            background: "#ddf0ff"
                        },
                        onChange: (e)=>setEmail(e.target.value)
                        ,
                        placeholder: "ایمیل"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        onChange: (e)=>setDescription(e.target.value)
                        ,
                        style: {
                            fontWeight: "600",
                            width: "92%",
                            marginTop: "15px",
                            borderRadius: "5px",
                            border: "1px solid silver",
                            height: "100px"
                        },
                        placeholder: "توضیحات بیشتر ... (دلخواه)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                width: "99%",
                                margin: "10px 0px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "checkbox"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "قوانین وبسایت را مطالعه کردم و با آن موافقم .",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            style: {
                                                cursor: "pointer",
                                                pointerEvents: "all"
                                            },
                                            onClick: ()=>setRead(true)
                                            ,
                                            children: "قوانین وبسایت"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "payment",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "مبلغ قابل پرداخت:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: json.price
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        onClick: ()=>seTpay(true)
                        ,
                        children: "پرداخت آنلاین"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2515));
module.exports = __webpack_exports__;

})();