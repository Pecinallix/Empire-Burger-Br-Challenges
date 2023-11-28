import MenuDrop from '../../assets/icons/bars-solid 2.svg';

const MenuMobile = () => {
  return (
    <div className="lg:hidden">
      <button
        className="rounded w-10 h-10  bg-opacity-20 mr-3"
        onClick={mostrarMenu}
      >
        <img src={MenuDrop} alt="MenuDrop" />
      </button>
      <div className="flex justify-end">
        <ul
          id="menu"
          className="hidden bg-slate-50 opacity-90 rounded absolute p-2 mr-9 "
        >
          <li className="border-b mb-2 pb-1 text-yellow-950 text-lg font-Lato leading-relaxed cursor-pointer">
            Home
          </li>
          <li className="border-b mb-2 pb-1 text-yellow-950 text-lg font-Lato leading-relaxed cursor-pointer">
            Promoção
          </li>
          <li className="border-b mb-2 pb-1 text-yellow-950 text-lg font-Lato leading-relaxed cursor-pointer">
            Cardápio
          </li>
          <li className="border-b mb-2 pb-1 text-yellow-950 text-lg font-Lato leading-relaxed cursor-pointer">
            Comentário
          </li>
          <li className="text-yellow-950 text-lg font-Lato leading-relaxed cursor-pointer">
            Contato
          </li>
        </ul>
      </div>
    </div>
  );
};

const mostrarMenu = () => {
  document.getElementById('menu')?.classList.toggle('hidden');
};

export default MenuMobile;
