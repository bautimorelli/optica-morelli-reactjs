import React, { useEffect, useState } from "react";
import { data } from "../mocks/mockData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState();
	const { id } = useParams();

	useEffect(() => {
		data.then((res) => {
			console.log(res);
			setItemDetail(res.find((item) => item.id === parseInt(id)));
		});
	}, [id]);

	return <ItemDetail item={itemDetail} />;
};

export default ItemDetailContainer;
