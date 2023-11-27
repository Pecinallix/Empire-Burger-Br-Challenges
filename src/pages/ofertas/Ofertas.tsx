import prime from '../../assets/ofertas/oferta-1.png';
import batata from '../../assets/ofertas/oferta-2.png';
import sorvete from '../../assets/ofertas/oferta-3.png';

const Ofertas = () => {
  return (
    <div className="pt-64 bg-yellow-950 bg-opacity-5 grid grid-rows-1 justify-center backdrop-blur-sm ">
      <div>
        <h1 className="w-96 text-stone-950 text-opacity-90 text-2xl font-Lilita uppercase leading-7 mb-2">
          Ofertas especiais
        </h1>
        <p className=" w-96 text-stone-950 text-opacity-70 text-base  font-Lato leading-snug  mb-2">
          Aproveite todas as nossas ofertas, fiquei de olho porque sempre
          estamos mudando o nosso cardapio.
        </p>
      </div>

      <div>
        <div>
          <h2 className="text-white text-opacity-90 text-xl font-Lilita uppercase leading-snug absolute mt-3 ml-5">
            BURGER PRIME+BATATA
          </h2>
          <span className="  text-white text-opacity-70 text-lg font-Lato leading-relaxed absolute mt-8 ml-5">
            250g
          </span>
          <img src={prime} alt="" className=" w-96 h-54 rounded-xl " />
          <span className="  text-white text-opacity-70 text-xs font-normal font-Lato leading-3 absolute -mt-12 ml-80">
            Apenas <br />
            <span className="text-white text-opacity-90 text-xl font-normal font-Lilita uppercase">
              HOJE
            </span>
          </span>
        </div>

        <div className="mt-2">
          <h2 className="  text-stone-950 text-opacity-90 text-xl font-Lilita uppercase leading-snug absolute mt-3 ml-5">
            BATATA
          </h2>
          <span className=" text-stone-950 text-opacity-70 text-lg font-Lato leading-relaxed absolute mt-8 ml-5">
            150g
          </span>
          <img src={batata} alt="" className=" w-96 h-54 rounded-xl " />
        </div>

        <div className="mt-2">
          <h2 className="  text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-snug absolute mt-3 ml-5">
            Sorvete
          </h2>
          <span className="  text-stone-950 text-opacity-70 text-lg font-Lato leading-relaxed absolute mt-8 ml-5">
            30g
          </span>
          <img src={sorvete} alt="" className=" w-96 h-54 rounded-xl " />
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
