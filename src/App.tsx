import { useTheme } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={`${theme === "light" ? "bg-white" : "bg-black"} h-screen`}>
      <header className="flex justify-between items-center p-4 h-[10vh] shadow-2xl">
        <strong className={theme === "light" ? "text-black" : "text-white"}>
          Logo.
        </strong>

        <button
          onClick={toggleTheme}
          className={`px-2 py-3 bg-blue-600 hover:brightness-75 text-white`}
        >
          {theme} mode
        </button>
      </header>
    </main>
  );
}

export default App;
