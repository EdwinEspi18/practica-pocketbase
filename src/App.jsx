import { useQuery } from "@tanstack/react-query";
import { login } from "./actions/login";

function App() {
  const { isSuccess, isError, data } = useQuery({
    queryKey: ["user"],
    queryFn: login,
  });

  return (
    <section className='min-h-screen w-full bg-gray-800 text-white flex justify-center items-center flex-col'>
      <button className='p-4 border-none rounded-full bg-blue-800 w-48 text-2xl hover:scale-105 hover:shadow-lg hover:shadow-white/50 transition-shadow'>
        {isSuccess ? "Salir" : "Ingresar"}
        {isError && <span className='text-red-500'>Error</span>}
      </button>
      <pre className='bg-black p-6 rounded-xl mt-6'>
        {JSON.stringify(data, null, 2)}
      </pre>
    </section>
  );
}

export default App;
