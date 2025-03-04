interface ButtonProps {
  text: string;
  color?: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: props.color,
      }}
      className={`text-white font-bold py-2 px-4 rounded`}
    >
      {props.text}
    </button>
  );
}

export default Button;
