export default function Page() {
  return (
    <>
      <h1>Central de trocas e devoluções</h1>
      <h2>
        Insira o número do pedido da compra efetuada para que possamos
        identificar quais produtos deseja solicitar a troca.
      </h2>
      <form>
        <label htmlFor="pedido">Nº do pedido:</label>
        <input type="text" name="pedido" placeholder="Ex: JTS000152" />
        <button>Enviar solicitação</button>
      </form>
    </>
  );
}
