import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="flex items-center justify-between container mx-auto pt-3">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-2">
        <button>Porto Alegre</button>
        <button>Carrinho</button>
      </div>
    </header>
  );
}
