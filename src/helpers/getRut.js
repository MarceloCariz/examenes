import data from '../data/data.json';

export  const obtenerRut = (rut) => {
    // const {RUT} = data;
//    console.log( rut.slice(-1) === '0')
    // let rutValidado = rut;
    // console.log(rutValidado.length)

    // if(rutValidado.slice(-1) === '0'){
    //     rutValidado = rutValidado.substr(0,rutValidado.length -1)  + 'k';
    //     // console.log(rutValidado.length)
    // }
    // console.log(rutValidado)
    console.log(rut)
    const resultado =  data.filter((estudiante) => estudiante.RUT === rut);
    // console.log(resultado)
    // // 195739374
    return resultado
    
  };

