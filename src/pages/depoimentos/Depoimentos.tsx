import Carrousel from './Carrousel ';

const Depoimentos = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="mb-4 border-t border-stone-950 border-opacity-10 pt-16">
        <h1 className="w-80 text-stone-950 text-opacity-90 text-2xl font-normal font-Lilita uppercase leading-7">
          Nossa Realeza
        </h1>
        <p className="w-80 text-stone-950 text-opacity-70 text-base font-Lato leading-snug">
          A satisfação de nossos clientes em primeiro lugar!
        </p>
      </div>
      <Carrousel />
    </div>
  );
};

export default Depoimentos;
