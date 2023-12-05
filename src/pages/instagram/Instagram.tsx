import instaBurguer1 from '../../assets/instagram/burger1.png';
import instaBurguer2 from '../../assets/instagram/burger2.png';
import instaBurguer3 from '../../assets/instagram/burger3.png';
import instaBurguer4 from '../../assets/instagram/burger4.png';
import instaBurguer5 from '../../assets/instagram/three-burger.png';
import instaBurguer6 from '../../assets/instagram/woman-burger.png';
import instaBurguer7 from '../../assets/instagram/burger-chips.png';
import instaBurguer8 from '../../assets/instagram/burger.png';

const Instagram = () => {
  return (
    <div className="w-full">
      <div className="text-center mx-auto mb-4 mt-32 w-80 lg:w-[450px] 2xl:w-[650px]">
        <h1 className="text-stone-950 text-opacity-90 text-xl font-Lilita uppercase leading-9 lg:text-3xl">
          Publicações do instagram
        </h1>
        <p className="text-stone-950 text-opacity-70 font-Lato leading-snug">
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
      </div>
      <div className="flex w-[100vw] h-[15vh] lg:h-[20vh] 2xl:h-[30vh] justify-center overflow-x-hidden bg-black bg-opacity-80 ">
        <img src={instaBurguer1} alt="Hambúrguer" />
        <img src={instaBurguer2} alt="Hambúrguer" />
        <img src={instaBurguer3} alt="Hambúrguer" />
        <img src={instaBurguer4} alt="Hambúrguer" />
        <img src={instaBurguer5} alt="Hambúrguer" />
        <img src={instaBurguer6} alt="Hambúrguer" />
        <img src={instaBurguer7} alt="Hambúrguer" />
        <img src={instaBurguer8} alt="Hambúrguer" />
      </div>
      <div className="h-6 overflow-hidden bg-amber-500 flex items-center -mt-[1px] lg:h-12">
        <h1 className="text-stone-950 text-opacity-90 text-1xl font-Lilita uppercase leading-7 animate-letreiro whitespace-nowrap lg:text-2xl">
          <span className="inline-block whitespace-nowrap">
            • #empireburger • #empireburger • #empireburger • #empireburger •
            #empireburger • #empireburger • #empireburger • #empireburger •
            #empireburger • #empireburger • #empireburger • #empireburger •
            #empireburger • #empireburger • #empireburger • #empireburger •
            #empireburger • #empireburger • #empireburger • #empireburger •
            #empireburger • #empireburger • #empireburger
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Instagram;
