export default function Filtros() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-3">
        <input
          name="search"
          className="border-solid border-2 rounded-md bg-transparent p-2 text-xs w-full"
          placeholder="Ex. Camisa arm-lock"
        />
        <button type="submit">Buscar</button>
      </div>

      <div className="flex gap-2">
        <div className="rounded w-5 h-5 bg-red-500 border-solid border-2 border-black-600"></div>
        <div className="rounded w-5 h-5 bg-blue-500 border-solid border-2 border-black-600"></div>
        <div className="rounded w-5 h-5 bg-yellow-500 border-solid border-2 border-black-600"></div>
        <div className="rounded w-5 h-5 bg-green-500 border-solid border-2 border-black-600"></div>
        <div className="rounded w-5 h-5 bg-black border-solid border-2 border-black-600"></div>
        <div className="rounded w-5 h-5 bg-white border-solid border-2 border-black-600"></div>
      </div>

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
