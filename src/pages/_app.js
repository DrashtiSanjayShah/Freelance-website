import "../styles/globals.css";
import {NavBar, Footer} from "../../components/compindex";
// import {nftMarketProvider} from '../../Context/nftMarketContext';




const MyApp = ({ Component, pageProps }) => {
   return (
   <div>
     
      <NavBar />
      
      <Component {...pageProps} />
      <Footer />
      {/* </nftMarketProvider> */}
   </div>
   );
};
export default MyApp;