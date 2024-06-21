"use client";
import { useState } from "react";

export default function Quantity() {
	const [value, setValue] = useState(1);

	function decrease() {
		if (value > 1) {
			setValue(value - 1);
		}
	}

	function increase() {
		setValue(value + 1);
	}

	return (
		<div className="flex items-center gap-3">
			<h2>Quantidade:</h2>
			<div className="flex items-center gap-2 p-1 border-solid border-2 bg-transparent rounded-full">
				<button className="p-1 flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white" onClick={() => decrease()}>
					-
				</button>
				<input className="rounded-md h-6 w-16 text-xl text-black text-center" type="text" value={value} />
				<button className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white" onClick={() => increase()}>
					+
				</button>
			</div>
		</div>
	);
}
