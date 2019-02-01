import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './css/invie.css';
import './css/animations.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import logoPortada from './images/invie.png';
import logoSlice from './images/slice.svg';

import easterA from './images/easter-a.jpg'
import easterB from './images/easter-b.jpg'



const initialState = {
  isAnimated: false,
  menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
    {
      href: '#guitarras',
      title: 'Guitarras'
    },
    {
      href: '#precios',
      title: 'Precios'
    },
    {
      href: 'Hola.html',
      title: 'Don´t click me'
    }
  ],

  logoPortada: logoPortada,
  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como rockstar',
      ]
    }
  ]

}


function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PROPS': {
      // cambia el estado incial
      const newProps = action.payload.props;
      // retorna nuevo estado
      return {
        ...state, ...newProps
      }

    }
    default:
      return state

  }

}
// const store = createStore(reducer, initialState);
const store = createStore(reducer, initialState);

const easter = {
  isAnimated: 'is-animated',
  menu: [

  ],


  guitarras: [
    {
      image: easterA,
      alt: 'Guitarra Estrella',
      name: 'Invie Estrella',
      features: [
        'Lista para copiar los Simpsons',
        'Aire puro',
        'Chistes malos',
      ]
    },
    {
      image: easterB,
      alt: 'Guitarra Gladibeth',
      name: 'Invie Gladibeth',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como rockstar',
      ]
    }
  ],
  logoPortada: logoSlice,

}

cheet('e s t r e l l a', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter,
    }
  });
  // console.log('Lo lograste');
});

cheet('g l a d i b e t h', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState,
    }
  });
  // console.log('De regreso');
});
ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
