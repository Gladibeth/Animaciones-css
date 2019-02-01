import React, { Component } from 'react';
import { connect } from 'react-redux'
import CCSTransitionGroup from 'react-addons-css-transition-group';


function mapStateToProps(state) {
  return {
    guitarras: state.guitarras
  }
}
class Guitarras extends Component {
  render() {

    return (
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        {
          this.props.guitarras.map((guitarra) => {
            return (
              <article className="guitarra">
                <CCSTransitionGroup
                  transitionName="flicker"
                  transitionEnterTimeOut={500}
                  transitionLeaveTimeOut={500}

                >

                  <img className="guitarra-image" data-src={guitarra.image} key={guitarra.image} src={guitarra.image} alt={guitarra.alt} width="350" />
                </CCSTransitionGroup>
                <CCSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeOut={300}
                  transitionLeaveTimeOut={300}
                >

                  <div className="contenedor-guitarra-a" key={guitarra.name}>
                    <h3 className="guitarra-title">{guitarra.name}</h3>

                    <ol>
                      {
                        guitarra.features.map((feature, index) => {
                          return (

                            <li key={index}>{feature}</li>

                          )
                        })}
                    </ol>
                  </div>
                </CCSTransitionGroup>
              </article>
            )
          })
        }


      </section>
    );
  }
}

export default connect(mapStateToProps)(Guitarras);