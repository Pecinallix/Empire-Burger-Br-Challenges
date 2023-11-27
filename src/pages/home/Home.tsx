import bannerHero from '../../assets/Banner mobile 1.png';
import HomeText from './HomeText';

const Home = () => {
  return (
    <div>
      <HomeText />
      <img
        src={bannerHero}
        alt="Logo de Hambúrguer com uma coroa"
        className="w-full"
      />
    </div>
  );
};

export default Home;
