import React, { useState, useCallback } from 'react';

function Button({ onClick, label }) {
  console.log('Rendering button:', label);
  return <button onClick={onClick}>{label}</button>;
}

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <Button onClick={increment} label="Increment Count" />
    </div>
  );
}

export default UseCallbackExample