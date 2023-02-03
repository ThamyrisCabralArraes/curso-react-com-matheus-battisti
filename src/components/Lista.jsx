import React from 'react';

function Lista() {
  const lista = [
    {
      id: 1,
      name: 'Thamyris',
    },
    {
      id: 2,
      name: 'Carlos',
    },
  ];

  return (
    <div>
      {lista.map((item) => (
        <p key={item.id}>
          {item.id} -{item.name}
        </p>
      ))}
    </div>
  );
}

export default Lista;
