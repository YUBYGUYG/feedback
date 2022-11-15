const App=()=>{

    const bootcamps=[
        {
         id:1,
         name: 'PHP Bootcamp',
         average_rating:8   
        },
        {
        id:1,
         name: 'JavaScript Bootcamp',
         average_rating:10  
        }
    ]
    return(
        <>
        <h1> Listado de Bootcamps </h1>
        <ul>
            {bootcamps.map((bootcamp)=>
            <li key={index}>{bootcamp.name}</li>
            )}
        </ul>
        </>
    )
}

export default App