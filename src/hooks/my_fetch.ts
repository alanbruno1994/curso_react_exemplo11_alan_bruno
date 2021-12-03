import { useCallback, useEffect, useState } from "react"

type City={
    uf:string
    city:string
    district:string
}

const useMyFetch=(cep:string)=>
{
    const [city,setCity]=useState<City>()

    const findCEP=useCallback(async ()=>
    {
      try {
        const response= await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data= await response.json()
        setCity({uf:data.uf,city:data.localidade,district:data.bairro})
      } catch (error) {
          
      }
      
    },[cep])

    useEffect(()=>{
        findCEP()
    },[cep,findCEP])

    return city
}

export default useMyFetch