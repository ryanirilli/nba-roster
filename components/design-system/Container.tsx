interface IContainer {
  children: React.ReactNode;
}

export default function Container({ children }: IContainer): JSX.Element {
  return <section className="max-w-7xl mx-auto px-4">{children}</section>;
}
