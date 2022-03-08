"use strict";
exports.id = 6195;
exports.ids = [6195];
exports.modules = {

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


/***/ })

};
;