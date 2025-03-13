export default function Login() {
    return (
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold text-white">🔑 Login</h2>
        <input 
          type="text" 
          placeholder="Usuário" 
          className="block w-1/2 mx-auto my-2 p-2 rounded"
        />
        <input 
          type="password" 
          placeholder="Senha" 
          className="block w-1/2 mx-auto my-2 p-2 rounded"
        />
        <button className="bg-green-500 px-4 py-2 rounded-full text-white">Entrar</button>
      </div>
    );
  }
  