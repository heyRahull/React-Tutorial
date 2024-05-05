import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const { user, setUser, login, username, password, setUsername, setPassword } =
    useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
