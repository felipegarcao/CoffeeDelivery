import { FiCalendar } from "react-icons/fi";
import { ListCoffee } from "../components/ListCoffee";
import copoHome from "../assets/copohome.png";

export function Home() {
  return (
    <>
      <div className="bg-hero-pattern mt-6">
        <div className="container mx-auto grid grid-cols-2 items-center justify-between">
          <section>
            <h1 className="text-5xl">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-md mt-2 text-justify">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
              qualquer hora.
            </p>
            <div className="flex items-center mt-4 justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#C47F17] p-3">
                  <FiCalendar className="text-white" />
                </div>
                <span>Compra simples e segura</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#574F4D] p-3">
                  <FiCalendar className="text-white" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </div>
            </div>
            <div className="flex items-center mt-4 justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#DBAC2C] p-3">
                  <FiCalendar className="text-white" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className="flex items-center gap-2 w-[294px]">
                <div className="rounded-full bg-[#C47F17] p-3">
                  <FiCalendar className="text-white" />
                </div>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </section>
          <div className="flex justify-end">
            <img src={copoHome} alt="Copo Home" />
          </div>
        </div>
      </div>
      <ListCoffee />
    </>
  );
}
