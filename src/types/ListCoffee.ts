export interface ListCoffeeProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: Array<{
    id: string;
    name: string;
  }>
}