import Produto from "./components/produto";

export default function Home() {
  return (
    <>
      {[...Array(10)].map((e, i) => (
        <Produto key={i} />
      ))}
    </>
  );
}
