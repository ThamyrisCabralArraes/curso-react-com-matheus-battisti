function AnotherComponent() {
  const handleClicou = () => {
    console.log('clicou');
  };
  return (
    <div>
      <button onClick={handleClicou}>Enviar</button>
    </div>
  );
}

export default AnotherComponent;
