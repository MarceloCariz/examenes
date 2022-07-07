import {Outlet} from 'react-router-dom';
const ExamenLayout = () => {
  return (
    <main className='container mx-auto mt-5 md:mt-20 p-5 flex md:justify-center md:justify-items-center' >
        <Outlet/>
    </main>
  )
}

export default ExamenLayout