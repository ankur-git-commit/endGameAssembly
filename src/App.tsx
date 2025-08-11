import Title from "./components/Title";
import Eliminations from "./components/Eliminations";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="flex h-screen flex-col items-center gap-10 bg-[#282726] py-30">
      <Title />
      <Eliminations />
      <Keyboard />
    </div>
  );
}

export default App;
