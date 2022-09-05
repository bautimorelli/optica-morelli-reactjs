import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const arrayDeItems = [
    {id: 100, title: "Aviador", brand:"Rayban", price:"15000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Aviador"},
    {id: 101, title: "Wayfarer", brand:"Rayban", price:"16000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Wayfarer"},
    {id: 102, title: "Clubmaster", brand:"Rayban", price:"17000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Clubmaster"},
    {id: 103, title: "Wayfarer", brand:"Rayban", price:"16000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Wayfarer"},
    {id: 104, title: "Clubmaster", brand:"Rayban", price:"17000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Clubmaster"},
    {id: 105, title: "Wayfarer", brand:"Rayban", price:"16000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Wayfarer"},
    {id: 106, title: "Clubmaster", brand:"Rayban", price:"17000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Clubmaster"},
    {id: 107, title: "Wayfarer", brand:"Rayban", price:"16000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Wayfarer"},
    {id: 108, title: "Clubmaster", brand:"Rayban", price:"17000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Clubmaster"}
]

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        new Promise((res) => {
            setTimeout(() => {
                res(arrayDeItems)
            }, 2000);
        }).then((res) => {
            setItems(res)
        })
    }, [])
    
    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer
