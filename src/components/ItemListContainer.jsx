import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/firebase";
import ItemList from "./ItemList";
import ProgressLine from "./ProgressLine";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();

	//firebase
	useEffect(() => {
		setLoading(true);
		const products = categoryId
			? query(
				collection(database, "products"),
				where("category", "==", categoryId)
			)
			: collection(database, "products")
		getDocs(products)
			.then((result) => {
				const list = result.docs.map((product) => {
					return {
						id: product.id,
						...product.data(),
					};
				});
				setItems(list);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [categoryId]);

	return <div>{loading ? <ProgressLine /> : <ItemList items={items} />}</div>;
};

export default ItemListContainer;
