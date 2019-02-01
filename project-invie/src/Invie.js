import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada.js';
import Guitarras from './components/Guitarras.js';
import Footer from './components/Footer.js';


class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/*Portada*/}
        {/*<Portada menu={data.menu} logo={data.logoPortada}></Portada>*/}


        <Portada></Portada>
        {/*Guitarras*/}
        {/*<Guitarras guitarras={data.guitarras}></Guitarras>*/}


        <Guitarras></Guitarras>
        {/*Footer*/}

        <Footer></Footer>
        {/* <h1>Hola Mundo</h1> */}
      </section>
    );
  }
}

export default App;