import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchCategoria } from '../mocks/mockData';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    
    useEffect(() => {
        fetchCategoria(categoryId)
            .then((res)=> {
                setItems(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [categoryId]);
    
    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer
