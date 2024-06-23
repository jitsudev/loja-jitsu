"use client";
import { useProduct } from "../context/productContext";

export default function Quantity({ title }: { title?: string }) {
	const { item, handleProduto } = useProduct();

	function setQuantity(n: number) {
		var _item = { ...item };
		_item.quantity = n;
		handleProduto(_item);
	}

	function decrease() {
		if (item.quantity > 1) {
			setQuantity(item.quantity - 1);
		}
	}

	function increase() {
		setQuantity(item.quantity + 1);
	}

	return (
		<div className="flex items-center gap-3">
			{title != "" ? <h2>{title}</h2> : null}
			<div className="flex items-center gap-2 p-1 border-solid border-2 bg-transparent rounded-full">
				<button className="p-1 flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white" onClick={() => decrease()}>
					-
				</button>
				<input className="rounded-md h-6 w-16 text-xl text-black text-center" type="text" value={item.quantity} />
				<button className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white" onClick={() => increase()}>
					+
				</button>
			</div>
		</div>
	);
}
