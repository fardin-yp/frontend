"use strict";
exports.id = 5975;
exports.ids = [5975];
exports.modules = {

/***/ 7089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cancel (1).4d362383.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEXiTUznbGzbRUTZQ0LWREP52tr2xMRMaXHhTEvgR0YAwLdjAAAACXRSTlP8/rUq9v74APHtnc+LAAAACXBIWXMAAA+SAAAPkgEEqH6gAAAANElEQVQImUWLQQ4AIAzCGEwH//+wJh68NWmLEW1qICOBBWJXbRBOrVXpD0+FL04LI3bf/QAolAEfnj5/lgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 6555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/send.d6060f6c.png","height":640,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEAAAAFBQUbGxtubm5nZ2dWVlZ8fHwAAAAEBATS0tL///9mZmaEGkfXAAAACnRSTlMABmt94tnK2US5Yu1KsQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUCJljYAABRiZOCMXOwwGiWLm4mBkYmFm4uLnZGJEYcCmEYqh2ACDzAO8PIwmSAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 5975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2067);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(timeago_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_cancel_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7089);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var _public_images_send_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6555);







const chat = ({ allMessages , message , sendMessage , setMessage , setActiveChat , activeChat , onlineUsers , arrivalMessage  })=>{
    const { 0: conversation , 1: setConversation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: openChat , 1: setOpenChat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: messages , 1: setMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: conversationId , 1: setConversationId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: deletee , 1: setDeletee  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: seen , 1: setSeen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return ()=>window.removeEventListener('resize', updateSize)
        ;
    }, []);
    let mobile = false;
    if (size < 800) {
        mobile = true;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getconversation = async ()=>{
            await axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://dreamweb.runflare.run/conversation/Admin", {
                withCredentials: true
            }).then((res)=>{
                setConversation(res.data);
            });
        };
        getconversation();
    }, []);
    const user = onlineUsers && onlineUsers.find((res)=>res.userId === activeChat
    ) || null;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const mess = [
            ...allMessages
        ];
        const filter = mess.filter((res)=>res.conversationId === activeChat
        );
        setMessages(filter);
    }, [
        activeChat
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (arrivalMessage) {
            const mess = [
                ...allMessages
            ];
            const filter = mess.filter((res)=>res.conversationId === activeChat
            );
            if (arrivalMessage.sender === activeChat) {
                filter.push(arrivalMessage);
                setMessages(filter);
            }
        }
    }, [
        arrivalMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const find = conversation && conversation.find((res)=>res.members[0] === arrivalMessage.sender
        );
        if (!find || find.length === 0) {
            arrivalMessage && setConversation([
                {
                    _id: "edrfgfd",
                    members: [
                        arrivalMessage.sender,
                        "Admin-hrttrhthr%00"
                    ]
                },
                ...conversation
            ]);
        }
    }, [
        arrivalMessage
    ]);
    const scrollToBottom = ()=>{
        var ref;
        (ref = messagesEndRef.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({
            behavior: "smooth"
        });
    };
    const deleteChat = async ()=>{
        const post = {
            conversationId: id,
            messages: conversationId
        };
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://dreamweb.runflare.run/adminRoute/deleteChat", post, {
                withCredentials: true
            }).then((res1)=>{
                alert(res1.data);
                setDeletee(false);
                setSeen(seen.filter((res)=>res.chat !== conversationId
                ));
                localStorage.setItem("seen", JSON.stringify(seen));
                setConversation(conversation.filter((res)=>res._id !== id
                ));
            });
        } catch (err) {
            setDeletee(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(scrollToBottom, [
        messages
    ]);
    const addSeen = async (members)=>{
        const find = seen.find((res)=>res.chat === members
        );
        if (find) {
            setSeen(seen.map((x)=>{
                if (x.chat !== members) return x;
                return {
                    ...x,
                    seen: allMessages.filter((be)=>be.conversationId === members
                    ).length
                };
            }));
            localStorage.setItem("seen", JSON.stringify(seen));
        }
        if (!find) {
            setSeen([
                ...seen,
                {
                    chat: members,
                    seen: allMessages.filter((be)=>be.conversationId === members
                    ).length
                }
            ]);
            localStorage.setItem("seen", JSON.stringify(seen));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const seeens = localStorage.getItem("seen");
        if (seeens) {
            setSeen(JSON.parse(seeens));
        }
    }, []);
    const value = (val)=>{
        const find = seen.find((res)=>res.chat === val
        );
        if (find) {
            return allMessages.filter((be)=>be.conversationId === val
            ).length - find.seen;
        }
        if (!find) {
            return allMessages.filter((be)=>be.conversationId === val
            ).length;
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Admin-Chat",
        style: mobile ? {
            flexFlow: "column"
        } : null,
        children: [
            deletee && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setDeletee(null)
                ,
                id: "backDrop",
                children: "hello"
            }),
            deletee && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "secc-comment",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: '/uploads/warning.png',
                        alt: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "آیا این گفتگو حذف شود ؟"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        style: {
                            background: "#fe1919"
                        },
                        onClick: deleteChat,
                        children: " حذف گفتگو"
                    })
                ]
            }),
            mobile !== true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "allConversations",
                        children: [
                            !conversation.errMessage && conversation && conversation.map((res)=>{
                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: activeChat === res.members[0] ? {
                                        background: "silver",
                                        color: "White"
                                    } : null,
                                    onClick: ()=>{
                                        setActiveChat(res.members[0]);
                                        addSeen(res.members[0]);
                                        setId(res._id);
                                    },
                                    children: [
                                        onlineUsers && onlineUsers.find((ress)=>ress.userId === res.members[0]
                                        ) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {}) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            style: {
                                                background: "red"
                                            }
                                        }),
                                        !seen.find((ress)=>ress.chat === res.members[0]
                                        ) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: "New"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/uploads/user.png"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: res.members[0] && res.members[0].length > 22 ? ` ${res.members[0].substring(0, 18)}...` : `${res.members[0]}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            children: value(res.members[0])
                                        })
                                    ]
                                }, res._id));
                            }),
                            conversation && conversation.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    flexFlow: "column",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        style: {
                                            width: "100%",
                                            textAlign: "center"
                                        },
                                        children: " ! No Chat Yet "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        width: 100,
                                        height: 100,
                                        src: "/images/noChat.png",
                                        alt: "no-chat"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            background: "silver",
                            borderRadius: "10px"
                        },
                        className: "A-messages",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    position: "relative"
                                },
                                className: "A-profile",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/user.png"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexFlow: "column",
                                            justifyContent: "space-evenly",
                                            height: "10%"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    fontWeight: "600"
                                                },
                                                children: activeChat && activeChat || "User"
                                            }),
                                            activeChat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: user ? {
                                                    color: "green",
                                                    marginTop: "-20px"
                                                } : {
                                                    color: "red",
                                                    marginTop: "-20px"
                                                },
                                                children: user ? "online" : "offline"
                                            })
                                        ]
                                    }),
                                    activeChat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>{
                                            setDeletee(true);
                                            setConversationId(activeChat);
                                        },
                                        style: {
                                            position: "absolute",
                                            left: "5%",
                                            bottom: "26%",
                                            fontWeight: "600",
                                            background: "red",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "10px",
                                            padding: "10px"
                                        },
                                        children: "Delete Chat"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "chat-room",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        activeChat && allMessages && messages && messages.map((res)=>{
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: res && res.sender !== "Admin-hrttrhthr%00" ? {
                                                    alignItems: "flex-end"
                                                } : null,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: res && res.sender !== "Admin-hrttrhthr%00" ? {
                                                            backgroundColor: "#78e6f3"
                                                        } : null,
                                                        children: res && res.text
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_3__.format)(res && res.createdAt)
                                                    })
                                                ]
                                            }, res && res._id));
                                        }),
                                        !activeChat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            style: {
                                                margin: "30% auto",
                                                zIndex: "1"
                                            },
                                            children: "!Welcome to LiveChat"
                                        }),
                                        conversation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: messagesEndRef
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                style: {
                                    marginTop: "-2px",
                                    borderRadius: "10px"
                                },
                                className: "A-input",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value)
                                        ,
                                        placeholder: "پیام را وارد کنید..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: sendMessage,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            width: 30,
                                            height: 30,
                                            src: _public_images_send_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                            alt: "send.png"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    " "
                ]
            }),
            mobile === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    activeChat && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            background: "silver",
                            borderRadius: "10px",
                            width: "100%"
                        },
                        className: "A-messages",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "A-profile",
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/uploads/user.png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/send.png",
                                        onClick: ()=>setActiveChat(null)
                                        ,
                                        style: {
                                            position: "absolute",
                                            cursor: "pointer",
                                            left: "0px",
                                            top: "0px",
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "0px"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            flexFlow: "column",
                                            justifyContent: "space-evenly",
                                            height: "10%"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    fontWeight: "600"
                                                },
                                                children: activeChat && activeChat || "User"
                                            }),
                                            activeChat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: user ? {
                                                    color: "green",
                                                    marginTop: "-20px"
                                                } : {
                                                    color: "red",
                                                    marginTop: "-20px"
                                                },
                                                children: user ? "online" : "offline"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        style: {
                                            background: "#fe1919",
                                            position: "absolute",
                                            left: "1%",
                                            padding: "5px",
                                            bottom: "2%",
                                            borderRadius: "10px",
                                            color: "white",
                                            border: "none"
                                        },
                                        onClick: ()=>{
                                            setDeletee(true);
                                            setConversationId(activeChat);
                                        },
                                        children: " Delete "
                                    })
                                ]
                            }),
                            activeChat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "chat-room",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        activeChat && allMessages && messages && messages.map((res)=>{
                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: res && res.sender !== "Admin-hrttrhthr%00" ? {
                                                    alignItems: "flex-end"
                                                } : null,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: res && res.sender !== "Admin-hrttrhthr%00" ? {
                                                            backgroundColor: "#78e6f3"
                                                        } : null,
                                                        children: res && res.text
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: (0,timeago_js__WEBPACK_IMPORTED_MODULE_3__.format)(res && res.createdAt)
                                                    })
                                                ]
                                            }, res && res._id));
                                        }),
                                        !activeChat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            style: {
                                                margin: "30% auto",
                                                zIndex: "1"
                                            },
                                            children: "!Welcome to LiveChat"
                                        }),
                                        conversation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: messagesEndRef
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                style: {
                                    marginTop: "-2px",
                                    borderRadius: "10px"
                                },
                                className: "A-input",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value)
                                        ,
                                        placeholder: "پیام را وارد کنید..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: sendMessage,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            width: 30,
                                            height: 30,
                                            src: _public_images_send_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                            alt: "send.png"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !activeChat && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "100%"
                        },
                        className: "allConversations",
                        children: [
                            !conversation.errMessage && conversation && conversation.map((res)=>{
                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: activeChat === res.members[0] ? {
                                        background: "silver",
                                        color: "White"
                                    } : null,
                                    onClick: ()=>{
                                        setActiveChat(res.members[0]);
                                        addSeen(res.members[0]);
                                        setId(res._id);
                                    },
                                    children: [
                                        onlineUsers && onlineUsers.find((ress)=>ress.userId === res.members[0]
                                        ) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {}) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            style: {
                                                background: "red"
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/uploads/user.png"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: res.members[0].length > 24 ? `${res.members[0].substring(0, 24)}...` : `${res.members[0]}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            style: {
                                                margin: "10px"
                                            },
                                            children: value(res.members[0])
                                        })
                                    ]
                                }, res._id));
                            }),
                            conversation && conversation.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    flexFlow: "column",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        style: {
                                            width: "100%",
                                            textAlign: "center"
                                        },
                                        children: " ! Sorry No Chat Yet "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        width: 150,
                                        height: 150,
                                        src: "/images/noChat.png",
                                        alt: "no-chat"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chat);


/***/ })

};
;