"use client";
import { useState } from "react";
import { COLOR } from "../(util)/dimona";

export default function Colors() {
	const [color, setColor] = useState("");

	return (
		<div className="flex gap-2 items-center">
			<div>Cor: </div>
			{Object.keys(COLOR).map((k, i) => (
				<input type="radio" key={i} name="color" className={`cor ${COLOR[k]} rounded`} onClick={() => setColor(k)} />
			))}
			<div>{color} </div>
		</div>
	);
}
