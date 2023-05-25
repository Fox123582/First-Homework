import React, {useEffect, useState} from 'react';
import WrapperForCategories from "./wrapperForCategories";
import API from "../../API";
import {nanoid} from "nanoid";
import styles from './style.module.css'

function MainPage(props) {
    let [products,setProducts] = useState([])
    let categories = []

    getCategories()
    function getCategories (){
        products.forEach(el => {
            categories.push(el.category)
        })
        categories = new Set(categories)
        categories = [...categories]

    }


    useEffect(()=>{
        API.getGoods().then(res =>setProducts(res.data))
    },[])

    return (
        <div className={styles.wrapForContent}>
            {categories.map(elem=> <WrapperForCategories products={products} styles={styles} className = {styles.wrapForCategories} elem={elem} key={nanoid()}></WrapperForCategories>)}
        </div>
    );
}

export default MainPage;