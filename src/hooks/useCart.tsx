import { ReactNode, createContext, useContext, useState } from 'react';

import { ListCoffeeProps } from '../types/ListCoffee';
import { api } from '../services/api';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface OrderAddressProps {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface CartContextData {
  cart: ListCoffeeProps[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  handleProductsIncrement: (product: ListCoffeeProps) => void;
  handleProductDecrement: (product: ListCoffeeProps) => void;
  orderAddress: (value: any) => void;
  quantityCart: number;
  order: OrderAddressProps;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [quantityCart, setQuantityCart] = useState<number>(0);
  const [order, setOrder] = useState<OrderAddressProps>({} as OrderAddressProps);
  const [cart, setCart] = useState<any[]>(() => {

    // const storagedCart = localStorage.getItem('@RocketShoes:cart')

    // if (storagedCart) {
    //   return JSON.parse(storagedCart);
    // }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      const stock = await api.get(`/stock/${productId}`);

      const stockAmount = stock.data.amount;
      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (amount > stockAmount) {
        console.log("Quantidade solicitada fora de estoque");
      }

      if (productExists) {
        productExists.amount = amount;
      } else {
        const product = await api.get(`/coffees/${productId}`);

        const newProduct = {
          ...product.data,
          amount: 1
        }
        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      setQuantityCart(updatedCart.length);
    } catch (err) {
      console.log("Erro de adição do produto")
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        setQuantityCart(updatedCart.length);
      } else {
        throw Error();
      }

    } catch (err) {
      console.log("Erro de remoção do produto")
    }
  }

  const handleProductsIncrement = (product: ListCoffeeProps) => {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1
    })
  }


  const handleProductDecrement = (product: ListCoffeeProps) => {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1
    })
  }


  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const stock = await api.get(`/stock/${productId}`);

      const stockAmount = stock.data.amount;

      if (amount > stockAmount) {
        console.log("Quantidade solicitada fora de estoque");
        return;
      }

      const updatedCart = [...cart];
      const productsExists = updatedCart.find(product => product.id === productId);

      if (productsExists) {
        productsExists.amount = amount;
        setCart(updatedCart);
      } else {
        throw Error();
      }

    } catch (err) { }
  }

  const orderAddress = (data: any) => {
    setOrder(data)
    console.log(order)
  }


  return (
    <CartContext.Provider value={{ order, cart, addProduct, quantityCart, removeProduct, updateProductAmount, handleProductDecrement, handleProductsIncrement, orderAddress }}>
      {children}
    </CartContext.Provider>
  )

}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}