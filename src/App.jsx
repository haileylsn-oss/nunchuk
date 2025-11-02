
import ConnectorApp from "./components/Connect/ConnectorApp";
import Eco from "./components/Eco/Eco";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Blog from "./components/Progress/blog";

import Progress from "./components/Progress/Progress";
import WalletPage from "./components/Progress/wallet";
import WalletSections from "./components/Progress/wallet3";

const App = () => {
  return (
    <>
      
          <Hero />
          <ConnectorApp/>
          <Eco/>
          <Progress/>
          <Blog/>
         <WalletPage/>
          <WalletSections/>
     
   
    
        <Footer />
      
    </>
  );
};

export default App;
