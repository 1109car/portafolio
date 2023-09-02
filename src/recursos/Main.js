import React from 'react'
import '../estilos/main.css'
import '../interaccion/scroll.js'

export const Main = () => {
  return (
    <div className='main_general'>
       <main className='main_1'>
        <div className='saludo_contenedor'>
          <h1 className='nom_principl'>
           Soy carlos Rojas
          </h1>
          </div>
          <div className='rompe'>
            <p className='parrafo_1'>Desarrollador</p>
          </div>
       </main>
       <div className='main_2'>
           <div className='rompe_1'>
            <p className='parrafo_2'>Web
            </p>
           </div>
       </div>
    </div>
  )
}
