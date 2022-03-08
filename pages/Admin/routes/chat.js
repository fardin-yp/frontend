import React,{useState, useEffect ,useRef} from 'react';
import axios from'axios';
import {format} from "timeago.js";
import close from '../images/cancel (1).png';
import Image from 'next/image';
import send from '../../../public/images/send.png'

const chat = ({allMessages ,message ,sendMessage ,setMessage ,setActiveChat ,activeChat ,onlineUsers ,arrivalMessage }) => {

    const [conversation ,setConversation] = useState([]);
    const messagesEndRef = useRef(null);
    const [openChat ,setOpenChat] = useState(false);
    const [size, setSize] = useState(0);
    const [messages ,setMessages] = useState([]);
    const [id ,setId] = useState("");
    const [conversationId ,setConversationId] = useState("");
    const [deletee ,setDeletee] = useState(false);
    const [ seen , setSeen ] = useState([])
  
    useEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    },[])
  
let mobile = false
    if( size < 800 ){
        mobile = true   
}

    useEffect(() => {
        const getconversation = async () => {
       await axios.get("http://dreamweb.runflare.run/conversation/Admin",{withCredentials:true}).then(res => {
            setConversation(res.data)
     })
    };
    getconversation()
    },[]);

const user = onlineUsers && onlineUsers.find(res => res.userId === activeChat) || null ;

useEffect(() => {
    const mess = [...allMessages]
    const filter = mess.filter(res => res.conversationId === activeChat)
    setMessages( filter )
},[activeChat])

useEffect(() => {
    if(arrivalMessage){
    const mess = [...allMessages]
    const filter = mess.filter(res => res.conversationId === activeChat);
    if(arrivalMessage.sender === activeChat){
    filter.push(arrivalMessage)
    setMessages( filter )
    }
}
},[arrivalMessage]);

useEffect(() => {
    const find = conversation && conversation.find(res => res.members[0] === arrivalMessage.sender);
    if(!find || find.length === 0) {
       arrivalMessage && setConversation([{_id:"edrfgfd" , members:[arrivalMessage.sender , "Admin-hrttrhthr%00"] } ,...conversation ])
    }
} ,[arrivalMessage])

const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const deleteChat = async () => {
      const post = {conversationId:id ,messages:conversationId}
    try{
    await axios.post("http://dreamweb.runflare.run/adminRoute/deleteChat" ,post ,{withCredentials:true}).then(res => {
        alert(res.data);
        setDeletee(false);
        setSeen(seen.filter(res => res.chat !== conversationId));
        localStorage.setItem("seen" ,JSON.stringify(seen));
        setConversation(conversation.filter(res => res._id !== id))
    })
    }catch(err){
        setDeletee(false)
    }
  }

useEffect(scrollToBottom, [messages]);

const addSeen = async (members) => {
    const find = seen.find(res => res.chat === members);
    if(find) {
        setSeen(seen.map(x => {
            if(x.chat !== members) return x
            return {...x, seen:allMessages.filter(be => be.conversationId === members).length}
       }))
       localStorage.setItem("seen" , JSON.stringify(seen))
    } 
    if(!find) {
    setSeen([...seen , {chat:members ,seen:allMessages.filter(be => be.conversationId === members).length}]);
    localStorage.setItem("seen" , JSON.stringify(seen))
    }
}
useEffect(() => {
    const seeens = localStorage.getItem("seen")

    if(seeens){
      setSeen(JSON.parse(seeens))
    }
},[]);

const value = (val) => {

   const find = seen.find(res => res.chat === val)
   if(find){
   return allMessages.filter(be => be.conversationId === val).length - find.seen;
   }
   if(!find){
    return allMessages.filter(be => be.conversationId === val).length;
   }
}

    return (
        <div className="Admin-Chat"  style={mobile ? {flexFlow:"column"}:null}>
          {deletee && <div onClick={() => setDeletee(null)} id="backDrop">hello</div>}
             {deletee &&
            <div className="secc-comment">
                <img src={'/uploads/warning.png'} alt="" />
                <h1>آیا این گفتگو حذف شود ؟</h1>
                <button style={{background:"#fe1919"}} onClick={deleteChat}> حذف گفتگو</button>
            </div>}
             {/* when mobile mode is false */}
             {mobile !== true && <> 
             <div className="allConversations">
              {!conversation.errMessage && conversation && conversation.map(res => {
            return <div 
            style={activeChat === res.members[0] ? {background:"silver" ,color:"White"} :null } 
            onClick={() => {
                setActiveChat(res.members[0]) 
                addSeen(res.members[0])
                setId(res._id)
                }} key={res._id}>
            {onlineUsers && onlineUsers.find(ress => ress.userId === res.members[0]) && <label /> || <label style={{background:"red"}} /> }
            {!seen.find(ress => ress.chat === res.members[0]) && <b>New</b>}
            <div>
                <img src={"/uploads/user.png"} />
                <p >{res.members[0] && res.members[0].length > 22 ? ` ${res.members[0].substring(0, 18)}...` : `${res.members[0]}`}</p>
                </div>
            {<circle>{value(res.members[0])}</circle> }
            </div>
        })}
        {conversation && conversation.length === 0 && <p style={{width:"100%",display:"flex",flexFlow:"column" ,alignItems:"center"}}>
            <h1 style={{width:"100%",textAlign:"center"}}> ! No Chat Yet </h1>
            <Image width={100} height={100} src={"/images/noChat.png"} alt="no-chat" />
            </p>}
            </div>
            <div style={{background:"silver" ,borderRadius:"10px"}} className="A-messages">
                <div style={{position:"relative"}} className="A-profile">
                <img src={"/uploads/user.png"} />
            <div style={{display:"flex",flexFlow:"column",justifyContent:"space-evenly",height:"10%"}} >
                <p style={{fontWeight:"600"}}>{activeChat && activeChat || "User"}</p>
                {activeChat && <p style={user ? {color:"green",marginTop:"-20px"}:{color:"red",marginTop:"-20px"}}>{user ? "online" :"offline"}</p>}
            </div>
{activeChat && 
        <button onClick={() => {
            setDeletee(true)
            setConversationId(activeChat)
        }
     } style={{position:"absolute" ,left:"5%",bottom:"26%",fontWeight:"600",background:"red" ,color:"white",border:"none",borderRadius:"10px",padding:"10px"}}>Delete Chat</button>}
    </div>
                <div className="chat-room" >
            <div >
            {activeChat && allMessages && messages && messages.map(res => {
            return <div style={res && res.sender !== "Admin-hrttrhthr%00" ?{alignItems:"flex-end"} : null} key={res && res._id}>
                    <p style={res && res.sender !== "Admin-hrttrhthr%00" ?{backgroundColor:"#78e6f3"} : null}>{res && res.text}</p>
                <label>{format(res && res.createdAt)}</label>
            </div>
            })}
            {!activeChat && <h1 style={{margin:"30% auto",zIndex:"1"}}>!Welcome to LiveChat</h1>}
            {conversation && <div ref={messagesEndRef} />}
            </div>

        </div>
            <form style={{marginTop:"-2px",borderRadius:"10px"}} className="A-input">
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="پیام را وارد کنید..." /> 
            <button onClick={sendMessage}><Image width={30} height={30} src={send} alt="send.png" /></button>
        </form>

        </div> </>}
        {/* when mobile mode is true */}
        {mobile === true && <> 
            
          {activeChat && <div style={{background:"silver" ,borderRadius:"10px",width:"100%"}} className="A-messages">
                <div className="A-profile" style={{position:"relative"}}>
                <img src={"/uploads/user.png"} />
                <img src="/images/send.png" onClick={() => setActiveChat(null)} style={{position:"absolute" ,cursor:"pointer" ,left:"0px" ,top:"0px",width:"28px",height:"28px" ,borderRadius:"0px"}}/>   
            <div style={{display:"flex",flexFlow:"column",justifyContent:"space-evenly",height:"10%"}} >
                <p style={{fontWeight:"600"}}>{activeChat && activeChat || "User"}</p>
                {activeChat && <p style={user ? {color:"green",marginTop:"-20px"}:{color:"red",marginTop:"-20px"}}>{user ? "online" :"offline"}</p>}
            </div>
            <button style={{background:"#fe1919", position:"absolute" ,left:"1%" ,padding:"5px" ,bottom:"2%",borderRadius:"10px" ,color:"white",border:"none"}} 
         onClick={() => {
                setDeletee(true)
                setConversationId(activeChat)
            }}> Delete </button>
                </div>
                
             {activeChat && <div className="chat-room" >
            <div >
            {activeChat && allMessages && messages && messages.map(res => {
            return <div style={res && res.sender !== "Admin-hrttrhthr%00" ?{alignItems:"flex-end"} : null} key={res && res._id}>
                    <p style={res && res.sender !== "Admin-hrttrhthr%00" ?{backgroundColor:"#78e6f3"} : null}>{res && res.text}</p>
                <label>{format(res && res.createdAt)}</label>
            </div>
            })}
            {!activeChat && <h1 style={{margin:"30% auto",zIndex:"1"}}>!Welcome to LiveChat</h1>}
            {conversation && <div ref={messagesEndRef} />}
            </div>

        </div>
}
        <form  style={{marginTop:"-2px",borderRadius:"10px"}} className="A-input">
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="پیام را وارد کنید..." /> 
            <button onClick={sendMessage}><Image width={30} height={30} src={send} alt="send.png" /></button>
        </form>

        </div>
        }
{!activeChat && <div style={{width:"100%"}} className="allConversations">
              {!conversation.errMessage && conversation && conversation.map(res => {
            return <div 
            style={activeChat === res.members[0] ? {background:"silver" ,color:"White"} :null } 
            onClick={() => {
                setActiveChat(res.members[0]) 
                addSeen(res.members[0])
                setId(res._id)
                }} key={res._id}>
      {onlineUsers && onlineUsers.find(ress => ress.userId === res.members[0]) && <label /> || <label style={{background:"red"}} /> }
            <div>
                <img src={"/uploads/user.png"} />
                <p >{res.members[0].length > 24 ? `${res.members[0].substring(0, 24)}...` : `${res.members[0]}`}</p>
                </div>
                {<circle style={{margin:"10px"}}>{value(res.members[0])}</circle> }
            </div>
        })}
            {conversation && conversation.length === 0 && <p style={{width:"100%",display:"flex",flexFlow:"column" ,height:"100%",justifyContent:"center" ,alignItems:"center"}}>
            <h1 style={{width:"100%",textAlign:"center"}}> ! Sorry No Chat Yet </h1>
            <Image width={150} height={150} src={"/images/noChat.png"} alt="no-chat" />
            </p>}
    </div>}
</>}
  
    </div>

    )
}

export default chat;
