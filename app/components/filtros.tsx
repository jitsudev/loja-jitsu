import Colors from "./colors";

export default function Filtros() {
	return (
		<div className="flex w-full justify-between items-center">
			<div className="flex items-center gap-3">
				<input name="search" className="border-solid border-2 rounded-md bg-transparent p-2 text-xs w-full" placeholder="Ex. Camisa arm-lock" />
				<button type="submit">Buscar</button>
			</div>

			<Colors />

			<div>
				Ordenar por:
				<select>
					<option>Menor preço</option>
					<option>Maior preço</option>
					<option>Lançamento</option>
				</select>
			</div>
			<div>Disposição</div>
		</div>
	);
}
