import { useRef } from "react";

export default function UnControlledForm() {
  const inputValue = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(inputValue.current?.value);
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
        ref={inputValue}
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
