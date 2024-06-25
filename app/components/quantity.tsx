"use client";

import { useEffect, useState } from "react";

export default function Quantity({ title, initialValue, onInputValueChange }: { title?: string; initialValue: string; onInputValueChange: (value: string) => void }) {
	const [quantity, setQuantity] = useState<string>("1");

	function decrease() {
		var q = parseInt(quantity);
		if (q > 1) {
			setQuantity((q - 1).toString());
		}
	}

	function increase() {
		setQuantity((parseInt(quantity) + 1).toString());
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setQuantity(value);
	};

	useEffect(() => {
		console.log("quantity changed");
		onInputValueChange(quantity);
		if (initialValue) {
			setQuantity(initialValue);
		}
	}, [quantity]);

	return (
		<div className="flex items-center gap-3">
			{title != "" ? <h2>{title}</h2> : null}
			<div className="flex items-center gap-2 p-1 border-solid border-2 bg-transparent rounded-full">
				<button className="p-1 flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white" onClick={() => decrease()}>
					-
				</button>
				<input className="rounded-md h-6 w-16 text-xl text-black text-center" type="text" value={quantity} onChange={handleChange} />
				<button className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white" onClick={() => increase()}>
					+
				</button>
			</div>
		</div>
	);
}
