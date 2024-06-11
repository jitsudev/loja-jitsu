export default function Page() {
  return (
    <>
      <h1>Rastreio de pedidos</h1>
      <h2>Insira o número do pedido para que fazer o rasteio do seu pedido.</h2>
      <form>
        <label htmlFor="pedido">Nº do pedido:</label>
        <input type="text" name="pedido" placeholder="Ex: JTS000152" />
        <button>Rastrear</button>
      </form>
    </>
  );
}
