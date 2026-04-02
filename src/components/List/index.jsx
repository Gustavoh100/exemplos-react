import './style.css'
function List({
  title,
  subtitulo2lista = "minha lista de compra "
}) {
  return (
    <section>
      <h2 id="exemplo-h2" >{title}</h2>


      <h3 id="ul" >{subtitulo2lista}</h3>
      <ul>
        <li>Batata</li>
        <li>Pão</li>
        <li>Arroz</li>
      </ul>
      <h3>lista ordenada</h3>
      <ul>
        <li>Rotiwels</li>
        <li>Barbye</li>
        <li>Poquemons</li>
      </ul>
      </section>
  )
}
export default List