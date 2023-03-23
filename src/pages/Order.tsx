import * as RadioGroup from "@radix-ui/react-radio-group";

import { FiDollarSign, FiMapPin, FiTrash } from "react-icons/fi";

import { Input } from "../components/Input";
import cartaoCredito from '../assets/icons/order/credito.png';
import cartaoDebito from '../assets/icons/order/debito.png';
import dinheiro from '../assets/icons/order/dinheiro.png';
import { formatPrice } from "../util/format";
import { useCart } from "../hooks/useCart";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Order() {

  const { cart, removeProduct, orderAddress } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount)
  }))

  const total = formatPrice(cart.reduce((sumTotal, product) => {
    const newSumTotal = sumTotal + product.price * product.amount + 3.5
    return newSumTotal;
  }, 0))

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  const { register, setValue, handleSubmit, formState: { isValid } } = useForm({ mode: 'onChange' });

  const required = {
    required: true,
  }


  register('cep', required)
  register('rua', required)
  register('numero', required)
  register('bairro', required)
  register('cidade', required)
  register('uf', required)

  function onSubmit(data: any) {
    orderAddress(data);
  }

  const navigate = useNavigate();

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
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-1/3">
              <Input placeholder="CEP" name="cep" onChange={e => setValue("cep", e.target.value)} />
            </div>
            <div className="w-full">
              <Input placeholder="Rua" onChange={e => setValue("rua", e.target.value)} />
            </div>
            <div className="flex gap-3">
              <Input placeholder="Número" onChange={e => setValue("numero", e.target.value)} />
              <Input placeholder="Complemento" />
            </div>

            <div className="flex gap-3">
              <Input placeholder="Bairro" onChange={e => setValue("bairro", e.target.value)} />
              <Input placeholder="Cidade" onChange={e => setValue("cidade", e.target.value)} />
              <Input placeholder="UF" onChange={e => setValue("uf", e.target.value)} />
            </div>

            <button type="submit" className="p-3 uppercase text-white bg-yellow-dark rounded mt-3">confirmar dados</button>


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
        <div className="bg-base-card p-8 rounded-card-order flex flex-col" >

          {
            cartFormatted.map(product => (
              <>
                <div className="flex justify-between border-b pb-5" key={product.id}>
                  <div className="flex gap-6">
                    <img src={product.image} alt="" className="h-[64px] w-[64px]" />
                    <div className="flex flex-col">
                      <span>{product.name}</span>
                      <button className="flex items-center  gap-2 bg-base-button w-2/3 p-1 rounded uppercase text-sm text-base-text" onClick={() => handleRemoveProduct(product.id)}>
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
                  <span>{product.subTotal}</span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
              </>
            ))
          }

          <div className="flex items-center justify-between text-xl font-bold my-5">
            <span>Total</span>
            <span>{total}</span>
          </div>


          <button onClick={() => navigate('/order/success')} className="uppercase rounded p-3 flex items-center justify-center bg-yellow text-white hover:bg-yellow-dark transition-all ease-linear disabled:bg-base-hover disabled:text-white disabled:cursor-not-allowed" disabled={cart.length <= 0}>
            confirmar pedido
          </button>

        </div>
      </div>
    </div>
  );



}
