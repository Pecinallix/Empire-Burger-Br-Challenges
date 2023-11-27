const Botao = ({ children }: any) => {
  return (
    <button className="w-36 h-11 px-4 py-1 bg-red-600 rounded justify-center items-center text-white mt-3 font-Lato">
      {children}
    </button>
  );
};

export default Botao;
