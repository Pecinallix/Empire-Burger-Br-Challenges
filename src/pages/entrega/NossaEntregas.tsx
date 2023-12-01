import CardPhone from '../../assets/card-phone.png';
import Fone from '../../assets/icons/whatsapp.svg';
import Entrega from '../../assets/icons/delivery.svg';
import Sorvete from '../../assets/icons/ice-cream.svg';
import Ifood from '../../assets/icons/ifood.svg';
import Pedido from './Pedido';

const NossaEntregas = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-row lg:items-center border-t border-stone-950 border-opacity-10">
        <div>
          <img
            src={CardPhone}
            alt="Hambúrguer saindo de um celular"
            className=" pt-16 w-96 lg:mr-8"
          />
        </div>
        <div className="mt-10">
          <h1 className="text-stone-950 text-opacity-90 text-2xl font-normal font-Lilita uppercase leading-7 mb-4">
            Nossas entregas
          </h1>

          <div className="w-96 h-24 bg-white bg-opacity-70 rounded-xl shadow flex items-center justify-center mb-2 lg:w-[450px] lg:justify-start lg:pl-4">
            <span className="w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center">
              <img src={Fone} alt="Whatsapp" className="w-8 h-8" />
            </span>
            <div className="border-l border-opacity-10 border-black ml-6 pl-6">
              <h2 className="text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed">
                Whatsapp
              </h2>
              <p className="w-56 text-stone-950 text-opacity-70 text-sm font-Lato leading-tight lg:w-80">
                Vamos direto ao ponto, sem perder tempo!
              </p>
            </div>
          </div>

          <div className="w-96 h-24 bg-white bg-opacity-70 rounded-xl shadow flex items-center justify-center mb-2 lg:w-[450px] lg:justify-start lg:pl-4">
            <span className="w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center">
              <img src={Entrega} alt="Whatsapp" className="w-8 h-8" />
            </span>
            <div className="border-l border-opacity-10 border-black ml-6 pl-6">
              <h2 className="text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed">
                Entrega
              </h2>
              <p className="w-56 text-stone-950 text-opacity-70 text-sm font-Lato leading-tight lg:w-80">
                Entregamos em menos de 45 minutos na porta da sua casa!
              </p>
            </div>
          </div>

          <div className="w-96 h-24 bg-white bg-opacity-70 rounded-xl shadow flex items-center justify-center mb-2 lg:w-[450px] lg:justify-start lg:pl-4">
            <span className="w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center">
              <img src={Sorvete} alt="Whatsapp" className="w-8 h-8" />
            </span>
            <div className="border-l border-opacity-10 border-black ml-6 pl-6">
              <h2 className="text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed">
                Sobremesa
              </h2>
              <p className="w-56 text-stone-950 text-opacity-70 text-sm font-Lato leading-tight lg:w-80">
                Pedidos acima de 100 reais, ganham brindes.
              </p>
            </div>
          </div>

          <div className="w-96 h-24 bg-white bg-opacity-70 rounded-xl shadow flex items-center justify-center mb-16 lg:w-[450px] lg:justify-start lg:pl-4">
            <span className="w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center">
              <img src={Ifood} alt="Whatsapp" className="w-8 h-8" />
            </span>
            <div className="border-l border-opacity-10 border-black ml-6 pl-6">
              <h2 className="text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed">
                Ifood
              </h2>
              <p className="w-56 text-stone-950 text-opacity-70 text-sm font-Lato leading-tight lg:w-80">
                Nossa Loja é Top 1 da região!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Pedido />
    </div>
  );
};

export default NossaEntregas;
