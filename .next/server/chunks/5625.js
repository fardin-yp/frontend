"use strict";
exports.id = 5625;
exports.ids = [5625];
exports.modules = {

/***/ 5625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Messages = ({ route  })=>{
    const { 0: contacts , 1: setContacts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: consaltings , 1: setConsaltings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: exclusives , 1: setExclusives  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: Delete , 1: setDelete  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: slice , 1: setSlice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const getMessages = async ()=>{
            axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://dreamweb.runflare.run/adminRoute/getMessages", {
                withCredentials: true
            }).then((res)=>{
                setContacts(res.data.Contacts);
                setConsaltings(res.data.Consaltings);
                setExclusives(res.data.Exclusives);
            });
        };
        getMessages();
    }, []);
    const deleteMessages = async ()=>{
        const post = {
            type: Delete.type,
            id: Delete._id
        };
        setLoading(true);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://dreamweb.runflare.run/adminRoute/deleteMessages", post, {
                withCredentials: true
            }).then((res)=>{
                if (res.data.Consaltings) {
                    setConsaltings(res.data.Consaltings);
                    setLoading(false);
                    setDelete(null);
                }
                if (res.data.Contacts) {
                    setContacts(res.data.Contacts);
                    setLoading(false);
                    setDelete(null);
                }
                if (res.data.Exclusives) {
                    setExclusives(res.data.Exclusives);
                    setLoading(false);
                    setDelete(null);
                }
            });
        } catch (err) {
            setLoading(false);
        }
    };
    const addSlice = ()=>{
        setSlice((prev)=>prev + 10
        );
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setSlice(10);
    }, [
        route
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "products",
        style: {
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "flex-start"
        },
        children: [
            Delete && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                style: {
                    zIndex: "151"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "آیااین پیام حذف شود؟"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        disabled: loading,
                        onClick: deleteMessages,
                        children: [
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    height: "30px",
                                    width: "30px",
                                    top: "25%"
                                },
                                className: "loading-spinner"
                            }),
                            "حذف پیام"
                        ]
                    })
                ]
            }),
            Delete && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    zIndex: "1"
                },
                onClick: ()=>setDelete(null)
                ,
                id: "backDrop",
                children: "hello"
            }),
            route === "send-exclusive" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "max-content",
                            width: "70%",
                            background: "#3f51b5",
                            padding: "10px",
                            borderRadius: "10px",
                            color: "white"
                        },
                        children: "درخواست های وبسایت اختصاصی"
                    }),
                    exclusives && exclusives.slice(0, slice).map((res)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "Admin-messages",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/cancel (1).png",
                                    onClick: ()=>setDelete({
                                            ...res,
                                            type: "exclusives"
                                        })
                                    ,
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                    children: [
                                        "پیام از  : ",
                                        res.name
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "شماره تماس : ",
                                        res.number
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        " ایمیل : ",
                                        res.email
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        " توضیحات : ",
                                        res.des
                                    ]
                                })
                            ]
                        }, res._id));
                    }),
                    exclusives && exclusives.length > slice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "white",
                            padding: "0px 15px",
                            borderRadius: "10px",
                            boxShadow: " 0px 2px 8px rgba(0,0,0,0.1) , 0px 0px 15px rgba(0,0,0,0.1)"
                        },
                        onClick: addSlice,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    width: "20px"
                                },
                                src: '/images/down-arrow.png',
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    opacity: "0.7"
                                },
                                children: "نتایج بیشتر "
                            })
                        ]
                    })
                ]
            }),
            route === "send-consulting" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "max-content",
                            width: "70%",
                            background: "#3f51b5",
                            padding: "10px",
                            borderRadius: "10px",
                            color: "white"
                        },
                        children: "درخواست های مشاوره"
                    }),
                    consaltings && consaltings.map((res)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "Admin-messages",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/cancel (1).png",
                                    onClick: ()=>setDelete({
                                            ...res,
                                            type: "consaltings"
                                        })
                                    ,
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                    children: [
                                        "پیام از  : ",
                                        res.name
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "شماره تماس : ",
                                        res.number
                                    ]
                                })
                            ]
                        }, res._id));
                    }),
                    consaltings && consaltings.length > slice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "white",
                            padding: "0px 15px",
                            borderRadius: "10px",
                            boxShadow: " 0px 2px 8px rgba(0,0,0,0.1) , 0px 0px 15px rgba(0,0,0,0.1)"
                        },
                        onClick: addSlice,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    width: "20px"
                                },
                                src: '/images/down-arrow.png',
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    opacity: "0.7"
                                },
                                children: "نتایج بیشتر "
                            })
                        ]
                    })
                ]
            }),
            route === "contact-us" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "max-content",
                            width: "70%",
                            background: "#3f51b5",
                            padding: "10px",
                            borderRadius: "10px",
                            color: "white"
                        },
                        children: "پیام های ارتباط با ما"
                    }),
                    contacts && contacts.map((res)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "Admin-messages",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/cancel (1).png",
                                    onClick: ()=>setDelete({
                                            ...res,
                                            type: "contacts"
                                        })
                                    ,
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                    children: [
                                        "پیام از  : ",
                                        res.name
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        " ایمیل : ",
                                        res.email
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        " موضوع پیام : ",
                                        res.message
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        " توضیحات : ",
                                        res.des
                                    ]
                                })
                            ]
                        }, res._id));
                    }),
                    contacts && contacts.length > slice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "white",
                            padding: "0px 15px",
                            borderRadius: "10px",
                            boxShadow: " 0px 2px 8px rgba(0,0,0,0.1) , 0px 0px 15px rgba(0,0,0,0.1)"
                        },
                        onClick: addSlice,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    width: "20px"
                                },
                                src: '/images/down-arrow.png',
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    opacity: "0.7"
                                },
                                children: "نتایج بیشتر "
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);


/***/ })

};
;