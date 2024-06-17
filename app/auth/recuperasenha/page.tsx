import Produto from "@/app/components/produto";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-svh justify-center items-center">
      <div className="flex flex-col w-1/2 justify-center items-center gap-4 mb-20">
        <Image
          src="/logo_footer.png"
          width={180}
          height={80}
          alt="Logo Jitsu"
        />
        <h1>Esqueceu sua senha ? Digite seu e-mail.</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            placeholder="E-Mail"
            className="bg-transparent border-solid border-2 p-2 rounded-lg"
          />
          <button
            type="submit"
            className="flex justify-center items-center w-full p-2 bg-green-600 rounded-full"
          >
            Reenviar a senha
          </button>
        </form>
      </div>
    </div>
  );
}
