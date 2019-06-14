# Frubana Test

<p align="center">
  <img src="https://www.frubana.com/co/static/media/logo-horizontal-sin-slogan.prod.png" width="400">
  
</p>
Front end Frubana Test using React + Redux + Typescript + WebPack

## Frontend Developer Challenge

### Requerimientos

La Bodega Cachubana necesita un sistema que ayude a preparar sus órdenes para enviarlas posteriormente. El sistema de Cachubana está implementado con un realtime que va listando las órdenes a medida que se reciben. Cada orden que recibe Cachubana tiene un ID, usuario, código de región, una ruta asignada (varias órdenes pueden estar en la misma ruta), un slot de entrega y los productos que componen dicha orden. Los requerimientos del sistema son:

- **Tenga en cuenta que el gerente de Cachubana necesita un dashboard donde pueda:**

  - Visualizar en tiempo real porcentaje de órdenes alistadas por rutas.
  - Filtrar por código de región.
  - Visualizar las órdenes.
  - Ordenar por porcentaje de alistado, Ruta o Slot.
  - Lista de productos faltante por orden.

- **El personal de bodega necesita:**
  - Visualizar todas las órdenes.
  - Seleccionar la orden a alistar.
  - Una vez seleccionada la orden, se muestra una opción individual donde
    puede ver producto por producto e indicar si el producto se alistó o no (Se
    puede cambiar el estado del producto posteriormente).
  - Si un producto es alistado dentro de la orden por el personal de bodega, el
    porcentaje de “Productos completados” se debe ver reflejado en la
    visualización de todas las órdenes. Ej. 1. Orden XYZ---- 70% (si el personal
    alistó 7/10 productos).

## Table of Contents

- [Setting up](#setting-up)
- [Steps](#steps)
- [Developed with](#developed-with)
- [Images](#images)
- [Authors](#authors)

## Setting up

Para este test se decidio utilizar ReactJS + Redux como Librerias principales de JS. Se utilizo la un template propio con webpack v4 y de lenguaje de programacion **TypeScript**.

Se manejo una persistencia de datos para mantener una "autenticacion como gerente o despachador".

Se utilizo un preprocesador de css (Sass) y material-ui como libreria css

Toda la aplicacion Fue desarrollada para ser Responsive

## Steps

Clonar este repositorio (`git clone`)

NODE_VERSION : 10.13.0

```bash
 cd Frubana-test
 yarn
 yarn start  //Esto abrira la aplicacion en http://localhost:3000

 si se desea un puerto diferente se debe usar de la siguiente forma:
 yarn start port=3001
```

## Developed with

- [Typescript](https://www.typescriptlang.org/) - Usado para el desarrollo de la prueba
- [ReactJS](https://reactjs.org/) - Libreria utilizada para el desarrollo del frontend.
- [Redux](https://github.com/reduxjs/redux) - Libreria utilizada para el manejo de los estados de la aplicación
- [Redux Persistent](https://github.com/rt2zz/redux-persist) - Libreria utilizada para la persistencia de datos
- [Redux Saga](https://github.com/redux-saga/redux-saga) - Libreria utilizada usada para simular una peticion api de logueo
- [Material-Ui](https://material-ui.com/) - User interface utilizada para el styling de la aplicación.

## Images

- ### Gifs

  <img src="https://media.giphy.com/media/QBvAco3tglQw7roBWB/giphy.gif" width="500">
  <img src="https://media.giphy.com/media/WSrqp7DcSvusSbZSDu/giphy.gif" width="500">
  <img src="https://media.giphy.com/media/RKXnkYmWlz8KXhPub4/giphy.gif" width="500">
  <img src="https://media.giphy.com/media/VJ6GnhtSFuYJVdTXrk/giphy.gif" width="500">

- Responsive

<img src="https://i.ibb.co/p1gmVyZ/Captura-de-Pantalla-2019-06-13-a-la-s-8-30-09-p-m.png" alt="Captura-de-Pantalla-2019-06-13-a-la-s-8-30-09-p-m" height="350" width="300">
<img src="https://media.giphy.com/media/LS938nh3hCXKj2UF9O/giphy.gif" height="350" width="300">

## Authors

- **Daniel Eslava (EslavaDev)**
