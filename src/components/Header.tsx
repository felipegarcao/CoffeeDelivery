import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between container mx-auto p-3">
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <div className="flex items-center gap-2">
        <button className="bg-purple-light p-2 rounded text-purple">
          <span className="flex items-center gap-2">
            <FiMapPin size={20} /> Porto Alegre, RS
          </span>
        </button>
        <button className="p-[.6rem] rounded bg-yellow-light relative" onClick={() => navigate("/order")}>
          <AiOutlineShoppingCart size={20} className="text-yellow-dark" />
          <div className="absolute top-[-8px] right-[-8.35px] bg-yellow-dark rounded-full w-5 h-5 text-white flex items-center justify-center font-bold">
            1
          </div>
        </button>
      </div>
    </header>
  );
}
