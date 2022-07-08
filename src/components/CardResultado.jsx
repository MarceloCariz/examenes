import React from "react";

const CardResultado = ({
  RUT,
  NOMBRE_DE_ASIGNATURA,
  SECCION,
  FECHA_EXAMENES,
  DOCENTE_QUE_TOMA_EXAMEN,
  SALA
}) => {
    // console.log(SALA)
  return (
           
            <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-700 even:dark:bg-gray-700 dark:text-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {RUT}
                </th>
                <td className="px-6 py-4 " >
                   {NOMBRE_DE_ASIGNATURA}
                </td>
                <td className="px-6 py-4">
                    {SECCION}
                </td>
                <td className="px-6 py-4">
                    {FECHA_EXAMENES}
                </td>
                <td className="px-6 py-4 text-right">
                    {SALA}
                </td>
                <td className="px-6 py-4 text-right">
                    {DOCENTE_QUE_TOMA_EXAMEN}
                </td>
            </tr>

  );
};

export default CardResultado;
