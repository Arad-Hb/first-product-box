import React, { useState } from 'react'
import styles from './Form.module.css'

const Form = (props) => {
    const add=props.add;

    const [myFormData, setMyFormData] = useState({ name: '',fetures:'', URLMain:'',URLThumb1:'',URLThumb2:'',URLThumb3:'',URLThumb4:'',price: 0 ,ID:0})

    const submitHandler=(e)=>{
        e.preventDefault();
        add(myFormData);
        setMyFormData({ name: '',fetures:'', URLMain:'',URLThumb1:'',URLThumb2:'',URLThumb3:'',URLThumb4:'',price: 0 ,ID:0})
    }
    const nameChangeHandler=(e)=>{
        setMyFormData({ ...myFormData, name: e.target.value })
    }
    const feturesChangeHandler=(e)=>{
        setMyFormData({ ...myFormData, fetures: e.target.value })
    }
    const URLMainChangeHandler=(e)=>{
        setMyFormData({ ...myFormData, URLMain: e.target.value })
    }
    
    const priceChangeHandler = (e) => {
        setMyFormData({ ...myFormData, price: e.target.value })
    }
    const URLThumb1ChangeHandler=(e)=>{
        setMyFormData({ ...myFormData, URLThumb1: e.target.value })
    }
    const URLThumb2ChangeHandler=(e)=>{
        setMyFormData({ ...myFormData, URLThumb2: e.target.value })
    }
    const URLThumb3ChangeHandler=(e)=>{
        setMyFormData({ ...myFormData, URLThumb3: e.target.value })
    }
    const URLThumb4ChangeHandler=(e)=>{
        setMyFormData({ ...myFormData, URLThumb4: e.target.value })
    }
  return (
    <div className={`${styles.f1}`}>
        <form onSubmit={submitHandler} className={`${styles.f2}`}>
            
            <table className={`${styles.f5}`}>
                <tr>
                    <td>نام محصول را وارد کنید:</td>
                    <td><input type='text' className={`${styles.f3}`} onChange={nameChangeHandler} value={myFormData.name}/></td>
                </tr>
                <tr>
                    <td>توضیحات جانبی محصول را وارد کنید:</td>
                    <td><input type='text' className={`${styles.f3}`} onChange={feturesChangeHandler} value={myFormData.fetures}/></td>
                </tr>
                <tr>
                    <td>آدرس عکس اصلی را وارد کنید:</td>
                    <td><input type='text' className={`${styles.f3}`} onChange={URLMainChangeHandler} value={myFormData.URLMain}/></td>
                </tr>
                <tr>
                    <td>آدرس عکس های جانبی را وارد کنید:</td>
                    <td><input type='text' className={`${styles.f3}`} onChange={URLThumb1ChangeHandler} value={myFormData.URLThumb1}/></td>
                </tr>
                <tr>
                    <td>آدرس عکس جانبی را وارد کنید:</td>
                    <td><input type='text' className={`${styles.f3}`} onChange={URLThumb2ChangeHandler} value={myFormData.URLThumb2}/></td>
                </tr>
                <tr>
                    <td>آدرس عکس جانبی را وارد کنید:</td>
                    <td><input type='text' className={`${styles.f3}`} onChange={URLThumb3ChangeHandler} value={myFormData.URLThumb3}/></td>
                </tr>
                <tr>
                    <td>آدرس عکس جانبی را وارد کنید:</td>
                    <td><input type='text' className={`${styles.f3}`} onChange={URLThumb4ChangeHandler} value={myFormData.URLThumb4}/></td>
                </tr>
                <tr>
                    <td>قیمت محصول را وارد کنید:</td>
                    <td><input type='number' className={`${styles.f3}`} onChange={priceChangeHandler} value={myFormData.price}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type='submit' className={`${styles.f4}`} >ثبت اطلاعات</button></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Form