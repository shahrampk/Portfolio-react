type Prop = {
  text: string;
  newPage?: boolean;
  rout: string;
};

function Button({ newPage = false, text, rout }: Prop) {
  return (
    <a
      href={rout}
      target={newPage ? "_blank" : "_self"}
      rel={newPage ? "noopener noreferrer" : undefined}
      className="transition-colors duration-200 bg-emerald-700 hover:bg-emerald-800 text-neutral-white-200/90 px-4 py-2 rounded-lg text-center"
    >
      {text}
    </a>
  );
}

export default Button;
