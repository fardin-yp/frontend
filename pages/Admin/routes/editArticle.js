import {useState ,useEffect} from 'react';
import axios from 'axios';
import Edit from '../editor/edit';
import Loading from '../images/loadingshop.gif';
import Image from 'next/image';


const editAricle = () => {
    const [title ,setTitle] = useState('');
    const [des ,setDes] = useState([]);
    const [image ,setImage] = useState('');
    const [info ,setInfo] = useState("");
    const [loading ,setLoading] = useState(false);
    const [articles ,setArticles] = useState([]);
    const [filter ,setFilter] = useState('');
    const [edit ,setEdit] = useState(false);
    const [id, setId] = useState(false);
    const [deleteProduct , setDeleteProduct] = useState(null)

   const postHandler = async (e) =>{    
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
    try{      
        formData.append("title" , title);
        formData.append("image" , image);
        formData.append("id" , id);
        formData.append("info" ,info);
    
        await axios.put("http://dreamweb.runflare.run/adminRoute/ArticleUpdate" , formData ,{withCredentials:true} ).then(res => {
            if(res.data.errMessage){
                alert(res.data.errMessage)
                setErr(res.data.errMessage)
                setLoading(false)
            }
            alert(res.data.Message)
            setMessage(res.data.Message);
            setLoading(false);
            setEdit(false)
        } )

    }catch(err){
        setLoading(false);
  }    
}
const getArticles = async () => {
    await axios.get('http://dreamweb.runflare.run/allRoutes/articles',{withCredentials:true}).then(res => {
        setArticles(res.data.findPost)
    })
}

useEffect(() => {
    getArticles()
},[]);

const uploadImage = async (e) => {
    const images = e.target.files[0]
    setImage(images)
}

const deletePR = async (e) => {
    e.preventDefault();
    const post ={ image:deleteProduct.image}
    setLoading(true)
    await axios.put(`http://dreamweb.runflare.run/adminRoute/delete/articles/${deleteProduct._id} `,post ,{withCredentials:true} ).then(res => {
        alert(res.data.Message)
        setLoading(false);
        setDeleteProduct(null)
        setEdit('')
    } )
}
const sure = (e) => {
    e.preventDefault()
    setDeleteProduct(edit)
}
    return (
        <div className="products" >
           {deleteProduct && <div onClick={() => setDeleteProduct(null)} id="backDrop">hello</div>}
             {deleteProduct &&
            <div className="secc-comment">
                <img src={'/uploads/warning.png'} alt="" />
                <h1>آیا این پست حذف شود ؟</h1>
                <button style={{background:"#fe1919"}} onClick={deletePR}> حذف پست</button>
            </div>}
{!edit && <form style={{height:"100%",marginTop:"-10px"}} encType="multipart/form-data">
        <div style={{height:"max-content",width:"90%" ,background:"#3f51b5",padding:"10px" 
            ,borderRadius:"10px",color:"white"}}>ویرایش مقالات
             
            </div>
        <input style={{marginTop:"10px"}} placeholder="جستجو..." onChange={(e) => setFilter(e.target.value)} />
        {articles.length === 0 && <div style={{width:"100%" ,height:"450px" ,position:"relative",margin:"auto"}}>
                <Image src={Loading} layout={"fill"} alt="" />
            </div>}
        <div className="tableEdit-holder">
{articles.length > 0 && <table className="edit-table" > 
                <thead  >
                    <th style={{padding:"20px" ,background:"#673ab7"}}>
                        <a href="#">تصویر</a>
                    </th>
                    <th style={{padding:"20px" ,background:"#673ab7"}}>
                        <a href="#"> نام </a>
                    </th>
                    <th style={{padding:"20px" ,width:"20%" ,background:"#673ab7"}}>
                        <a href="#">دیدگاه</a>
                    </th>
                </thead>
                <tbody >
                {articles.length > 0 && articles.filter(res => {
                        return res.title.toLowerCase().includes(filter.toLocaleLowerCase())
                    }).map(res => {
                        return<tr onClick={() => {
                            setEdit(res);
                            setTitle(res.title)
                            setDes(res.des)
                            setInfo(res.info)
                            setId(res._id)
                        }} className="tr-all">

                       <td>
                           <img src={`/uploads/${res.image}`} alt="" />
                       </td>
                       <td >
                           <a>{res.title}</a>
                       </td>
                       <td >
                           <a>{res.comments.length}</a>
                       </td>
                   </tr>
                   })}
                </tbody> 
      <tfoot></tfoot>

        </table>}
                    </div>
            </form>}
            
            {edit.title && 
            <form style={{height:"100%",marginTop:"-10px"}} encType="multipart/form-data">
            <div style={{width:"90%" ,background:"#3f51b5",padding:"10px" 
            ,borderRadius:"10px",color:"white",position:"relative"}}>ویرایش مقالات
            <button disabled={loading} onClick={sure} style={{top:"-17px",padding:"10px",position:"absolute",left:"3px",fontSize:"12px",width:"max-content" ,height:"max-content",background:"red"}}>حذف مقاله</button>
            </div>
              <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <input placeholder="تصویر" type='file' filename="image" onChange={uploadImage} />
              <Edit setProperty={setInfo} data={info} />
              <button disabled={loading} onClick={postHandler}>
                    {loading && <div style={{height:"30px" ,width:"30px",top:"25%"}} className='loading-spinner'></div>}
                    تایید ویرایش
                </button>
            </form>
                }
        </div>

    )
}

export default editAricle
