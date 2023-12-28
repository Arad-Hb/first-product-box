import React, { useState } from 'react'
import './App.css'
import ProductCard from './component/ProductCard.jsx'
import ProductsList from './component/ProductsList.jsx'
import Form from './component/Form.jsx'
import { v4 as uuidv4 } from 'uuid';


function App() {
const [products,setNewProduct]=useState([
  {name:"گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",fetures:"دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",URLMain:"https://dkstatics-public.digikala.com/digikala-products/ebe1b2041a76fda30ce7b8870ddfd627f5affa2a_1681800756.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",URLThumb1:"https://dkstatics-public.digikala.com/digikala-products/bc2f4c173f672612becc995782908e40c13b0ff4_1681800813.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb2:"https://dkstatics-public.digikala.com/digikala-products/1dfb34149a822bbbf77b9ca53a2d50f9af577196_1681800980.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb3:"https://dkstatics-public.digikala.com/digikala-products/7a97eca191e37e31bc7bb2a7c91b71e01e9c0c83_1681800916.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb4:"https://dkstatics-public.digikala.com/digikala-products/2cf4d6e5c3deb93fdf5d6e7ae0268c4d1d17c9fc_1681800897.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",price:47900000 ,ID: 1},
  {name:"گوشی موبایل شیائومی مدل Redmi 12",fetures:"دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت - گلوبال",URLMain:"https://dkstatics-public.digikala.com/digikala-products/58310e6f1f7829712ac07237cf5eddbcc24b6288_1688899344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",URLThumb1:"https://dkstatics-public.digikala.com/digikala-products/fbd9bd1b128895ed2a48cf60b07282287c904f35_1688899344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb2:"https://dkstatics-public.digikala.com/digikala-products/55bc4c2262f65d92e422e09c09531d11b971ef36_1688899344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb3:"https://dkstatics-public.digikala.com/digikala-products/ef083ad4a79f9f76dd097e0b4cf78570a7ad1a3f_1688899344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb4:"https://dkstatics-public.digikala.com/digikala-products/70d417c7e0d93b36206af4f29f8ce28c505320ce_1688899344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",price:8000000 ,ID: 2},
  {name:"گوشی موبایل اپل مدل iPhone 13 Pro Max A2644",fetures:"دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت - نات اکتیو",URLMain:"https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",URLThumb1:"https://dkstatics-public.digikala.com/digikala-products/5c5815048548dffd2c2deb3164eba5005585bb85_1687871237.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb2:"https://dkstatics-public.digikala.com/digikala-products/522afa55bf93a879230450234efb623b1047cc61_1649056480.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb3:"https://dkstatics-public.digikala.com/digikala-products/195bd99289c288cbb927fe9b9d659275eefeae71_1631704698.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb4:"https://dkstatics-public.digikala.com/digikala-products/b44e088cd1234021a0c7b434f99c806e438de907_1688802193.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",price:104000000 ,ID: 3},
  {name:"گوشی موبایل موتورولا مدل Moto G13",fetures:"دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",URLMain:"https://dkstatics-public.digikala.com/digikala-products/2604f4fd2e2c8b8bcb9207779a6f1a688cd4f3dd_1691396839.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",URLThumb1:"https://dkstatics-public.digikala.com/digikala-products/64e3071680659240611aacd2d8129b44fccf0aa4_1691396840.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb2:"https://dkstatics-public.digikala.com/digikala-products/7afbc963cdb9d64a7ba83c1b4b3b3ef4b37d31e1_1691396846.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb3:"https://dkstatics-public.digikala.com/digikala-products/9e626bfd4dbbd44d127c8d9c65b0f4b3cdd31b3f_1691396846.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb4:"https://dkstatics-public.digikala.com/digikala-products/d696afde8af3ed793476397e366df369b4781109_1691396935.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",price:4997000 ,ID: 4},

])
const [currentItem,setCurrentItem]=useState({name:"گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",fetures:"دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",URLMain:"https://dkstatics-public.digikala.com/digikala-products/ebe1b2041a76fda30ce7b8870ddfd627f5affa2a_1681800756.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",URLThumb1:"https://dkstatics-public.digikala.com/digikala-products/bc2f4c173f672612becc995782908e40c13b0ff4_1681800813.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb2:"https://dkstatics-public.digikala.com/digikala-products/1dfb34149a822bbbf77b9ca53a2d50f9af577196_1681800980.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb3:"https://dkstatics-public.digikala.com/digikala-products/7a97eca191e37e31bc7bb2a7c91b71e01e9c0c83_1681800916.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",URLThumb4:"https://dkstatics-public.digikala.com/digikala-products/2cf4d6e5c3deb93fdf5d6e7ae0268c4d1d17c9fc_1681800897.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",price:47900000 ,ID: 1});
const addItemToList = (item) => {
  item.ID = uuidv4();
  setNewProduct([...products, item])
}
const showItem=(ID)=>{
  products.map(item=>{
    if(item.ID==ID){
      setCurrentItem(item)
    }
  })
}
const deleteById = (ID) => {
  setNewProduct(products.filter(item => {
    return item.ID !== ID
  }))
}

  return (
    
  <div className='continer'>
    <Form add={addItemToList}/>
    <div  className='productList'>
    {products.map(item=>{
      return(<ProductsList key={item.ID} data={item} showItem={showItem}/>)
      })
    }
    </div>
    <div id='mainCard'>
      <ProductCard key={currentItem.ID} data={currentItem} deleteItem={deleteById}/>
    </div>
  </div>)
  }

export default App
