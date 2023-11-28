import Phone from '../../assets/icons/phone.svg';
const Pedido = () => {
  return (
    <div className="w-96 h-72 bg-red-600 rounded-xl flex flex-col items-center justify-center">
      <div className="w-24 h-24 left-0 bg-stone-950 bg-opacity-20 rounded-full flex justify-center items-center mb-2">
        <span>
          <img src={Phone} alt="Celular" />
        </span>
      </div>

      <div className="flex flex-col items-center text-center border-t border-black border-opacity-20 w-80 mt-2 ">
        <h1 className="w-80 text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-relaxed mb-1">
          faça o seu pedido agora mesmo!
        </h1>
        <p className="text-white text-opacity-90 text-sm font-Lato leading-tight mb-4">
          Venha saborear a melhor experiência de hamburguenses artesanal do {''}
          <span className="text-white text-opacity-90 text-sm font-bold font-Lato leading-tight">
            Empires Burger
          </span>
          , <br />
          com temática medieval!
        </p>
        <button className="w-80 h-10 px-4 py-2 bg-orange-100 rounded justify-center items-center gap-2.5 inline-flex text-center text-red-600 text-base font-black font-Lato uppercase leading-snug">
          Solicitar Pedido
        </button>
      </div>
    </div>
  );
};

export default Pedido;
