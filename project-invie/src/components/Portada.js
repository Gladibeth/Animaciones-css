import React, { Component } from 'react';
import logo from '../images/invie.png';
import { connect } from 'react-redux'
import CCSTransitionGroup from 'react-addons-css-transition-group';
// esto son los datos que se reciben
function mapStateToProps(state) {
  return {
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated
  }
}

class Portada extends Component {
  render() {

    return (
      <section id="portada" className={`portada background ${this.props.isAnimated}`} >
        <header id="header" className="header contenedor">
          <figure className="logotipo">
            <img src={this.props.logo} srcset={this.props.logo} width="186" height="60" alt="Invie logotipo" />
          </figure>
          <span className="burguer-button icon-menu" id="burguer-button"></span>
          <nav className="menu" id="menu">
            <ul>
              {this.props.menu.map((item) => {
                return (

                  <li>
                    <a href={item.href}>{item.title}</a>
                  </li>
                )
              })}

            </ul>
          </nav>
          <CCSTransitionGroup
            transitionName="animationInOut"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}
          >
            {
              !this.props.isAnimated &&


              <div className="contenedor" key="portada">
                <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                <a className="button" href="#guitarras">Conoce mas</a>
              </div>
            }
          </CCSTransitionGroup>
        </header>

      </ section>
    );
  }
}

// export default Portada;
export default connect(mapStateToProps)(Portada);