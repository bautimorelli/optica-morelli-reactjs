import React, { useEffect, useState } from 'react'
import { data } from '../mocks/mockData'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()
    
    useEffect(() => {
        data
        .then((res)=> {
            if (categoryId) {
                setItems(res.filter((item)=> item.category === categoryId))
            } else {
                setItems(res)
            }
        })
    }, [categoryId])
    
    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer
