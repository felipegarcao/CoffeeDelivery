import { useEffect, useState } from "react";

import { BsCartPlusFill } from "react-icons/bs";
import { ListCoffeeProps } from "../../types/ListCoffee";
import { api } from "../../services/api";

interface Counters {
  [id: number]: number;
}

export function ListCoffee() {

  const [list, setList] = useState<ListCoffeeProps[]>([]);

  useEffect(() => {
    api.get('/coffees').then(response => {
      setList(response.data)
    })
  }, []);





  return (
    <div className="container mx-auto my-10">
      <h3 className="text-3xl p-3">Nossos cafés</h3>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-5 p-3">
        {list.map((item) => (
          <div className="rounded-card-order bg-base-card p-3" key={item.name}>
            <div className="flex flex-col items-center">
              <img src={item.image} alt="Café" className="mt-[-30px] mb-4" />
              <div className="flex items-center gap-2">
                {
                  item.type.map((x, index) => (
                    <div className="bg-yellow-light text-yellow-dark px-2 py-1 uppercase rounded mb-2" key={item.name}>
                      <span className="text-xs">{x.name}</span>
                    </div>
                  ))
                }
              </div>
              <h4 className="text-lg">{item.name}</h4>
              <p className="text-center text-base-label text-sm">
                {item.description}
              </p>
              <div className="flex items-center justify-between w-9/12 mt-8">
                <span>
                  R$ <strong className="text-lg">{item.price}</strong>
                </span>
                <div className="flex items-center gap-2">
                  <div className="bg-base-button rounded p-2 flex items-center gap-3">
                    <button className="text-purple text-md font-bold" >
                      +
                    </button>
                    <span>1</span>
                    <button className="text-purple text-md font-bold">
                      -
                    </button>
                  </div>
                  <button
                    className="bg-purple-dark text-white p-3 rounded"
                  >
                    <BsCartPlusFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
