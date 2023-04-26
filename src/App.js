import LoginForm from "./components/LoginForm";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginForm />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <Spinner />
        <div className="w-full h-1/2 bg-white/10 absolute" />
      </div>
    </div>
  );
}

export default App;
