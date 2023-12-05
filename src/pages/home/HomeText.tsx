const HomeText = () => {
  return (
    <div className="absolute top-24 sm:top-40 lg:top-24 sm:ml-32 ml-11 ">
      <p className="text-stone-950 text-opacity-90 text-lg md:text-3xl  font-bold font-Lato">
        Uma nova experiência!
      </p>

      <h1 className="text-yellow-950 text-6xl md:text-7xl uppercase font-Lilita ">
        King{' '}
        <span className="text-amber-500 text-6xl md:text-7xl uppercase font-Lilita">
          burger
        </span>
      </h1>

      <h2 className="text-stone-950 text-opacity-70 text-base md:text-xl font-Lato">
        Para quem tem um{' '}
        <span className="text-stone-950 text-opacity-70 font-black bg-amber-500 p-1 rounded-md font-Lato">
          Apetite de um REI!
        </span>
      </h2>
      <button className="w-36 h-10 px-4 py-2 bg-red-600 rounded-md justify-start items-center gap-3 mt-4 text-white text-base font-bold font-Lato leading-snug">
        Comprar Agora
      </button>
    </div>
  );
};

export default HomeText;
