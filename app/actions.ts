"use server";

import { Frete } from "./(types)/types";

export async function calculaFrete(
  prevState: { message: string; data: Array<Frete> },
  formData: FormData
) {
  const treatedData = new FormData();

  if (formData.get("zipcode") == "") {
    return {
      message: "CEP vazio",
      data: [],
    };
  }

  treatedData.append("zipcode", formData.get("zipcode") || "");
  treatedData.append("quantity", formData.get("qauntity") || "1");

  const get = await fetch("https://camisadimona.com.br/api/v2/shipping/", {
    method: "POST",
    headers: {
      "api-key": "452932ec7e13839a1f48fa401b1247e3",
    },
    body: treatedData,
  });

  return { message: "", data: (await get.json()) as Array<Frete> };
}
