
export  const obtenerRut = async(rut) => {
    // const {RUT} = data;
//    console.log( rut.slice(-1) === '0')
    // let rutValidado = rut;
    // console.log(rutValidado.length)

    // if(rutValidado.slice(-1) === '0'){
    //     rutValidado = rutValidado.substr(0,rutValidado.length -1)  + 'k';
    //     // console.log(rutValidado.length)
    // }
    // console.log(rutValidado)

    // const url = `http://localhost:4000/api/examenes/${rut}`
    const url = `http://143.198.132.102:4000/api/examenes/${rut}`

    console.log(url)
    const respuesta = await fetch(url)
    // console.log(respuesta)
    const resultado = await respuesta.json();
    // console.log(resultado)
    // // 195739374
    return resultado;
    
  };

