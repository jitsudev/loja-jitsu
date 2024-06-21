"use client";
import { useState } from "react";
import { COLOR } from "../(util)/dimona";

export default function Colors() {
	const [color, setColor] = useState("");

	return (
		<div className="flex gap-2 items-center">
			<div>Cor:</div>
			{Object.keys(COLOR).map((k: string, i: number) => (
				<div key={i} className="cor flex flex-col gap-1">
					<input type="radio" name="color" className={COLOR[k]} onClick={() => setColor(k)} />
				</div>
			))}
			<div>{color.replace("_", " ")}</div>
		</div>
	);
}
