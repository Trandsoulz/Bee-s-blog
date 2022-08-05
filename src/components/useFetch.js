import { useState, useEffect } from 'react'

const useFetch = (url) => {
   
    const [data, SetData] = useState(null)
    const [isLoading, SetisLoading] = useState(true)
    const [error, SetError] = useState(null)
    // const [named, setNamed] = useState('Bee')
    // const bleach = () => {
    //     setNamed('Bethrand')
    // }

    useEffect(() => {
         
      setTimeout(() => {
         

         fetch(url)
         .then(res => {
            if (!res.ok) {
                throw Error(' Could not fetch from the resource ')
            }
            return res.json()
         })
             .then( (data) => {
                 SetisLoading(false)
                 SetData(data)
                 SetError(null)
             })
                .catch( err => {
                    SetisLoading(false)
                   SetError(err.message)
                   
                })
      }, 500);
    }, [url]);

    return { data, isLoading, error }
 
}
 
export default useFetch;