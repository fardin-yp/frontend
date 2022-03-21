"use strict";
exports.id = 7129;
exports.ids = [7129];
exports.modules = {

/***/ 4951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.56416499.png","height":681,"width":687,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAABReBoRAAAACXRSTlNdLWQAPHMaBUd01n7UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVQImRXGtxEAMAgEsI/A/hP7rEqwB6AXttqOMUouGKDkEfo5/lC5BIRXrcZYjxDvAx2+ANc8XC9oAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 6195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/footer/BackGround.png
/* harmony default export */ const BackGround = ({"src":"/_next/static/media/BackGround.404fdefb.png","height":422,"width":1347,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEXo6Ojm5ubk5OTl5eXq6urq6urq6urHNao2AAAAB3RSTlOSAw07XXN0QwNmAQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUCJljYGZkZGJkZGRiYGBhZWBgYGMAAAD+ABzqqFyuAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/footer/NO.png
/* harmony default export */ const NO = ({"src":"/_next/static/media/NO.07ad4d26.png","height":579,"width":1176,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEWnr7yhqbefp7aor71MaXGvtsKosL2gN5GNAAAAB3RSTlMaDiROADZqxzH3UQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACNJREFUCJkVxckRADAMA6HV5f5LzoQPeIENiLiLqOwfrauiBwWoAE6D/4gbAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/footer/footer.js






const Footer = ()=>{
    const { 0: namad , 1: setNamad  } = (0,external_react_.useState)(null);
    const { 0: links , 1: setLinks  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const getNamad = async ()=>{
            await external_axios_default().get(`http://dreamweb.runflare.run/allRoutes/namad`, {
                withCredentials: true
            }).then((res)=>{
                setNamad(res.data);
            });
        };
        getNamad();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const getLinks = async ()=>{
            await external_axios_default().get(`http://dreamweb.runflare.run/allRoutes/Links`, {
                withCredentials: true
            }).then((res)=>{
                setLinks(res.data);
            });
        };
        getLinks();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "about",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        id: "back-image",
                        src: BackGround,
                        alt: "",
                        layout: "fill"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "about-us",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "درباره ما"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "  تیم دریم وب فعایت خود را از سال 1397 شروع کرده،با دارا بودن بهترین افراد در زمینه های طراحی و توسعه وب در میان رقبا حرفی برای گفتن داریم که با تلاش مضاعف قصد بالا بردن سطح خدمات و پیشبرد اهداف شما مشتریان عزیز  را داریم."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "namad",
                        children: namad && namad.slice(0, 2).map((res)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: `/uploads/${res.image}`,
                                alt: res.image
                            }));
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "top-footer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        id: "back-image",
                        src: NO,
                        alt: "",
                        layout: "fill"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-con",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/uploads/seo.png",
                                        alt: "seo"
                                    }),
                                    "خرید وبسایت:"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/shop-website",
                                children: "خرید سایت فروشگاهی"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/news-website",
                                children: "خرید سایت خبری"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/company-website",
                                children: "خرید سایت شرکتی"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/Real-Estate-website",
                                children: "خرید سایت املاک"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/personal-website",
                                children: "خرید سایت شخصی"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/medical-website",
                                children: "خرید سایت پزشکی"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/resturant-website",
                                children: "خرید سایت رستوران"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-con",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/uploads/service.png",
                                        alt: ""
                                    }),
                                    " لینک های دیگر : "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/Seo",
                                children: "خدمات سئو"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/exclusive-website",
                                children: "خرید سایت اختصاصی"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/exclusive-website/request",
                                children: "درخواست طراحی سایت"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/articles",
                                children: " آموزش ها و مقالات"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/contact-us",
                                children: " ارتباط با ما"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-con",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/uploads/contact.png",
                                        alt: ""
                                    }),
                                    " ارتباط با ما:"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "شما میتوانید نظرات و پیشنهادات خود را به صندوق پستی ",
                                    links && links.email,
                                    " ارسال کنید ."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    " مشاوره و خرید :  ",
                                    links && links.phone,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: links && links.instagram,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                height: 18,
                                                width: 18,
                                                src: "/uploads/telegram.png",
                                                alt: "telegram logo"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: links && links.telegram,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                height: 100,
                                                width: 100,
                                                src: "/uploads/insta.png",
                                                alt: "instagram logo"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: links && links.twitter,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                height: 20,
                                                width: 22,
                                                src: "/uploads/twiter.png",
                                                alt: "twitter logo"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bot-footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "تمامی حقوق وبسایت محفوظ بوده"
                })
            })
        ]
    }));
};
/* harmony default export */ const footer = (Footer);


/***/ }),

/***/ 7365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slider_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7880);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4951);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_2__]);
_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const navbar = ()=>{
    const { 0: scroll , 1: setScroll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { find  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const { 0: openSlider , 1: setOpenSlider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleScroll = ()=>{
        const currenstScrollPos = window.pageYOffset;
        if (currenstScrollPos > 1228) {
            setShow(scroll > currenstScrollPos && scroll - currenstScrollPos > 70 || currenstScrollPos < 10);
            setScroll(currenstScrollPos);
        } else {
            setShow(false);
        }
    };
    const logOut = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_3___default().get("http://dreamweb.runflare.run/authentication/logout", {
            withCredentials: true
        });
        window.location.reload();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll)
        ;
    }, [
        setScroll,
        show,
        handleScroll
    ]);
    let nav = [
        'navbar'
    ];
    if (show && openSlider === false) {
        nav = [
            'navbar',
            'scroll-Nav'
        ];
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: 'navbar',
        children: [
            openSlider == true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setOpenSlider(false)
                ,
                className: "backdrop"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slider_slider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                openSlider: openSlider,
                find: find
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "logo",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: " دریم وب"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "Dream Web"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                layout: "fill",
                                src: _logo_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                alt: "دریم وب"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "nav-bot",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "humburger",
                        onClick: ()=>setOpenSlider((prevState)=>!prevState
                            )
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hums"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hums"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hums"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/home.png",
                                        alt: "home"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/",
                                        children: " خانه "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                style: {
                                    zIndex: "85"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/flash.png",
                                        alt: "flash"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: " خرید وبسایت "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        style: {
                                            width: "180px",
                                            left: "-44%",
                                            zIndex: "85"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/shop-website",
                                                    children: "خرید سایت فروشگاهی"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/news-website",
                                                    children: "خرید سایت خبری"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/company-website",
                                                    children: "خرید سایت شرکتی"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/Real-Estate-website",
                                                    children: "خرید سایت املاک"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/personal-website",
                                                    children: "خرید سایت شخصی"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/medical-website",
                                                    children: "خرید سایت پزشکی"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/resturant-website",
                                                    children: "خرید سایت رستوران"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/seo.png",
                                        alt: "seo png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/exclusive-website",
                                        children: " سایت اختصاصی "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/word.png",
                                        alt: "seo png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/Seo",
                                        children: " سئو "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/doc.png",
                                        alt: "articles"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/articles",
                                        children: " مقالات "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/contact.png",
                                        alt: "contact us"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/contact-us",
                                        children: " تماس با ما "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "nav-login",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/uploads/user.png",
                            alt: "user"
                        }),
                        find.username && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: find.username
                        }),
                        !find.username && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: " پنل کاربری"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-drop",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/uploads/triangle.png",
                                    alt: "triangle"
                                }),
                                !find.username && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/Auth/Login",
                                            children: "ورود پنل کاربری"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            style: {
                                                background: "linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%)"
                                            },
                                            href: "/Auth/SignUp",
                                            children: " ثبت نام "
                                        })
                                    ]
                                }),
                                find.username && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/userProfile",
                                            style: {
                                                background: "linear-gradient(90deg, #06beb6 0%, #48b1bf 100%)",
                                                width: "maxContent"
                                            },
                                            children: " پنل کاربری "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            onClick: ()=>logOut()
                                            ,
                                            style: {
                                                background: "linear-gradient(90deg, #cb2d3e 0%, #ef473a 100%)"
                                            },
                                            children: " خروج از حساب"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const slider = ({ openSlider , find  })=>{
    const { 0: sliderDrop , 1: setSliderDrop  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let nav = [
        'slider'
    ];
    if (openSlider === true) {
        nav = [
            'slider',
            'open-slider'
        ];
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: nav.join(' '),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "LOGO"
                    }),
                    !find.username && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/Auth/Login",
                                children: "ورود پنل کاربری"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                style: {
                                    background: "linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%)"
                                },
                                href: "/Auth/SignUp",
                                children: " ثبت نام "
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-menu",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        children: "خانه"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "#",
                        style: sliderDrop ? {
                            backgroundColor: "#d8e2e3"
                        } : null,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: '/uploads/black-arrow-down.png'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                style: {
                                    padding: "10px 0px"
                                },
                                onClick: ()=>setSliderDrop((prevState)=>!prevState
                                    )
                                ,
                                href: "#",
                                children: "خرید سایت "
                            }),
                            sliderDrop && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/shop-website",
                                        children: "خرید سایت فروشگاهی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/news-website",
                                        children: "خرید سایت خبری"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/company-website",
                                        children: "خرید سایت شرکتی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/Real-Estate-website",
                                        children: "خرید سایت املاک"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/personal-website",
                                        children: "خرید سایت شخصی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/medical-website",
                                        children: "خرید سایت پزشکی"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/resturant-website",
                                        children: "خرید سایت رستوران"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        style: {
                            padding: "5%",
                            marginTop: "-20px"
                        },
                        href: "/exclusive-website",
                        children: "سایت اختصاصی"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/seo",
                        children: "سئو"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/articles",
                        children: " مقالات "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/contact-us",
                        children: " تماس با ما "
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ })

};
;