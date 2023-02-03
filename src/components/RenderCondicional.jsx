import React from 'react';

function RenderCondicional({ x }) {
  return (
    <div>
      <div>
        <span> Sua nota é {x}! </span>
        {x > 7 ? (
          <span>E com {x} você está Aprovado!</span>
        ) : (
          <span>E com {x} você está Reprovado!</span>
        )}
      </div>
    </div>
  );
}

export default RenderCondicional;
