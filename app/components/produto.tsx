import Image from "next/image";
import Link from "next/link";

export default function Produto({ slug }: any) {
  return (
    <div className="flex flex-col w-1/6 items-center justify-center">
      <Link
        href={{
          pathname: "loja/" + slug,
          query: {},
        }}
      >
        <Image
          src="/mockup.png"
          width={300}
          height={450}
          alt="Imagem da camisa {titulo}"
        ></Image>
      </Link>
      <h1>Titulo do produto</h1>
      <h2>De: R$ 99,00 por R$ 80,00</h2>
    </div>
  );
}
