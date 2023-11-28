import CardWoman from '../../assets/card-woman-eating.png';

import NossaEntregas from './NossaEntregas';

const BannerText = () => {
  return (
    <div className="bg-opacity-5  bg-yellow-950 flex flex-col items-center">
      <img
        src={CardWoman}
        alt="Mulher comendo Hambúrguer"
        className="w-96 pt-10"
      />
      <div className="ml-4 mt-4">
        <h1 className="w-80 text-stone-950 text-opacity-90 text-2xl font-Lilita uppercase leading-7 mb-2">
          Atendimento{' '}
          <span className="w-52 h-7 bg-amber-500 rounded-md">
            personalizado
          </span>
        </h1>
        <p className="w-96 text-stone-950 text-opacity-70 text-base font-Lato leading-snug mb-2">
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
        <button className="text-white text-base font-bold font-Lato leading-snug w-44 h-11 px-5 py-3 bg-red-600 rounded-md justify-start items-center gap-[13.04px] inline-flex mb-16">
          Cardápio Imperial
        </button>
        <NossaEntregas />
      </div>
    </div>
  );
};

export default BannerText;
