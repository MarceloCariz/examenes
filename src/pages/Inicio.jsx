import {Link} from 'react-router-dom'

const Inicio = () => {
  return (
    <div className=' flex flex-col  items-center shadow-xl px-32 py-20 rounded-lg'>
   
     <div className='bg-blue-600 px-32 py-8 mt-18 mb-12 rounded-xl'>
        <p className='text-white uppercase text-3xl font-semibold '>¡Hola!</p>
     </div>
     <div className=' shadow-lg px-4 py-2 rounded-xl  block '>
            <p className='text-xl text-gray-700 '>Haz click para buscar <span>Buscar tus examenes</span> </p>
      </div>
     <Link to='rut' className='block  mt-10 bg-yellow-500 px-12 py-4 font-bold  text-white rounded-lg '>Siguiente</Link>

    
    </div>
   
  )
}



export default Inicio