// Modificar el componente `SearchInput` para que cuando se
// envíe el formulario se dispare la prop `onChange` con el
// valor del input.
//
// Usando componentes no controlados:
//
// 1. Agregar `ref`s a los inputs, y guardar los elementos en
//    variables de instancia de la clase.
// 2. Obtener los valores de los elementos de DOM accediendo
//    a esas variables de instancia en el metodo `handleSubmit`.
//    Usas esos valores para popular el objeto que se envía en
//    `this.props.onChange`.
// 3. Verificar que el formulario envia los valores correspondientes al enviarlo.
//
// Usando componentes controlados:
//
// 1. Inicializar el estado local de `SearchInput` con las 3
//    propiedades que necesitamos para cada control de formulario.
// 2. Asignar ese estado en los componentes correspondientes usando
//    la prop `value` para el input de texto y `checked` para los
//    checkboxes. Observar que los elementos ya no se modifican al
//    clickearlos o tipear.
// 3. Agregar props `onChange` a todos y utilizar `setState` dentro
//    de esas funciones actualizando el campo correspondiente en el
//    `state`.
// 4. Utilizar el valor de `state` dentro de `handleSubmit` para
//    popular el objeto que enviamos a `onChange`.
// 5. Verificar que el formulario envia los valores correspondientes al enviarlo.

import React from "react";

class SearchInput extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      international: false,
      preferred: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInternationalChange = this.handleInternationalChange.bind(this);
    this.handlePreferredChange = this.handlePreferredChange.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.onChange(this.state);
  }

  handleInputChange(ev) {
    this.setState({ text: ev.target.value })
  }

  handleInternationalChange(ev) {
    this.setState({ international: ev.target.checked });
  }

  handlePreferredChange(ev) {
    this.setState({ preferred: ev.target.checked });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <input
          type="text"
          autoFocus
          className="searchInput"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <SearchButton type="submit" className="searchButtonLayout" />
        <p>
          <label>
            <input type="checkbox" checked={this.state.international} onChange={this.handleInternationalChange} /> Incluir artistas internacionales
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" checked={this.state.preferred} onChange={this.handlePreferredChange} /> Incluir preferidos
          </label>
        </p>
      </form>
    );
  }
}

// El siguiente export fue agregado para poder correr este ejercicio dentro del proyecto general.
export default function Ejercicio9() {
  return (
    <div style={{ width: "80%", margin: "0 auto", paddingTop: 20 }}>
      <SearchInput
        onChange={data => {
          alert(`Formulario enviado con texto ${data.text}, internacional: ${data.international}, preferidos: ${data.preferred}`);
        }}
      />
    </div>
  );
}

function SearchButton(props) {
  return (
    <button {...props} className={`${props.className} searchButton`}>
      <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
        <title>Buscar</title>
        <path
          d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}
