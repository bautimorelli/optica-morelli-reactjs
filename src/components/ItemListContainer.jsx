import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/firebase";
import ItemList from "./ItemList";
import ProgressLine from "./ProgressLine";
import { collection, getDocs, query, where } from "firebase/firestore";
import Toast from "./Toast";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [toast, setToast] = useState(false);

	const { categoryId } = useParams();

	//firebase
	useEffect(() => {
		setLoading(true);
		const products = categoryId
			? query(
					collection(database, "products"),
					where("category", "==", categoryId)
			  )
			: collection(database, "products");
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
			.catch((error) => setToast(true))
			.finally(() => setLoading(false));
	}, [categoryId]);

	return (
		<div>
			{loading ? <ProgressLine /> : <ItemList items={items} />}
			<Toast
				text={"Error, vuelva a intentar mas tarde"}
				time={2000}
				type={"error"}
				open={toast}
				setOpen={setToast}
			/>
		</div>
	);
};

export default ItemListContainer;
