import { BsCartPlusFill } from "react-icons/bs";
import coffe from "../../assets/coffe.png";

export function ListCoffee() {
  return (
    <div className="container mx-auto my-10">
      <h3 className="text-3xl">Nossos cafés</h3>
      <div className="grid grid-cols-4 gap-8 mt-5">
        <div className="rounded-r-lg bg-[#F3F2F2] p-3">
          <div className="flex flex-col items-center">
            <img src={coffe} alt="Café" className="mt-[-30px] mb-4" />
            <div>
              <div className="bg-[#F1E9C9] text-[#C47F17] px-2 py-1 uppercase rounded mb-2">
                <span className="text-xs">tradicional</span>
              </div>
            </div>
            <h4 className="text-lg">Expresso Tradicional</h4>
            <p className="text-center text-[#8D8686] text-sm">
              O tradicional café feito com água quente e grãos moídos
            </p>
            <div className="flex items-center justify-between w-9/12 mt-8">
              <span>
                R$ <strong className="text-lg">9,90</strong>
              </span>
              <div className="flex items-center gap-2">
                <div className="bg-[#E6E5E5] rounded p-2 flex items-center gap-3">
                  <button className="text-[#8047F8] text-md font-bold">+</button>
                  <span>1</span>
                  <button className="text-[#8047F8] text-md font-bold">-</button>
                </div>
                <button className="bg-[#4B2995] text-white p-3 rounded">
                  <BsCartPlusFill />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-r-lg bg-[#F3F2F2] p-3">
          <div className="flex flex-col items-center">
            <img src={coffe} alt="Café" className="mt-[-30px] mb-4" />
            <div className="flex items-center gap-2">
              <div className="bg-[#F1E9C9] text-[#C47F17] px-2 py-1 uppercase rounded mb-2">
                <span className="text-xs">tradicional</span>
              </div>
              <div className="bg-[#F1E9C9] text-[#C47F17] px-2 py-1 uppercase rounded mb-2">
                <span className="text-xs">tradicional</span>
              </div>
            </div>
            <h4 className="text-lg">Expresso Tradicional</h4>
            <p className="text-center text-[#8D8686] text-sm">
              O tradicional café feito com água quente e grãos moídos
            </p>
            <div className="flex items-center justify-between w-9/12 mt-8">
              <span>
                R$ <strong className="text-lg">9,90</strong>
              </span>
              <div className="flex items-center gap-2">
              <div className="bg-[#E6E5E5] rounded p-2 flex items-center gap-3">
                  <button className="text-[#8047F8] text-md font-bold">+</button>
                  <span>1</span>
                  <button className="text-[#8047F8] text-md font-bold">-</button>
                </div>
                <button className="bg-[#4B2995] text-white p-3 rounded">
                  <BsCartPlusFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
