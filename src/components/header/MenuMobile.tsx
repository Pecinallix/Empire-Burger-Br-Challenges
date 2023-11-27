import MenuDrop from '../../assets/icons/bars-solid 2.svg';

const MenuMobile = () => {
  return (
    <button className="rounded w-8 h-8 bg-opacity-20 mr-3 ">
      <img src={MenuDrop} alt="MenuDrop" />
    </button>
  );
};

export default MenuMobile;
