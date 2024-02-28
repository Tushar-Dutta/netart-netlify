import "./App.css";
import Header from './Header.jsx';
import Companydetails from "./Companydetails.jsx";
import Singleline from "./Singleline.jsx";
import Productscompany from "./Productscompany.jsx";
import Footer from "./Footer.jsx";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>C.R.I Pumps</title>
        <link rel="canonical" href="http://example.com/example" />
      </Helmet>
      <div>
        <Header />
        <Companydetails />
        <Singleline />
        <Productscompany />
      </div>
      <Footer />
    </div>
  );
}

export default App;
