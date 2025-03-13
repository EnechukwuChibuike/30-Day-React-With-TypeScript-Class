interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="border-[1px] border-black p-20">{children}</section>
  );
}
