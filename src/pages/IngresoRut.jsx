import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Teclado from "../components/Teclado";
import { obtenerRut } from "../helpers/getRut";

const IngresoRut = () => { 
        
  const navigate = useNavigate(); 
  const [error, setError] = useState('')
  const [rut, setRut] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(rut.length)
    // obtenerRut()
    if(rut.length > 10  || rut.length < 8 || rut.length === undefined){
        setError('Rut invalido');
        return;
    }
    const resultado = obtenerRut(rut);
    console.log(typeof rut)
    if(resultado.length === 0){
      setError('Rut no encontrado')
      return
    }
    // console.log('Pase')
    navigate(`/resultado/${rut}`)
  }

  // const handleOnchange = (e) =>{
  //   if(e.target.value.length === 0){
  //     setError('')
  //     return
  // }
  //   if(e.target.value.length < 8){
  //       setError('rut muy corto')
  //       return
  //   }
  //   if(e.target.value.length > 9){
  //       setError('rut muy largo')
  //       return
  //   }
  //   setError('')
  //   setRut(e.target.value)
  // }
//  console.log( typeof rut)
  return (
    <form  onSubmit={handleSubmit} className=" flex flex-col animate__animated items-center animate__fadeIn">
      <div className="bg-blue-600 px-32 py-8  rounded-xl">
        <p className="text-white uppercase text-3xl ">Ingresa tu Rut</p>
      </div>
        {/* <input type="text" onChange={handleOnchange} maxLength={9}  placeholder="ej: 123456789" className=" border-2 border-gray-400 rounded-lg mt-4 py-4 text-center uppercase  w-1/3" /> */}
       {error && 
        <p className="bg-red-600 text-white  py-2 px-4 mt-4">{error}</p>
       }
       <Teclado setError={setError} setRut={setRut} rut={rut}/>
      <input
        type="submit"
        className="block cursor-pointer  mt-4 bg-yellow-500 px-12 py-4 text-white rounded-lg "
        value="Siguiente"
      />
    </form>
  );
};

export default IngresoRut;
