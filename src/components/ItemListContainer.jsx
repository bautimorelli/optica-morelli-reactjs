import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoria } from "../mocks/mockData";
import ItemList from "./ItemList";
import ProgressLine from "./ProgressLine";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		setItems([])
        setLoading(true)
		fetchCategoria(categoryId)
			.then((res) => {
				setItems(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	}, [categoryId]);

	return <div>{loading ? <ProgressLine /> : <ItemList items={items} />}</div>;
};

export default ItemListContainer;
