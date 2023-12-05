import { useEffect, useState } from 'react';

import hora from '../../assets/icons/timer.svg';

const Hora = () => {
  const [funcionamento, setFuncionamento] = useState('bg-red-600');

  useEffect(() => {
    const tempo = setTimeout(() => {
      const time = new Date().getHours();
      const minutos = new Date().getMinutes();
      const semana = new Date().getDay();

      if (time >= 17 && time < 23) {
        if ((semana === 6 || semana === 0) && time >= 18 && minutos >= 30) {
          setFuncionamento('bg-green-600');
        } else setFuncionamento('bg-green-600');
      } else setFuncionamento('bg-red-600');
    }, 1000);
    return () => clearTimeout(tempo);
  }, []);

  return (
    <div className="pt-16 bg-opacity-5  bg-yellow-950 backdrop-blur-sm lg:flex lg:items-center lg:pl-4 lg:justify-center lg:pb-16">
      <div
        className={`mx-auto w-96 h-28 rounded-xl flex mt-9 items-center justify-center lg:mx-0 lg:w-[570px] lg:h-32 lg:justify-start ${funcionamento}`}
      >
        <div className="w-20 h-20 bg-stone-950 bg-opacity-20 rounded-full flex items-center justify-center lg:w-24 lg:h-24 lg:ml-6">
          <img src={hora} alt="" className=" w-12 h-12 lg:w-16 lg:h-16" />
        </div>

        <div className="border-l ml-2 border-yellow-950 border-opacity-50  lg:flex lg:flex-col lg:mb-4 lg:gap-1">
          <h1 className="text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-relaxed ml-2 lg:text-2xl ">
            Horário de funcionamento
          </h1>
          <p className="w-56 text-white text-opacity-90 text-sm font-Lato leading-tight ml-2 my-2">
            Segunda a sexta: <span className="lg:font-bold">17:00 - 23:00</span>
          </p>
          <p className="w-56 text-white text-opacity-90 text-sm font-Lato leading-tight  ml-2">
            Sabado a Domíngo:{' '}
            <span className="lg:font-bold">18:30 - 23:00</span>
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center ">
        <p className="w-96 text-center text-stone-950 text-opacity-70 text-lg  font-Lato leading-relaxed mt-16">
          Não esqueça de marcar a gente no Instagram:
        </p>
        <h1 className="w-96 text-center text-red-600 text-4xl font-normal font-Lilita uppercase leading-7 mb-16">
          #empireburger
        </h1>
      </div>
    </div>
  );
};

export default Hora;
