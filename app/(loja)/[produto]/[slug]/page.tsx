import Frete from "@/app/components/frete";
import Produto from "@/app/components/produto";
import Image from "next/image";

export default function Page({ params }: { params: { produto: string } }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <div className="w-2/4">
          <div>
            <Image
              src="/mockup.png"
              width={500}
              height={500}
              alt="titulo do produto"
            />
          </div>
          <div className="flex gap-3 mt-3">
            <Image
              src="/mockup.png"
              width={80}
              height={80}
              alt="titulo do produto"
              className="rounded"
            />
            <Image
              src="/mockup.png"
              width={80}
              height={80}
              alt="titulo do produto"
            />
            <Image
              src="/mockup.png"
              width={80}
              height={80}
              alt="titulo do produto"
            />
            <Image
              src="/mockup.png"
              width={80}
              height={80}
              alt="titulo do produto"
            />
          </div>
        </div>
        <div className="flex flex-col w-2/4 gap-4">
          <h1 className="text-4xl font-bold">Camisa armlock voador</h1>
          <h2 className="flex gap-2 text-2xl flex-wrap w-full">
            <span className="text-gray-800 line-through ">R$ 76,00</span>
            <span className="text-gray-400 font-bold">R$ 66,00</span>
            <span className="text-gray-400 text-sm">
              ou 3 x 22,00 sem juros
            </span>
          </h2>
          <div>
            <h2>Cor:</h2>
            <div className="flex gap-2">
              <div className="rounded w-5 h-5 bg-red-500 border-solid border-2 border-black-600"></div>
              <div className="rounded w-5 h-5 bg-blue-500 border-solid border-2 border-black-600"></div>
              <div className="rounded w-5 h-5 bg-yellow-500 border-solid border-2 border-black-600"></div>
              <div className="rounded w-5 h-5 bg-green-500 border-solid border-2 border-black-600"></div>
              <div className="rounded w-5 h-5 bg-black border-solid border-2 border-black-600"></div>
              <div className="rounded w-5 h-5 bg-white border-solid border-2 border-black-600"></div>
            </div>
          </div>

          <div>
            <h2>Tamanho:</h2>
            <div className="flex gap-2">
              <input type="radio" name="size" value="P" />P
              <input type="radio" name="size" value="M" />M
              <input type="radio" name="size" value="G" />G
              <input type="radio" name="size" value="GG" />
              GG
              <input type="radio" name="size" value="XGG" />
              XGG
              <input type="radio" name="size" value="G1" />
              G1
              <input type="radio" name="size" value="G2" />
              G2
              <input type="radio" name="size" value="G3" />
              G3
              <input type="radio" name="size" value="G4" />
              G4
            </div>
          </div>

          <div className="flex items-center gap-3">
            <h2>Quantidade:</h2>
            <div className="flex items-center gap-2 p-1 border-solid border-2 bg-transparent rounded-full">
              <button className="p-1 flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white">
                -
              </button>
              <input
                className="rounded-md h-6 w-16 text-xl text-black text-center"
                type="text"
                value="1"
              />
              <button className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-black text-2xl hover:bg-white">
                +
              </button>
            </div>
          </div>

          <div>
            <h2>Descrição:</h2>
            <p>
              Composição: 100% algodão, meia malha penteada, costura reforçada,
              gola em ribana, 165g, fio 30.1.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="text-lg text-black p-2 flex items-center justify-center w-2/3 rounded-full bg-slate-200 hover:bg-white">
              Adicionar ao carrinho
            </button>
            <button className="text-lg text-black p-2 flex items-center justify-center w-1/3 rounded-full bg-green-400 hover:bg-green-300">
              Comprar
            </button>
          </div>

          <div>
            <Frete />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <h2>Produtos semelhantes</h2>
        <div className="flex gap-4">
          {[...Array(6)].map((e, i) => (
            <Produto key={i} tipo={params.produto} slug="camisa-estampada" />
          ))}
        </div>
      </div>
    </div>
  );
}
