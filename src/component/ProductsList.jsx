import React from 'react'
import styles from './ProductsList.module.css'


const ProductsList = (props) => {
    const data=props.data;
    const showItem=props.showItem;
    const showThisProductHandler=()=>{
      showItem(data.ID)
    }
  return (
        <div className={`${styles.l1}`}>
          <a href="#" className={`${styles.l2}`} onClick={showThisProductHandler}>
            <span className={`${styles.l3}`}>{data.name}</span>
            <img className={`${styles.l4}`} src={data.URLMain} alt={data.name}/>
          </a>
        </div>
  )
}

export default ProductsList