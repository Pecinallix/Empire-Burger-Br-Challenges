import hora from '../../assets/icons/timer.svg';

const Hora = () => {
  return (
    <div className="pt-16 bg-opacity-5  bg-yellow-950 backdrop-blur-sm">
      <div className="mx-auto w-96 h-28 bg-red-600 rounded-xl flex mt-9 items-center justify-center">
        <div className="w-20 h-20 bg-stone-950 bg-opacity-20 rounded-full flex items-center justify-center">
          <img src={hora} alt="" className=" w-10 h-12" />
        </div>
        <div className="border-l ml-2 border-yellow-950 border-opacity-50">
          <h1 className="text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-relaxed  ml-2">
            Horário de funcionamento
          </h1>
          <p className="w-56 text-white text-opacity-90 text-sm font-Lato leading-tight  ml-2 mt-2">
            Segunda a sexta: 17h00 - 23h00
          </p>
          <p className="w-56 text-white text-opacity-90 text-sm font-Lato leading-tight  ml-2">
            Sabado a Domíngo: 18h30 - 23h00
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center ">
        <p className="w-96 text-center text-stone-950 text-opacity-70 text-lg  font-Lato leading-relaxed">
          Não esqueça de marcar a gente no Instagram:
        </p>
        <h1 className="w-96 text-center text-red-600 text-4xl font-normal font-Lilita uppercase leading-7">
          #empireburger
        </h1>
      </div>
    </div>
  );
};

export default Hora;
