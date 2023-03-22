import * as RadioGroup from "@radix-ui/react-radio-group";

import { FiDollarSign, FiMapPin, FiTrash } from "react-icons/fi";

import { Input } from "../components/Input";
import cartaoCredito from '../assets/icons/order/credito.png';
import cartaoDebito from '../assets/icons/order/debito.png';
import coffee from '../assets/coffe.png'
import dinheiro from '../assets/icons/order/dinheiro.png';

export function Order() {
  return (
    <div className="container gap-5 mx-auto my-10 xl:flex-row flex-col  flex justify-between p-3">
      <div>
        <h3>Complete seu pedido</h3>

        <div className="bg-base-card p-8 rounded">
          <header className="flex items-center gap-2">
            <FiMapPin size={20} color="#C47F17" />
            <div className="flex flex-col">
              <span className="text-base-subtitle text-md">
                Endereço de entrega
              </span>
              <span className="text-base-subtitle text-sm">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </header>
          <form className="mt-8">
            <div className="w-1/3">
              <Input placeholder="CEP" />
            </div>
            <div className="w-full">
              <Input placeholder="Rua" />
            </div>
            <div className="flex gap-3">
              <Input placeholder="Número" />
              <Input placeholder="Complemento" />
            </div>
            <div className="flex gap-3">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" />
            </div>

          </form>
        </div>
        <div className=" bg-[#F3F2F2] p-8 rounded mt-3">
          <header className="flex items-center gap-2">
            <FiDollarSign size={20} color="#8047F8" />
            <div className="flex flex-col">
              <span className="text-base-subtitle text-md">Pagamento</span>
              <span className="text-base-subtitle text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </header>
          <div className="mt-8">
            <RadioGroup.Root className="grid grid-cols-3 gap-1 mt-3">
              <RadioGroup.Item value="cartao_credito" className="bg-base-button p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-none text-base-text text-xs uppercase stateChecked">
                <img src={cartaoCredito} alt="" />
                <span>cartão de débito</span>
              </RadioGroup.Item>
              <RadioGroup.Item value="cartao_debito" className="bg-base-button p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-none text-base-text text-xs uppercase stateChecked">
                <img src={cartaoDebito} alt="" />
                <span>Cartão de Crédito</span>
              </RadioGroup.Item>
              <RadioGroup.Item value="dinheiro" className="bg-base-button p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-none text-base-text text-xs uppercase stateChecked">
                <img src={dinheiro} alt="" />
                <span>dinheiro</span>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 ">
        <h3>Cafés selecionados</h3>
        <div className="bg-base-card p-8 rounded-card-order flex flex-col">

          <div className="flex justify-between border-b pb-5">
            <div className="flex gap-6">
              <img src={coffee} alt="" className="h-[64px] w-[64px]" />
              <div className="flex flex-col">
                <span>Expresso Tradicional</span>
                <button className="flex items-center  gap-2 bg-base-button w-2/3 p-1 rounded uppercase text-sm text-base-text">
                  <FiTrash color="#8047F8" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <strong>
              R$ 9,90
            </strong>
          </div>

          <div className="flex justify-between border-b py-5">
            <div className="flex gap-6">
              <img src={coffee} alt="" className="h-[64px] w-[64px]" />
              <div className="flex flex-col">
                <span>Expresso Tradicional</span>
                <button className="flex items-center  gap-2 bg-base-button w-2/3 p-1 rounded uppercase text-sm text-base-text">
                  <FiTrash color="#8047F8" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <strong>
              R$ 9,90
            </strong>
          </div>

          <div className="flex justify-between border-b py-5">
            <div className="flex gap-6">
              <img src={coffee} alt="" className="h-[64px] w-[64px]" />
              <div className="flex flex-col">
                <span>Expresso Tradicional</span>
                <button className="flex items-center  gap-2 bg-base-button w-2/3 p-1 rounded uppercase text-sm text-base-text">
                  <FiTrash color="#8047F8" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <strong>
              R$ 9,90
            </strong>
          </div>

          <div className="flex items-center justify-between mt-5">
            <span>Total de Itens</span>
            <span>R$ 29,70</span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>

          <div className="flex items-center justify-between text-xl font-bold my-5">
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>


          <button className="uppercase rounded p-3 flex items-center justify-center bg-yellow text-white hover:bg-yellow-dark transition-all ease-linear">confirmar pedido</button>

        </div>
      </div>
    </div>
  );
}
