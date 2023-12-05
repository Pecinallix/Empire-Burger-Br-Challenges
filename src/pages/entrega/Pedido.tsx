import Phone from '../../assets/icons/phone.svg';
const Pedido = () => {
  return (
    <div className="sm:w-96 w-80 h-72 bg-red-600 rounded-xl flex flex-col items-center justify-center lg:w-[900px] lg:h-28 lg:flex-row">
      <div className="w-24 h-24 left-0 bg-stone-950 bg-opacity-20 rounded-full flex justify-center items-center mb-2 lg:mx-2 lg:w-32 lg:h-20 ">
        <img src={Phone} alt="Celular" className="lg:w-11 lg:h-11" />
      </div>

      <div className="flex flex-col items-center text-center border-t border-black border-opacity-20 w-80 lg:flex-col lg:items-start lg:border-t-0 lg:border-l lg:w-full">
        <h1 className="w-80 text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-relaxed mb-1">
          faça o seu pedido agora mesmo!
        </h1>
        <p className="text-white text-opacity-90 text-sm font-Lato leading-tight mb-4 lg:w-96">
          Venha saborear a melhor experiência de hamburguenses artesanal do {''}
          <span className="text-white text-opacity-90 text-sm font-bold font-Lato leading-tight">
            Empires Burger
          </span>
          , com temática medieval!
        </p>
      </div>
      <button className="w-72 h-10 px-4 py-2 bg-orange-100 rounded justify-center items-center gap-2.5 inline-flex text-red-600 text-base font-black font-Lato uppercase leading-snug lg:mr-9">
        Solicitar Pedido
      </button>
    </div>
  );
};

export default Pedido;
