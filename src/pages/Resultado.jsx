import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CardResultado from "../components/CardResultado";
import { obtenerRut } from "../helpers/getRut";
const Resultado = () => {
  const { rut } = useParams();

  const [examenes, setExamenes] = useState([]);
  useEffect(() => {
      // const {RUT} = data;
      const obtenerExamenes = async()=>{
         const resultado = await obtenerRut(rut)
          setExamenes(resultado)
      }
      // 195739374
      // setExamenes(resultado);
      obtenerExamenes()

  }, [rut]);

  // console.log(examenes)

  //   examenes.map((estudiante, i) =>( console.log(i)))

  return (
    <div className="">
          <div className='bg-blue-600 px-32 py-8 mb-12 rounded-xl'>
        <p className='text-white uppercase text-3xl text-center font-bold'>Resultados</p>
     </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg col animate__animated animate__backInLeft animate__faster" >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-50 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              RUT
              </th>
              <th scope="col" className="px-6 py-3">
              NOMBRE DE ASIGNATURA
              </th>
              <th scope="col" className="px-6 py-3">
              SECCION
              </th>
              <th scope="col" className="px-6 py-3">
              FECHA EXAMENES
              </th>
              <th scope="col" className="px-6 py-3">
              SALA
              </th>
              <th scope="col" className="px-6 py-3">
              DOCENTE QUE TOMA EXAMEN
              </th>
            </tr>
          </thead>
          {/* <tbody> */}

          {examenes ? (
            examenes.map((estudiante, i) => (
              <tbody key={i}>
                  <CardResultado {...estudiante} />
              </tbody>
            ))
          ) : (
            <p>cargando...</p>
          )}
          {/* </tbody> */}

        </table>
      </div>
      <div className="flex items-center justify-center gap-4">
      <Link to='/' className=' items-center mt-10 bg-yellow-500 hover:bg-yellow-400 px-12 py-4 text-white rounded-lg  font-bold'>Ir al inicio</Link>

      <Link to='/rut' className=' items-center mt-10 bg-yellow-500 px-12 py-4 text-white rounded-lg font-bold'>Consultar otro rut</Link>


      </div>

    </div>
    
  );
};

export default Resultado;
