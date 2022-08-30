import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [actividad, setActividad] = useState({})
    
    useEffect(() => {
        fetch("https://www.boredapi.com/api/activity")
        .then((res) => res.json())
        .then((json) => setActividad(json))
        .catch((e) => console.log(e))
        .finally(() => console.log("lo ultimo q hago"))
    }, []);

  return (<div>
    {actividad.key ? (
        <div>
            <p>{actividad.activity}</p>
            <p>{actividad.type}</p>
        </div>
    ) : (
        <p>Loading....</p>
    )}
    </div>)
}

export default Fetch