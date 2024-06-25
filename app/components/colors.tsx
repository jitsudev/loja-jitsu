"use client";

import { COLOR } from "../(util)/dimona";
import { useEffect, useState } from "react";

export default function Colors({ title, onInputValueChange }: { title?: string; onInputValueChange: (value: string) => void }) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setSelected(value);
		onInputValueChange(value);
	};

	const [selected, setSelected] = useState<string>("");

	return (
		<div className="flex gap-2 items-center">
			{title != "" ? <h2>{title}</h2> : null}
			{Object.keys(COLOR).map((k, i) => (
				<input type="radio" key={i} name="color" value={k} className={`cor ${COLOR[k]} rounded`} onChange={handleChange} />
			))}
			<div>{selected}</div>
		</div>
	);
}
