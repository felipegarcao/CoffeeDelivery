export interface ListCoffeeProps {
  id: number;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
  image: string;
  amount: number;
  type: Array<{
    id: string;
    name: string;
  }>
}