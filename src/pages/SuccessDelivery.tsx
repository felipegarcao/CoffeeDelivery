import { FiMapPin } from "react-icons/fi";
import motoboy from '../assets/delivery.png'
import { useCart } from "../hooks/useCart";

export function SuccessDelivery() {

  const {order} = useCart();


  return (
    <div className="container mx-auto mt-10 p-3">
      <h3 className="text-4xl text-yellow-dark">Uhu! Pedido confirmado</h3>
      <span className="text-base-subtitle text-xl">Agora é só aguardar que logo o café chegará até você</span>

      <div className="flex items-center justify-between md:flex-row flex-col">
      <div className="rounded-card-order p-10 border mt-6 flex flex-col gap-6 md:w-1/3 w-full">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-purple text-white p-2">
            <FiMapPin />
          </div>
          <div className="flex flex-col">
            <span>Entrega em <strong>{order.rua}</strong></span>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-yellow text-white p-2">
            <FiMapPin />
          </div>
          <div className="flex flex-col">
            <span>Previsão de entrega</span>
            <strong>20 min - 30 min </strong>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <div className="rounded-full bg-yellow-dark text-white p-2">
            <FiMapPin />
          </div>
          <div className="flex flex-col">
            <span>Pagamento na entrega</span>
            <strong>Cartão de Crédito</strong>
          </div>
        </div>
      </div>
      <img src={motoboy} alt="Motoboy"/>
      </div>

     <div>

     </div>
    </div>
  )
}