import burger from '../../assets/icons/burger.svg';
import fone from '../../assets/icons/headset.svg';
import motoboy from '../../assets/icons/delivery.svg';

const Box = () => {
  return (
    <div className="w-96 h-80 bg-white rounded-xl shadow flex flex-wrap justify-center z-10 -mt-36 inset-x-0 mx-auto absolute">
      <div className="border-b border-yellow-950 border-opacity-10 flex mt-6">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center ">
          <img className="w-8 h-8 " src={burger} alt="" />
        </div>

        <div className="ml-4">
          <h1 className="opacity-80 text-stone-950 text-opacity-90 text-xl font-Lilita uppercase leading-snug">
            Arteisanal
          </h1>
          <p className="w-44 opacity-60 text-opacity-70 text-stone-950 font-Lato leading-tight">
            Nossas receitas são feitas com todo cuidado
          </p>
        </div>
      </div>

      <div className="border-b border-yellow-950 border-opacity-10 flex mt-4">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center ">
          <img className="w-8 h-8 " src={fone} alt="" />
        </div>
        <div className="ml-4">
          <h1 className="opacity-80 text-stone-950 text-opacity-90 text-xl font-Lilita uppercase leading-snug">
            Atendimento
          </h1>
          <p className="w-44 opacity-60 text-opacity-70 text-stone-950 font-Lato leading-tight">
            Totalmente personalizado
          </p>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center ">
          <img className="w-8 h-8 " src={motoboy} alt="" />
        </div>
        <div className="ml-4">
          <h1 className="opacity-80 text-stone-950 text-opacity-90 text-xl font-Lilita uppercase leading-snug">
            DELIVERY Speed
          </h1>
          <p className="w-44 opacity-60 text-opacity-70 text-stone-950 font-Lato leading-tight">
            Entregamos menos de 30 minutos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
