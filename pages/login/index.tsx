import { redirect } from "react-router-dom";
import { useState } from "react";
import LayoutLogin from "../../components/Layout.Login";

export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (event: any) => {
    event.preventDefault();

    const Cookies: string[] = [
      'Session=validSessionToken',
      'path=/',
      'Expires=Thu, 04 Jul 2024 17:11:14 GMT',
      'Secure'
    ];

    const isValid = email === 'admin@example.com' && password === 'password';

    if (isValid) {
      document.cookie = Cookies.join(';');
      redirect('/');
    }
    else {
      alert('Credenciales inválidas');
    }
  }

  console.log(email)

  return (
    <LayoutLogin title="Login">
      <form onSubmit={handleLogin} className="grid grid-flow-row">
        <input
          className="mb-2 text-black"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          className="mb-2 text-black"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </LayoutLogin>
  );
}
