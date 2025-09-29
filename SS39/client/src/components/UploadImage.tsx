import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../store/slices/ProductSlice';
export default function UploadImage() {
    const [image, setImage] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const result = useSelector((state) => {
        console.log(222, state);
        return state.products.products
        
    })
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getAllProduct());
    },[])
    const handleChange = (e:any) => {
        console.log("gia tri e: ", e.target.files[0]);
        setImage(e.target.files[0])
    }
    const saveImage = async () => {
        if (image == "") return;
        console.log("111", import.meta.env.VITE_PROJECT_NAME);
         console.log("222", import.meta.env.VITE_CLOUDINARYNAME);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", import.meta.env.VITE_PROJECT_NAME);//ten du an
        formData.append("cloud_name", import.meta.env.VITE_CLOUDINARYNAM);//ten cloud name
        try {
            const reponse = await axios.post("https://api.cloudinary.com/v1_1/drx0kx5t5/image/upload", formData)
           
            setUrl(reponse.data.url)
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
          <h1>up load anh len tren cloudinary</h1>
          <input type="file" onChange={handleChange} />
          <button onClick={saveImage}>Luu</button>
          <h1>Dua hau dac biet thom ngon moi ban an nha</h1>
          <img src={url} alt="" /> <br />
          <button>them san pham</button>
          <input type="text" placeholder='nhap ten san pham' />
          <h1>Danh sach san pham</h1>
          <table border={1}>
              <thead>
                  <tr>
                      <th>STT</th>
                      <th>Ten San Pham</th>
                      <th>Anh</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      {result.map((item:any,index) => {
                          return <>
                              <td >{index + 1}</td>
                              <td>{item.name}</td>
                              <td><img src={item.image} alt="" /></td>
                            </>
                          ;
                      })}
                  </tr>
              </tbody>
          </table>
    </div>
  )
}
