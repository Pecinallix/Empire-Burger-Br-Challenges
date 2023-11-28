import './index.css';

import Menu from './components/header/Menu';
import Home from './pages/home/Home';
import Box from './components/box/Box';
import Ofertas from './pages/ofertas/Ofertas';
import Hora from './pages/ofertas/Hora';
import Mapa from './pages/localization/Mapa';
import Footer from './pages/footer/Footer';
import CardapioText from './pages/cardapio/CardapioText';
import BannerText from './pages/entrega/BannerText';

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Box />
      <Ofertas />
      <Hora />
      <CardapioText />
      <BannerText />
      <Mapa />
      <Footer />
    </>
  );
}

export default App;
