import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState()
    
    useEffect(() => {
        new Promise((res) => {
            setTimeout(() => {
                res(
                    {id: 100, title: "Aviador", brand:"Rayban",category:"Lentes de Sol", price:"15.000", pictureURL:"images/rayban-aviador.jpg", pictureAlt:"Rayban Aviador"}
                    )
            }, 2000);
        }).then((res) => {
            setItemDetail(res)
        })
    }, [])
    
    return (
        <ItemDetail item={itemDetail} />
    )
}

export default ItemDetailContainer