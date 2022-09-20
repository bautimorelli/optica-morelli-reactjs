import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ProgressLine from "./ProgressLine";
import { collection, doc, getDoc } from 'firebase/firestore'
import { database } from "../firebase/firebase";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState();
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const productCollection = collection(database, "products");
		const docReference = doc(productCollection, id);
		getDoc(docReference)
			.then((result) => {
				setItemDetail({
					id: result.id,
					...result.data(),
				});
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<div>
			{loading ? <ProgressLine /> : <ItemDetail item={itemDetail} />}
		</div>
	);
};

export default ItemDetailContainer;
