"use strict";
exports.id = 2088;
exports.ids = [2088];
exports.modules = {

/***/ 6555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/send.d6060f6c.png","height":640,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEAAAAFBQUbGxtubm5nZ2dWVlZ8fHwAAAAEBATS0tL///9mZmaEGkfXAAAACnRSTlMABmt94tnK2US5Yu1KsQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUCJljYAABRiZOCMXOwwGiWLm4mBkYmFm4uLnZGJEYcCmEYqh2ACDzAO8PIwmSAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 2088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2067);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(timeago_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4612);
/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7513);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var _public_images_send_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_4__, _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_4__, _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const liveChat = ()=>{
    const { 0: openChat , 1: setOpenChat  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: allMessages , 1: setAllMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: conversation , 1: setConversation  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: username , 1: setUserName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: arrivalMessage , 1: setArrivalMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: loginLoading , 1: setLoginLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: users1 , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const { find: find1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: notification , 1: setNotification  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    let classe = [
        "chat"
    ];
    if (openChat === true) {
        classe = [
            "openChat"
        ];
    }
    const scrollToBottom = ()=>{
        var ref;
        (ref = messagesEndRef.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(scrollToBottom, [
        allMessages
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__["default"])("ws://dreamweb.runflare.run:27017");
        socket.current.on("getMessage", (data)=>{
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            });
        });
    }, []);
    const start = ()=>{
        new Audio('/mixkit-long-pop-2358.wav').play();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        arrivalMessage && conversation[0].members.includes(arrivalMessage.sender) && setAllMessages((prev)=>[
                ...prev,
                arrivalMessage
            ]
        );
    }, [
        arrivalMessage,
        conversation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        socket.current.emit("addUser", conversation && conversation.length > 0 && conversation[0].members[0]);
        socket.current.on("getUsers", (users)=>{
            const findUser = users.find((res)=>res.userId === "Admin-hrttrhthr%00"
            );
            if (findUser !== undefined && findUser) {
                setUsers(findUser);
            }
        });
    }, [
        conversation
    ]);
    const getconversation = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://dreamweb.runflare.run/conversation", {
            withCredentials: true
        }).then((res)=>{
            if (!res.data.errMessage) {
                if (!loginLoading && res.data.length === 0) {
                    axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://dreamweb.runflare.run/conversation/logout", {
                        withCredentials: true
                    });
                    setConversation(null);
                }
                if (res.data.length > 0) {
                    setConversation(res.data);
                }
            }
        });
    };
    const getMessages = async ()=>{
        if (conversation) {
            await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://dreamweb.runflare.run/message/`, {
                withCredentials: true
            }).then((res)=>{
                setAllMessages(res.data);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getconversation();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (arrivalMessage) {
            start();
        }
    }, [
        arrivalMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getMessages();
    }, [
        conversation
    ]);
    const startChat = async (emai, usernam)=>{
        setLoginLoading(true);
        const post = {
            email: emai,
            username: usernam
        };
        const send1 = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://dreamweb.runflare.run/conversation/", post, {
            withCredentials: true
        });
        if (send1.data.errMessage) {
            setLoginLoading(false);
            alert(send1.data.errMessage);
        }
        if (!send1.data.errMessage) {
            await getconversation();
            await getMessages();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        if (find1.username) {
            await startChat(find1.email, find1.username);
        }
    }, [
        find1
    ]);
    const sendMessage = async (e)=>{
        e.preventDefault();
        if (conversation && conversation.length > 0) {
            const con = conversation && conversation[0].members[0];
            const post = {
                conversationId: con,
                sender: con,
                text: message
            };
            if (message.length > 0) {
                socket.current.emit("sendMessage", {
                    senderId: conversation && conversation[0].members[0],
                    receiverId: "Admin-hrttrhthr%00",
                    text: message
                });
            }
            setMessage("");
            if (message.length > 0) {
                await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://dreamweb.runflare.run/message/`, post, {
                    withCredentials: true
                }).then((res)=>{
                    setAllMessages([
                        ...allMessages,
                        res.data
                    ]);
                });
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const exist = localStorage.getItem("message");
        if (!exist) {
            localStorage.setItem("message", false);
        }
        if (arrivalMessage) {
            localStorage.setItem("message", true);
        }
    }, [
        arrivalMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const find = localStorage.getItem("message");
        setNotification(find);
    }, [
        arrivalMessage
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classe,
        children: [
            openChat === false && notification === "true" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "open-label",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "label-image",
                        onClick: ()=>setOpenChat(false)
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            style: {
                                width: "25px",
                                height: "25px",
                                left: "-25px"
                            },
                            onClick: ()=>setOpenChat(false)
                            ,
                            src: "/uploads/cancel.png",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "agent-profile",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/uploads/agent.png",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: 'flex',
                            flexFlow: "column",
                            justifyContent: "center",
                            fontSize: "13px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginBottom: "-5%",
                                    fontSize: "15px"
                                },
                                children: " پشتیبانی سایت"
                            }),
                            users1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "پاسخگوی سوالات شما هستیم."
                            }),
                            !users1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    fontSize: "11px",
                                    color: "red"
                                },
                                children: "متاسفانه در حال حاضر قادر به پاسخگویی نیستیم !"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chat-room",
                children: [
                    conversation && conversation.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: !conversation ? {
                            display: "none"
                        } : null,
                        children: [
                            conversation && allMessages && allMessages.length > 0 && allMessages.map((res)=>{
                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: res.sender !== res.conversationId ? {
                                        alignItems: "flex-end"
                                    } : null,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: res.sender !== res.conversationId ? {
                                                backgroundColor: "#78e6f3"
                                            } : null,
                                            children: res.text
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_3__.format)(res.createdAt)
                                        })
                                    ]
                                }, res._id));
                            }),
                            conversation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: messagesEndRef
                            })
                        ]
                    }),
                    conversation && conversation.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "chat-signUp",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "لطفا نام و ایمیل خود را وارد کنید"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "نام",
                                onChange: (e)=>setUserName(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "ایمیل",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                disabled: loginLoading,
                                onClick: ()=>startChat(email, username)
                                ,
                                children: [
                                    "شروع گفتگو",
                                    loginLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: "25px",
                                            height: "25px",
                                            position: "absolute",
                                            borderRight: "4px solid #355c7d"
                                        },
                                        className: "loading-spinner"
                                    }),
                                    " "
                                ]
                            })
                        ]
                    }),
                    !conversation && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        style: conversation ? {
                            display: "none"
                        } : null,
                        className: "chat-signUp",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: "لطفا نام و ایمیل خود را وارد کنید"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "نام",
                                onChange: (e)=>setUserName(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "ایمیل",
                                onChange: (e)=>setEmail(e.target.value)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                disabled: loginLoading,
                                onClick: ()=>startChat(email, username)
                                ,
                                children: [
                                    "شروع گفتگو",
                                    loginLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            width: "25px",
                                            height: "25px",
                                            position: "absolute",
                                            borderRight: "4px solid #355c7d"
                                        },
                                        className: "loading-spinner"
                                    }),
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            }),
            openChat === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "chat-input",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: message,
                        onChange: (e)=>setMessage(e.target.value)
                        ,
                        placeholder: "پیامی بنویسید ..."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: conversation && sendMessage,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            width: 27,
                            height: 25,
                            src: _public_images_send_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                            alt: "send.png"
                        })
                    })
                ]
            }),
            openChat === false && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>{
                    setOpenChat(true);
                    localStorage.setItem("message", false);
                    setNotification(localStorage.getItem("message"));
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/uploads/live-chat.png",
                    alt: "live-chat.image"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (liveChat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;