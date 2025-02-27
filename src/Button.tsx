interface ButtonProps {
  btnText: string;
  color: string;
  bg: string;
  click?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      style={{ color: props.color, backgroundColor: props.bg }}
      onClick={props.click}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
