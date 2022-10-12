import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import ProgressLine from "./ProgressLine"
import { collection, doc, getDoc } from "firebase/firestore"
import { database } from "../firebase/firebase"
import Toast from "./Toast"

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState()
	const [loading, setLoading] = useState(true)
	const [toast, setToast] = useState(false)

	const { id } = useParams()

	const showToast = (visible) => {
		setToast(visible)
	}

	useEffect(() => {
		const productCollection = collection(database, "products")
		const docReference = doc(productCollection, id)
		getDoc(docReference)
			.then((result) => {
				setItemDetail({
					id: result.id,
					...result.data(),
				})
			})
			.catch((error) => setToast(true))
			.finally(() => setLoading(false))
	}, [id])

	return (
		<div>
			<Toast
				text={"Error, vuelva a intentar mas tarde"}
				time={2000}
				type={"error"}
				open={toast}
				setOpen={showToast}
			/>
			{loading ? <ProgressLine /> : <ItemDetail item={itemDetail} />}
		</div>
	)
}

export default ItemDetailContainer
