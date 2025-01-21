import { useState } from "react";
import { LoginUser } from "../../services/Auth.services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>();

  const handleSubmit =async (e:React.FormEvent)=>{
    e.preventDefault()
    setError(null)

    try{
        const success =await LoginUser(username, password)
        if(success){
            window.location.href="/"
        }else{
            setError("identifiants incorrects")
        }
    }catch(error){
        setError("une erreur est survenue")
    }
    

  }

  return (
    <div>
      <h2>Connexion</h2>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            value={username}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>

      </form>
    </div>
  );
};

export default Login;
