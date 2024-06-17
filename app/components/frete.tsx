"use client";

import { calculaFrete } from "../actions";
import { useFormState } from "react-dom";

import { Frete } from "../(types)/types";

export default function Filtros() {
  const initialState: { message: string; data: Array<Frete> } = {
    message: "",
    data: [],
  };

  const [state, formAction] = useFormState(calculaFrete, initialState);

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <form
        action={formAction}
        method="POST"
        className="flex items-start gap-4"
      >
        <div className="flex flex-col items-center gap-1">
          <input
            type="text"
            name="zipcode"
            placeholder="00000-000"
            className="rounded p-2 bg-transparent text-white border-solid border-2 border-slate-300"
          />

          {state.message != "" ? (
            <span className="text-red-500 text-xs">{state.message}</span>
          ) : null}
        </div>
        <input type="hidden" name="quantity" value="3" />
        <button type="submit" className="rounded mt-1 px-4 py-2 bg-gray-950">
          Calcular frete
        </button>
      </form>
      <div>
        {state.data.map((e: Frete, i: number) => (
          <div key={i}>
            {e.name} - R$ {e.value} - {e.business_days} dias
          </div>
        ))}
      </div>
    </div>
  );
}
