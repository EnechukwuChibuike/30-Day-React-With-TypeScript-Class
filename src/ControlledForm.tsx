import { useState } from "react";

export default function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(inputValue);
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex justify-center items-center h-screen gap-3 flex-col"
    >
      <input
        type="text"
        placeholder="name"
        className="w-1/3 py-3 pl-2 outline-none bg-slate-100"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        type="submit"
        className="py-2 px-4 rounded bg-blue-600 text-white"
      >
        Submit
      </button>
    </form>
  );
}
