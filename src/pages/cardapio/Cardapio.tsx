import { useEffect, useState } from 'react';

interface CardapioBurger {
  ingredients: string;
  plate: string;
  price: number;
}

const Cardapio = () => {
  const [value, setValue] = useState<CardapioBurger[]>([]);

  useEffect(() => {
    fetch('https://api.brchallenges.com/api/empire-burger/menu')
      .then(async (response) => {
        const data = await response.json();
        setValue(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  const formattedCurrency = (price: number) => {
    const priceFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return priceFormatted.format(price);
  };

  return (
    <div className="w-full h-[465px] bg-yellow-950 flex flex-col justify-center items-center lg:h-[569px] lg:items-start lg:pl-8">
      <div>
        <h1 className="text-amber-500 text-2xl font-Lilita uppercase leading-7 mb-6 -mt-8  lg:hidden">
          Nossas especialidades
        </h1>
        <h1 className="hidden text-amber-500 text-2xl font-Lilita uppercase leading-7 mb-6 -mt-8 lg:flex">
          Cardápio imperial | Burger
        </h1>
      </div>

      {value.map((array, key) => (
        <div key={key}>
          <h1 className="w-96 text-orange-100 text-xl font-Lilita uppercase leading-snug mb-1">
            {array.plate} .................{' '}
            <span>{formattedCurrency(array.price)}</span>
          </h1>
          <p className="w-96 text-white text-opacity-90 text-sm  font-Lato leading-tight mb-4">
            {array.ingredients}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cardapio;
