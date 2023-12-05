import CardWoman from '../../assets/card-woman-eating.png';
import Depoimentos from '../depoimentos/Depoimentos';
import Instagram from '../instagram/Instagram';

import NossaEntregas from './NossaEntregas';

const BannerText = () => {
  return (
    <div className="bg-opacity-5 bg-yellow-950 flex flex-col items-center ">
      <div className="lg:flex lg:items-center">
        <img
          src={CardWoman}
          alt="Mulher comendo Hambúrguer"
          className="sm:w-96 w-80 pt-10 lg:mb-32"
        />
        <div className="lg:ml-8">
          <h1 className="w-80 text-stone-950 text-opacity-90 text-2xl font-Lilita uppercase leading-7 mb-2 mt-4 lg:mt-16">
            Atendimento{' '}
            <span className="w-52 h-7 bg-amber-500 rounded-md">
              personalizado
            </span>
          </h1>
          <p className="w-96 text-stone-950 text-opacity-70 text-base font-Lato leading-snug mb-2 lg:mb-5">
            Todos os nossos clientes são tratados como rei e<br /> rainha, com a
            nossa colunaria artesanal.
          </p>
          <button className="text-white text-base font-bold font-Lato leading-snug w-44 h-11 px-5 py-3 bg-red-600 rounded-md justify-start items-center gap-3 inline-flex mb-16">
            Cardápio Imperial
          </button>
        </div>
      </div>
      <Depoimentos />
      <Instagram />
      <NossaEntregas />
    </div>
  );
};

export default BannerText;
