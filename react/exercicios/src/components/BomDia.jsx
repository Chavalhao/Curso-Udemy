import React from 'react'

export default props => [

        <h1 key='h1'>Bom dia {props.nome}!</h1>,
        <h2 key='h2'>ja com {props.idade} anos</h2>

]

//React.Fragment ele serve como tag mas não vai ser renderizado no html
// export default props =>
//     <React.Fragment> 
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>ja com {props.idade} anos</h2>
//     </React.Fragment>

//React.Fragment ele serve como tag mas não vai ser renderizado no html
// export default props =>
//     <div> 
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>ja com {props.idade} anos</h2>
//     </div>
