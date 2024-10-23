function Header({ texto, imagem, preco }) {
  return (
    <>
      <h1>{texto}</h1>
      <img src={imagem} width="250" />
      <p>{preco}</p>
    </>
  );
}
export default Header;
