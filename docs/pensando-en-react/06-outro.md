# 06 - Outro

Felicitaciones nuevamente! Ya no solo sabes usar React, sino que ya sabés como pensar y diseñar una aplicación en React. Con el tiempo y mucha más práctica vas a empezar a desarrollar más patrones que te van a ayudar a internalizar estos pasos a tal punto que ya ni tengas que pensar en ellos en forma consciente.

Durante el workshop vimos los fundamentos de React, mientras creamos una aplicación usando una serie de pasos útiles para pensar y diseñar la misma. Primero delineamos cuales iban a ser nuestros componentes. Luego implementamos nuestra aplicación creando esos componentes y componiéndolos en una versión estática, pasando solo `props` hacia abajo en el árbol. Luego identificamos cual iba a ser el estado de nuestra aplicación, es decir, la información que cambia en el tiempo. Después identificamos dónde debía vivir el estado, y asignamos `state` en esos componentes. Finalmente, agregamos interacción a nuestra app haciendo que los eventos fluyan hacia arriba, hacia los componentes que tienen el estado que debe cambiar en base a esos eventos. Al final de todo este proceso, nuestra aplicación ya esta lista y totalmente funcional!

## Próximos pasos en la aplicación

Podés seguir extendiendo nuestra aplicación como quieras, ya es tuya! Sentite libre de agregarle la funcionalidad que creas que le hace falta. Acá van algunas ideas:

* Cómo podemos hacer para persistir el estado de nuestra lista de artistas seleccionados? Y cómo podemos cargar nuestra aplicación con una lista que teníamos ya persistida?
* Hasta ahora duplicamos la información de los artistas seleccionados, ya que la guardamos tanto en el estado de `ArtistsPanel` en la lista de artistas que estamos buscando, y en la lista de artistas seleccionados en `App`. Esto lleva a un problema: Si cuando traemos información de la API nos viene información nueva sobre un artista, y ya lo teníamos seleccionado, la información actualizada no va a aparecer en la lista de seleccionados, ya que esa información duplicada no va a modificarse, a menos que deseleccionemos y volvamos a seleccionar ese artista. Cómo podemos modificar la estructura de nuestro estado (y el lugar en donde vive ese estado) para evitar este problema?
* Podríamos agregar una descripción junto a cada artista cuando lo agregamos a la lista de selección, para explicar por qué es parte de esa lista.
* Podríamos también hacer que esa lista pueda ser ordenada como queramos, en lugar de ser por orden de inserción.
* Podríamos incluso tener multiples listas! Podríamos extender nuestra aplicación para poder crear, modificar y eliminar listas, asignando un nombre y agregando artistas.

## Próximos pasos en React

Quizás a medida que vayas agregando complejidad a tus aplicaciones, empieces a necesitar algunas librerías, estrategias más avanzadas, o simplemente quieras corroborar tus soluciones con lo que la comunidad está haciendo.

Te recomiendo los siguientes recursos para continuar aprendiendo:

1. Muchísimos recursos sobre muchísimos temas relacionados con React: https://github.com/enaqx/awesome-react
2. La documentación oficial de React: https://facebook.github.io/react
3. Sitio con muchos patrones para diseñar apps con React: https://reactfaq.site/
4. Redux, librería para manejar estado global en aplicaciones: http://redux.js.org/
5. React Router, solución para ruteo y navegación en React: https://reacttraining.com/react-router/
6. Apollo http://dev.apollodata.com/ y Relay https://facebook.github.io/relay/, dos librerías para utilizar GraphQL con React.
7. Slack de la comunidad de Meetup.js http://slack.meetupjs.com.ar/. Entrá al canal de #reactjs para tus consultas sobre React. Usa todos los demás canales para consultas sobre Javascript.


Espero que te haya gustado el workshop! Cualquier consulta, o mejora, podés crear un issue acá o directamente enviar un pull request.

**Hecho con ❤️ por Lenny [@leogcrespo](https://twitter.com/leogcrespo)**