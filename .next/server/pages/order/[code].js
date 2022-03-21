"use strict";
(() => {
var exports = {};
exports.id = 9521;
exports.ids = [9521,2149,3970,2208,6157,3309];
exports.modules = {

/***/ 3969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



async function getServerSideProps(context) {
    const con = context.params.code;
    const loggedIn = await fetch(`http://dreamweb.runflare.run/allRoutes/fullPost/${con}`, {
        method: 'GET'
    });
    const logged = await loggedIn.json();
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
            post: logged,
            user
        }
    };
}
const index = ({ post , user  })=>{
    const { 0: username , 1: setUserName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: agree , 1: setAgree  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: read , 1: setRead  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: laws , 1: setLaws  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: PAy , 1: seTpay  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const pay = async (e)=>{
        e.preventDefault();
        //   const post = {number,email,agree , username}
        seTpay(true);
    };
    const law = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://dreamweb.runflare.run/allRoutes/laws", {
            withCredentials: true
        }).then((res)=>{
            setLaws(res.data[0].text);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (user) {
            setUserName(user.username);
            setEmail(user.email);
            setNumber(user.number[0].number);
            law();
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "order-web",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    " سفارش آنلاین وبسایت ",
                    post.name
                ]
            }),
            read === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setRead(false)
                ,
                id: "backDrop",
                children: "hello"
            }),
            PAy === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>seTpay(false)
                ,
                id: "backDrop",
                children: "hello"
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: "نام و نام خانوادگی",
                        value: user.username,
                        onChange: (e)=>setUserName(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: "شماره همراه",
                        value: user.number[0].number
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: `کد سایت: ${post._id}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        style: {
                            background: "#ddf0ff"
                        },
                        placeholder: "ایمیل",
                        value: user.email
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "checkbox"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "دامنه com سالیانه 290,000 تومان"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    children: "زبان اضافه برای سایت های بین المللی"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "payment",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "مبلغ قابل پرداخت:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    post.price,
                                    "تومان"
                                ]
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3969));
module.exports = __webpack_exports__;

})();