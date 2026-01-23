import { useEffect, useState } from 'react';

export default function FormWithValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!email.includes('@')) {
      setError('Invalid email address');
      return false;
    }
    setError('');
    return true;
  };
  useEffect(()=>{
    console.log(error)
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Submitted: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type='submit'>Submit</button>
    </form>
  );
}
