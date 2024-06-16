import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de autenticação aqui
    try {
      Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/adm", "root", "an@2208");
      Statement stmt = con.createStatement();
      
      ResultSet rs = stmt.executeQuery("SELECT * FROM usuario WHERE email='"+email+"' AND senha='"+password+"'");
      if(rs.next()) {
        JOptionPane.showMessageDialog(null, "Seja bem-vindo");
    } else{
        JOptionPane.showMessageDialog(null, "Usuário ou senha incorretos");
    }
    } catch (Execption e) {
      System.out.println(e); /* a letra e irá retornar se o código estiver funcionando */
     }
  };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
