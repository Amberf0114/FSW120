import React from 'react'
import VacaArray from './VacaArray'
import VacaParent from './VacaParent'

function App() {
        const VacaComponents = VacaArray.map(vaca => <VacaParent myPlace={vaca.place} price={vaca.price} timeToGo = {vaca.timeToGo} />)

    return (
       <div>
           {VacaComponents}
       </div>
    )
}
export default App