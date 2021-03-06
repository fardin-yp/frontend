import React,{useState ,useContext ,useRef, useEffect} from 'react';
import axios from 'axios';
import AuthContext from "../../../helpers/context/authContext";
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import Head from 'next/head';


export async function getServerSideProps(context) {


  const json = "6LfMd88dAAAAANh6pGI5JNg-q4m3gkwi8BlYKmHo" ;

  if(context.req.cookies.token){
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    }
  }

  const usersloggedIn = await fetch("http://dreamweb.runflare.run/authentication/find",{
    credentials: "include",
    headers:{
      cookie:context.req.cookies.token
    }
    
  });
 const user = await usersloggedIn.json()

  if(user.username){
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    }
  }


  return {
    props:{
      json,
    }
  };

}

const index = ({json}) => {

    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [loading , setLoading] = useState(false);
    const {getUserLoggedIn} = useContext(AuthContext);
    const [error ,setError] = useState('');
    const [seePassword ,setSeePassword] = useState(false);
    const router = useRouter();
    const reRef = useRef('');
    const [lastpage ,setLastpage] = useState(null)
 
const login = async (e) => {
     e.preventDefault();
     setLoading(true);
     setError("")
     const captcha = await reRef.current.executeAsync();
     reRef.current.reset();
     const post  = {email ,password ,captcha};
     const Apost = {email ,password}
     try{
        await axios.post('http://dreamweb.runflare.run/authentication/login' , post ,{withCredentials:true}).then(res => {
          if(res.data.errMessage){
            setError(res.data.errMessage)
            setLoading(false);
          }
            if(!res.data.errMessage){
              getUserLoggedIn();
              if(lastpage !== window.document.URL){
                window.location = lastpage
              }
              if(lastpage === window.document.URL){
                window.location = '/'
              }  
            }
        }) 
      }catch(err){
        setLoading(false)   
      }
      try{
        await axios.post('http://dreamweb.runflare.run/auth/login' , Apost ,{withCredentials:true}).then(res => {
          if(!res.data.errMessage){
            window.location = '/Admin'
          }
        })
      }catch(err){} 
   }

    useEffect(() => {
      setLastpage(window.document.referrer)
    },[])

    return (
        <div className="login">
 <Head>
   <link rel="icon" href="/art.png" />
    <title> ???????? ?????????? ????????????</title>
  </Head>
            <form >
                <h1 style={{background:"linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%)"}}>???????? ???? ?????? ????????????</h1>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="??????????" />
                <div id="password">
                <input type={seePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="?????? ???????? " /> 
                <img style={seePassword ? {opacity:"1"}:null} src={'/uploads/view.png'} onClick={() => setSeePassword(prev => !prev)} />
                </div>
                <ReCAPTCHA 
                 style={{zIndex:"30",opacity:"0"}}
                 size="invisible"
                 sitekey={json}
                 ref={reRef}
                 />
                <button onClick={login} style={{background:"linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%)"}}> ???????? {loading && <div className='loading-spinner'></div>}</button>
                <div style={{width:"72%"}} className="Auth-err">{error && <label><img style={{width:"20px" ,height:"20px"}} src="/images/warning (1).png" alt="warning" /> <p>{error}</p></label>}</div>
                <div style={{flexFlow:"column",alignItems:"flex-start",width:"70%"}}>
                  <p> ?????? ?????? ?????????? ????????<a style={{color:"cadetblue",pointerEvents:"all"}} href="/Auth/SignUp"> ?????? ??????</a> 
                  </p><p> ?????? ???????? ?????? ???? ???????????? ???????? ????????<a href="/Auth/forget-Password" style={{pointerEvents:"all",color:"cadetblue"}}> ?????????????? ?????? ????????</a></p>
                </div>
            </form>
        </div>
    )
}

export default index
