const Cardapio = () => {
  const number = 49.99;

  const newNumbr = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);

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
      <div>
        <h1 className="w-96 text-orange-100 text-xl font-Lilita uppercase leading-snug mb-1">
          Classic burger ................................{' '}
          <span>{newNumbr}</span>
        </h1>
        <p className="w-96 text-white text-opacity-90 text-sm  font-Lato leading-tight mb-4">
          Hamburguer bonino 160g, Molho, Bacon, Queijo prato, Peito de peru,
          Tomate, Alface, Servidor do pão de batata.
        </p>
      </div>
      <div>
        <h1 className="w-96 text-orange-100 text-xl font-Lilita uppercase leading-snug mb-1 ">
          Special big salada burger ........ <span>{newNumbr}</span>
        </h1>
        <p className="w-96 text-white text-opacity-90 text-sm  font-Lato leading-tight mb-4">
          Hamburguer Vegan bonino 160g, Molho, Picles, Queijo prato, Peito de
          peru, Tomate, Alface, Servidor do pão de batata.
        </p>
      </div>
      <div>
        <h1 className="w-96 text-orange-100 text-xl font-Lilita uppercase leading-snug mb-1">
          special big burger ........................ <span>{newNumbr}</span>
        </h1>
        <p className="w-96 text-white text-opacity-90 text-sm  font-Lato leading-tight mb-4">
          Hamburguer bonino 160g, Molho, Bacon, Queijo prato, Peito de peru,
          Tomate, Alface, Servidor do pão de batata.
        </p>
      </div>
      <div>
        <h1 className="w-96 text-orange-100 text-xl font-Lilita uppercase leading-snug mb-1">
          Mexican burger ............................. <span>{newNumbr}</span>
        </h1>
        <p className="w-96 text-white text-opacity-90 text-sm  font-Lato leading-tight">
          Hamburguer bonino 160g, Molho, Bacon, Queijo prato, Peito de peru,
          Tomate, Alface, Servidor do pão de batata.
        </p>
      </div>
    </div>
  );
};

export default Cardapio;
