import logo from '../../assets/logo.png';
import MenuMobile from './MenuMobile';

const Menu = () => {
  return (
    <div className=" w-full h-16 flex bg-yellow-950 bg-opacity-5 backdrop-blur justify-between items-center fixed z-50">
      <img src={logo} alt="Logo" className="h-9 ml-3" />
      <MenuMobile />
    </div>
  );
};

export default Menu;
