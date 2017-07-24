# 00 - Pensando en React - Intro

Bienvenido! En esta serie de pasos vamos a estar viendo cómo armar una aplicación en React.

Este workshop está basado en [este link](https://facebook.github.io/react/docs/thinking-in-react.html) de la documentación oficial que describe en forma muy simple y didáctica los pasos que tenemos que hacer para diseñar e implementar una aplicación (o un fragmento dentro de una aplicación) con React.

Vas a ver que es muy simple, y divertido!

Durante este workshop vamos a armar una aplicación que nos servirá para buscar artistas musicales, e ir armando una lista de artistas favoritos. Vamos a estar accediendo a esos artistas mediante la API de Spotify. Por este motivo, vas a tener que tener una cuenta en Spotify (una cuenta gratuita es suficiente).

Acá te muestro un GIF con la aplicación funcionando:

[EJEMPLO DE LA APP FUNCIONANDO]

Podés acceder a la aplicación final iniciando la aplicación con `npm start` (o `yarn start` si usas `yarn`), y acceder a la url `/final`.

La primera vez que intentes buscar un artista, la aplicación te redireccionará a una página para darle permisos a la aplicación para acceder a los datos de Spotify. Por como funciona la API de Spotify, esto lo tendrás que hacer cada cierto tiempo. Igualmente esa funcionalidad ya esta implementada, no nos enfocaremos en hacer eso, sino en la UI y las interacciones.

Para comenzar, vamos a ver cómo [dividir nuestra aplicación en componentes](./01-dividir-en-componentes.md).