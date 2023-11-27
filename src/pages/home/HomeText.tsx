import Botao from '../../util/Botao';

const HomeText = () => {
  return (
    <div className="absolute top-24 ml-6">
      <p className="text-stone-950 text-opacity-90 text-lg font-bold font-Lato">
        Uma nova experiência!
      </p>

      <h1 className="text-yellow-950 text-6xl uppercase font-Lilita ">
        King{' '}
        <span className="text-amber-500 text-6xl uppercase font-Lilita">
          burger
        </span>
      </h1>

      <h2 className="text-stone-950 text-opacity-70 text-base font-Lato">
        Para quem tem um{' '}
        <span className="text-stone-950 text-opacity-70 font-black bg-amber-500 p-1 rounded-md font-Lato">
          Apetite de um REI!
        </span>
      </h2>
      <Botao>Comprar Agora</Botao>
    </div>
  );
};

export default HomeText;
