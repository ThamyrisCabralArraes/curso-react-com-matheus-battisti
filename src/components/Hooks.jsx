import React, { useState } from 'react';

function Hooks() {
  let [novaIdade, setNovaIdade] = useState(0);
  const handleAumentarIdade = () => {
    setNovaIdade((novaIdade += 1));
  };
  const handleReduzirIdade = () => {
    setNovaIdade((novaIdade -= 1));
  };

  // useEffect(() => {
  //   console.log('useEffect');
  // });
  return (
    <div>
      <p>
        Qual sua nota para essas imagens: <span>{novaIdade}</span>
      </p>
      <button onClick={handleReduzirIdade}>Reduzir Idade</button>
      <button onClick={handleAumentarIdade}>Aumentar idade</button>
    </div>
  );
}

export default Hooks;
