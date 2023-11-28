import coroa from '../../assets/Frame.svg';
import logo from '../../assets/Empire burger.png';
import ifood from '../../assets/icons/ifood.svg';
import insta from '../../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <div className="h-80 bg-white flex flex-col text-center items-center">
      <div className="flex items-center justify-center gap-2 border-b border-yellow-950 border-opacity-10 w-96 ">
        <img src={coroa} alt="Coroa Vermelha" className="my-3" />
        <img src={logo} alt="Empire burger" className="my-3" />
      </div>
      <div className="flex  justify-center gap-2 border-b border-yellow-950 border-opacity-10 w-96">
        <img src={ifood} alt="Coroa Vermelha" className="my-3 w-10 h-7 mr-2" />
        <img src={insta} alt="Empire burger" className="my-3 w-7 h-7" />
      </div>
      <div className=" border-b border-yellow-950 border-opacity-10 w-96 mb-3">
        <ul>
          <li className="text-yellow-950 text-lg font-bold font-Lato leading-relaxed my-3">
            Home
          </li>
          <li className="text-yellow-950 text-lg font-normal font-Lato leading-relaxed mb-3">
            Localização
          </li>
          <li className="text-yellow-950 text-lg font-normal font-Lato leading-relaxed mb-3">
            Cardapio
          </li>
          <li className="text-yellow-950 text-lg font-normal font-Lato leading-relaxed mb-3">
            Sobre
          </li>
        </ul>
      </div>
      <div>
        <span className="text-slate-950 text-opacity-70 text-sm font-bold font-Inter leading-5">
          2022 © EmpireBurger.{' '}
          <span className="text-slate-950 text-opacity-30 text-sm font-normal font-Inter leading-5 ">
            Todos os direitos reservados.
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
