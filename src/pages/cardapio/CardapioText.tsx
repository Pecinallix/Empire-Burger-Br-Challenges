import Cardapio from './Cardapio';

const CardapioText = () => {
  return (
    <div className="lg:flex lg:items-center flex flex-col lg:flex-row">
      <div className="bg-home-banner h-60 lg:bg-home-banner-int lg:h-[570px] lg:w-full  lg:flex lg:flex-col lg:justify-center lg:items-end lg:bg-cover flex justify-center">
        <div className="ml-6 pt-10">
          <h1 className="text-yellow-950 text-2xl font-Lilita uppercase leading-7 mb-2 lg:text-black xl:text-yellow-950">
            {' '}
            Escolha o seu combo
            <br /> imperial,
            <span className="h-8 bg-amber-500 rounded text-2xl  font-Lilita uppercase">
              {' '}
              peça agora!
            </span>
          </h1>
          <p className="w-96 text-stone-950 text-opacity-70 text-sm  font-Lato leading-tight mb-5 lg:text-black">
            Temos vários tipos de pratos para a nossa realeza, fique <br />{' '}
            esperto porque sempre temos promoção!
          </p>
          <button className="text-center text-white text-base font-bold font-Lato leading-snug w-52 h-11 px-5 py-2 bg-red-600 rounded-md">
            Ver Cardápio Completo
          </button>
        </div>
      </div>
      <Cardapio />
    </div>
  );
};

export default CardapioText;
