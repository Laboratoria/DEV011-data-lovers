// Debe contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones)

//sortData = (data, sortBy, sortOrder)
export const sortData = (data, sortBy, sortOrder) => {
  let yearFILMS = [];

  if (sortOrder === "asc") {
    yearFILMS = data.sort((a, b) => new Date(a[sortBy]) - new Date(b[sortBy]));
  } else if (sortOrder === "desc") {
    yearFILMS = data.sort((a, b) => new Date(b[sortBy]) - new Date(a[sortBy]));
  }

  return yearFILMS;
};

//filterData(data, filterBy, value)

export const filterData = (data, filterBy, value) => {
  let directorFILMS = [];

  if (value === "Hayao") {
    directorFILMS = data.filter(
      (director) => director[filterBy] === "Hayao Miyazaki"
    );
  } else if (value === "Isao") {
    directorFILMS = data.filter(
      (director) => director[filterBy] === "Isao Takahata"
    );
  } else if (value === "Yoshifumi") {
    directorFILMS = data.filter(
      (director) => director[filterBy] === "Yoshifumi Kondō"
    );
  } else if (value === "Hiroyuki") {
    directorFILMS = data.filter(
      (director) => director[filterBy] === "Hiroyuki Morita"
    );
  } else if (value === "Gorō") {
    directorFILMS = data.filter(
      (director) => director[filterBy] === "Gorō Miyazaki"
    );
  } else if (value === "Hiromasa") {
    directorFILMS = data.filter(
      (director) => director[filterBy] === "Hiromasa Yonebayashi"
    );
  }

  return directorFILMS;
};

//computeStats(data)
