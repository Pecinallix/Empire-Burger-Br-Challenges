import Cardapio from './Cardapio';

const CardapioText = () => {
  return (
    <div>
      <div className="bg-home-banner h-60">
        <div className="ml-6 pt-10">
          <h1 className="w-96 text-yellow-950 text-2xl font-Lilita uppercase leading-7 mb-2">
            {' '}
            Escolha o seu combo imperial,
            <span className="h-8 bg-amber-500 rounded text-2xl  font-Lilita uppercase">
              {' '}
              peça agora!
            </span>
          </h1>
          <p className="w-96 text-stone-950 text-opacity-70 text-sm  font-Lato leading-tight mb-5">
            Temos vários tipos de pratos para a nossa realeza, fique <br />{' '}
            esperto porque sempre temos promoção!
          </p>
          <div>
            <button className="text-center text-white text-base font-bold font-Lato leading-snug w-52 h-11 px-5 py-2 bg-red-600 rounded-md">
              Ver Cardápio Completo
            </button>
          </div>
        </div>
      </div>
      <Cardapio />
    </div>
  );
};

export default CardapioText;
