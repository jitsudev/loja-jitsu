import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex flex-col p-10 w-1/6">
      <span className="text-xs border-solid border-b-[1px]">Vestuário</span>
      <Link href="/tshirts" className="text-gray-300 hover:text-gray-200">
        Camisas
      </Link>
      <Link href="/regatas" className="text-gray-300 hover:text-gray-200">
        Regatas
      </Link>
      <Link href="/moletons" className="text-gray-300 hover:text-gray-200">
        Moletons
      </Link>
      <Link href="/babylook" className="text-gray-300 hover:text-gray-200">
        BabyLook
      </Link>

      <span className="text-xs border-solid border-b-[1px] mt-10">
        Acessórios
      </span>
      <Link href="/bones" className="text-gray-300 hover:text-gray-200">
        Bonés
      </Link>
      <Link href="/canecas" className="text-gray-300 hover:text-gray-200">
        Canecas
      </Link>
    </nav>
  );
}
