"use client";
import { useProduct } from "../context/productContext";
import { COLOR } from "../(util)/dimona";

export default function Colors({ title }: { title?: string }) {
	const { item, handleProduto } = useProduct();

	function setColor(color: string) {
		var newItem = { ...item };
		newItem.color = color;
		handleProduto(newItem);
	}

	return (
		<div className="flex gap-2 items-center">
			{title != "" ? <h2>{title}</h2> : null}
			{Object.keys(COLOR).map((k, i) => (
				<input type="radio" key={i} name="color" className={`cor ${COLOR[k]} rounded`} onClick={() => setColor(k)} />
			))}
			<div>{item.color} </div>
		</div>
	);
}
