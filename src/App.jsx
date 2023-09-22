import "bootstrap/dist/css/bootstrap.min.css";
import { AllRoutes } from './routes';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './layout/Layout.css';
import 'stylesheet/Styles.css';



function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <AllRoutes />
  );
}

export default App;
