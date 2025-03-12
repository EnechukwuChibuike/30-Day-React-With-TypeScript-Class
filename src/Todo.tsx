import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: tasks.length + 1,
      title: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const deleteTodo = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <section className="bg-gray-500 grid place-items-center min-h-screen gap-5">
      <form className="flex items-center w-[50%]" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter todo..."
          className="h-[40px] bg-white pl-2 outline-none w-[80%]"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          type="submit"
          className="h-[40px] w-[20%] bg-black border-none text-white cursor-pointer"
        >
          Add Todo
        </button>
      </form>

      <ol className="h-[40px] w-1/2 grid gap-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between w-full px-2 h-full border-black border-[1px]"
          >
            <span>{task.title}</span>
            <button
              className="p-2 font-bold cursor-pointer hover:bg-gray-800/40"
              onClick={() => deleteTodo(task.id)}
            >
              x
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
