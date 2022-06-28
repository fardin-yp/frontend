import Navbar from "../../components/navbar/navbar";
import Footer from '../../components/footer/footer';
import LiveChat from '../../components/liveChat/liveChat';
import NoPost from '../../components/NoPost/NoPost';
import Head from 'next/head';

export async function getStaticProps() {

  const loggedIn = await fetch("http://dreamweb.runflare.run/allRoutes/shop");
  const logged = await loggedIn.json();

  const resSeo = await fetch('http://dreamweb.runflare.run/allRoutes/Seo/shop');
  const jsonSeo = await resSeo.json();

  return {
     props: {
       posts:logged,
       jsonSeo
      },
      revalidate:1
  }
}

const index = ({posts ,jsonSeo}) => {
  
  
    const paying = async (e) => {
       e.preventDefault()
      const Post = {amount:parseInt(post.price) , description:post.name ,callback_url:"http://localhost:3000/buyComplete/",merchant_id:"d164f627-0400-4dc5-8da5-bc166ee30553"}
       await axios.post(`https://sandbox.zarinpal.com/pg/v4/payment/request.json/pay` ,Post ,{withCredentials:true}).then(res => {
         console.log(res.data)
       })
    }

    return (
        <div className="layout">
<Head>
   <link rel="icon" href="/art.png" />
    <title>{jsonSeo && jsonSeo[0].title}</title>
    <meta name="description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="keywords" content={jsonSeo && jsonSeo[0].keywords} />
    <meta property="og:site_name" content="دریم وب"/>
    <meta property="og:title" content={jsonSeo && jsonSeo[0].title} />
    <meta property="og:description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={jsonSeo && jsonSeo[0].ogUrl} />
    <meta name="og:type" content={jsonSeo && jsonSeo[0].ogType}/>
    <meta property="og:locale" content="Fa_IR" /> 
  </Head>
          <LiveChat />
            <Navbar  />
            <div className="route">
              <h1>وبسایت های فروشگاهی</h1>
            </div>
            {posts.findPost.length === 0 && <NoPost name={"فروشگاهی"} background={"linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%)"} />}
              <div className="shop">
                <div className="shop-con" >
                  {posts && posts.findPost.map(res => {
                  return <a onClick={paying} key={res._id}>
                    <img src={`/uploads/${res.image}`} alt={res.image} />
                    <h1> {res.name}</h1>
                    <p style={{fontSize:"17px"}}>قیمت {res.price} تومان</p>
                   </a>
                  })}
                </div>
              </div>
            <Footer />
        </div>
    )
}

export default index
