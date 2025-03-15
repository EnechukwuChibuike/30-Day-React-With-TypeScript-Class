import { useTheme } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      className={`flex h-screen ${theme === "light" ? "bg-white" : "bg-black"}`}
    >
      <header
        className={`flex justify-between items-center h-[10vh] w-full shadow-lg px-10 ${
          theme === "light" ? "text-black" : "text-white"
        }}`}
      >
        <strong className={theme === "light" ? "text-black" : "text-white"}>
          Logo
        </strong>
        <button
          className="bg-blue-700 text-white px-3 py-2 hover:brightness-75"
          onClick={toggleTheme}
        >
          {theme}
        </button>
      </header>
    </main>
  );
}

export default App;
