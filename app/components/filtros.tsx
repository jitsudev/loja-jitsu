import Colors from "./colors";
import Ordenador from "./ordernador";

export default function Filtros() {
	return (
		<div className="flex w-full justify-between items-center">
			<div className="flex items-center gap-3">
				<input name="search" className="border-solid border-2 rounded-md bg-transparent p-2 text-xs w-full" placeholder="Ex. Camisa arm-lock" />
				<button type="submit">Buscar</button>
			</div>

			<Colors />

			<Ordenador title="Ordenar por:" />
			<div>Disposição</div>
		</div>
	);
}
