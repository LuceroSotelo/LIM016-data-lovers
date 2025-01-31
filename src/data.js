//import data from './data/rickandmorty/rickandmorty.js';

export const filterDataGender = (data, seleccion) => {
  return data.results.filter((filtro) => filtro.gender.toLowerCase() == seleccion.toLowerCase())
};

export const filterDataSpecies = (data, seleccion) => {
  return data.results.filter((filtro) => filtro.species.toLowerCase() == seleccion.toLowerCase())
};

export const filterDataStatus = (data, seleccion) => {
  return data.results.filter((filtro) => filtro.status.toLowerCase() == seleccion.toLowerCase())
};


export const sortAZData = (data) => {
  const nuevaData = [...data.results];
  return nuevaData.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
  });
}

export const sortZAData = (data) => {
  const nuevaData = [...data.results];
  return nuevaData.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return 1
    }
    if (nameA > nameB) {
      return -1
    }
  });
}


export const filterSearchName = (data, e) => {
  const textoIngresado = e.target.value.toLowerCase();
  return data.filter((filtro) => filtro.name.toLowerCase().includes(textoIngresado))
}


/*
export const computeStats = () => {

}

// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

*/

//Funciones y parámetros referenciales para obtener, procesar y manipular datos

// filterData(data, condition)

// sortData(data, sortBy, sortOrder)

// computeStats(data)

