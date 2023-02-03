import React, { useState, useEffect } from 'react';

function Hooks() {
  let [novaIdade, setNovaIdade] = useState(0);
  const handleAumentarIdade = () => {
    setNovaIdade((novaIdade += 1));
  };
  const handleReduzirIdade = () => {
    setNovaIdade((novaIdade -= 1));
  };

  useEffect(() => {
    console.log('useEffect');
  });
  return (
    <div>
      <p>Qual sua idade : {novaIdade}</p>
      <button onClick={handleAumentarIdade}>Aumentar idade</button>
      <button onClick={handleReduzirIdade}>Reduzir Idade</button>
    </div>
  );
}

export default Hooks;
