import React, { useEffect, useState } from "react";
import { fetchItem } from "../mocks/mockData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetchItem(id)
			.then((res) => {
				setItemDetail(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return <ItemDetail item={itemDetail} />;
};

export default ItemDetailContainer;
