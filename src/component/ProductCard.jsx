import React, { useState } from 'react'
import styles from './ProductCard.module.css'

const ProductCard = (props) => {
    const data=props.data;
    const deleteItem=props.deleteItem;
    const deleteHandler = () => {
        deleteItem(data.ID)
    }
    const[count,setNumber]=useState(0);
    const incHandler=()=>{
    setNumber(count+1)
    }
    const decHandler=()=>{
    if(count>0){
        setNumber(count-1)
        }
    }
    const totalPrice=count*data.price;
  return (
    <div className={`${styles.c1}`}>
        <div className={`${styles.p1}`}>
            <div>
                <img className={`${styles.p2}`} src={data.URLMain}/>
            </div>
            <div className={`${styles.t1}`}>
                <img src={data.URLThumb1} className={`${styles.t2}`}/>
                <img src={data.URLThumb2} className={`${styles.t2}`}/>
                <img src={data.URLThumb3} className={`${styles.t2}`}/>
                <img src={data.URLThumb4} className={`${styles.t2}`}/>
            
            </div>
        </div>
        <div className={`${styles.n1}`}>
            <div className={`${styles.n2}`}>{data.name}</div>
            <div className={`${styles.n3}`}>{data.fetures}</div>
            <div className={`${styles.r1}`}>
                <div className={`${styles.r2}`}>
                    <button type='button' onClick={incHandler} className={`${styles.r3}`}>+</button>
                    <span className={`${styles.r4}`}>{count}</span>
                    <button type='button' onClick={decHandler} className={`${styles.r3}`}>-</button>
                </div>
                <div className={`${styles.r5}`}>
                    <span>قیمت کالا:{data.price}</span>
                    <span>قیمت کل:{totalPrice}</span>
                </div>
                <button className={`${styles.r6}`} type='button' onClick={deleteHandler}>حذف آیتم</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard