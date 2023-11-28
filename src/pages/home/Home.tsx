import bannerHero from '../../assets/Banner mobile 1.png';
import banner from '../../assets/banner-hero.png';
import HomeText from './HomeText';

const Home = () => {
  return (
    <div id="home">
      <HomeText />
      <img
        src={bannerHero}
        alt="Logo de Hambúrguer com uma coroa"
        className="w-full lg:hidden"
      />
      <img
        src={banner}
        alt="Logo de Hambúrguer com uma coroa"
        className="w-full h-96 xl:h-[545px] hidden lg:block"
      />
    </div>
  );
};

export default Home;
