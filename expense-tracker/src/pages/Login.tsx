import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { setUsuario } = useApp();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login
    setUsuario({
      id: "1",
      nome: "Usuário Teste",
      email: email,
    });
    
   
    navigate("/");
  };

  const isFormValid = email !== "" && senha !== "";

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit" disabled={!isFormValid}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
