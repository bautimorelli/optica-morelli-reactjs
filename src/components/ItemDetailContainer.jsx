import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../mocks/mockData";
import ItemDetail from "./ItemDetail";
import ProgressLine from "./ProgressLine";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState();
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		fetchItem(id)
			.then((res) => {
				setItemDetail(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<div>
			{loading ? <ProgressLine /> : <ItemDetail item={itemDetail} />}
		</div>
	);
};

export default ItemDetailContainer;
