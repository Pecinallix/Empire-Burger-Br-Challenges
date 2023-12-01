import prime from '../../assets/ofertas/oferta-1.png';
import batata from '../../assets/ofertas/oferta-2.png';
import sorvete from '../../assets/ofertas/oferta-3.png';

const Ofertas = () => {
  return (
    <div className="pt-64 bg-yellow-950 bg-opacity-5 grid grid-cols-1 lg:grid-cols-3 backdrop-blur-sm lg:pt-32 lg:pl-4 gap-4">
      {/* Texto */}
      <div className="ml-4 lg:ml-0 lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:self-end">
        <h1 className="w-96 text-stone-950 text-opacity-90 text-2xl font-Lilita uppercase leading-7 mb-1 lg:w-[470px] lg:text-3xl">
          Ofertas especiais
        </h1>
        <p className="w-96 text-stone-950 text-opacity-70 text-base font-Lato leading-snug mb-2 lg:w-[777px]">
          Aproveite todas as nossas ofertas, fiquei de olho porque sempre
          estamos mudando o nosso cardapio.
        </p>
      </div>
      {/* Burguer */}
      <div className="mx-4 lg:mx-0 lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:row-span-2 ">
        <h2 className="text-white text-opacity-90 text-xl font-Lilita uppercase leading-snug absolute mt-3 ml-5">
          BURGER PRIME+BATATA
        </h2>

        <span className="text-white text-opacity-70 text-lg font-Lato leading-relaxed absolute mt-8 ml-5">
          250g
        </span>
        <img
          src={prime}
          alt="Hambúrguer com Batata frita"
          className="w-full h-54 rounded-xl lg:w-full lg:h-full"
        />
        <span className="  text-white text-opacity-70 text-xs font-normal font-Lato leading-3 absolute -mt-16 ml-80 lg:ml-[550px]">
          Apenas <br />
          <span className="text-white text-opacity-90 text-xl font-normal font-Lilita uppercase">
            HOJE
          </span>
        </span>
      </div>
      {/* Batata */}
      <div className="mx-4 lg:mx-0 lg:mt-0 lg:mr-4 lg:col-start-3 lg:row-start-2">
        <h2 className="  text-stone-950 text-opacity-90 text-xl font-Lilita uppercase leading-snug absolute mt-3 ml-5">
          BATATA
        </h2>
        <span className=" text-stone-950 text-opacity-70 text-lg font-Lato leading-relaxed absolute mt-8 ml-5">
          150g
        </span>
        <img
          src={batata}
          alt="Batata Frita"
          className=" w-full h-full rounded-xl lg:w-full"
        />
      </div>
      {/* Sorvete */}
      <div className="mx-4 lg:mx-0 lg:col-start-3 lg:row-start-3 lg:mr-4">
        <h2 className="text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-snug absolute mt-3 ml-5">
          Sorvete
        </h2>
        <span className="text-stone-950 text-opacity-70 text-lg font-Lato leading-relaxed absolute mt-8 ml-5">
          30g
        </span>
        <img
          src={sorvete}
          alt="Sorvete"
          className="w-full h-full rounded-xl lg:w-full"
        />
      </div>
    </div>
  );
};

export default Ofertas;
