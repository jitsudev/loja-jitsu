import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Produto from "./components/produto";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header className="flex flex-row items-center justify-between p-10" />
        <main className="mb-auto flex w-full">
          <Menu />
          <div className="flex flex-row gap-3 flex-wrap w-5/6 p-10">
            {[...Array(10)].map((e, i) => (
              <Produto key={i} />
            ))}
          </div>
        </main>
        <Footer className="flex flex-col" />
      </div>
    </>
  );
}
