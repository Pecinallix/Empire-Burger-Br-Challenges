const Mapa = () => {
  return (
    <div className="pt-16 bg-opacity-5  bg-yellow-950 backdrop-blur-sm flex flex-col text-center items-center">
      <h1 className="w-96  text-stone-950 text-opacity-90 text-2xl font-normal font-Lilita uppercase leading-7">
        Onde ficar o nosso castelo
      </h1>
      <h2 className="w-96 mb-4 text-stone-950 text-opacity-70 text-base font-normal font-Lato leading-snug">
        Estaremos de portas abertas para a nossa realeza.
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8743.04166844386!2d-42.04316074789492!3d-22.876598821109756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97052a6353bdaf%3A0xbbdaa49b151950c2!2sBurger%20King%20-%20Shopping%20Park%20Lagos%20Cabo%20Frio!5e0!3m2!1spt-BR!2sbr!4v1700950151080!5m2!1spt-BR!2sbr"
        loading="lazy"
        className="w-full h-52 "
      ></iframe>
    </div>
  );
};

export default Mapa;
