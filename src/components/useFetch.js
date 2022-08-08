import { useState, useEffect } from 'react'

const useFetch = (url) => {
   
    const [data, SetData] = useState(null)
    const [isLoading, SetisLoading] = useState(true)
    const [error, SetError] = useState(null)
    // const abortControl = new AbortController()
    // const [named, setNamed] = useState('Bee')
    // const bleach = () => {
    //     setNamed('Bethrand')
    // }

    useEffect(() => {
         
      setTimeout(() => {
         

         fetch(url)  //{ signal: abortControl.signal }
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
                //     if (err.name === 'AbortError') {
                //         console.log('Fetch aborted')
                //     } else {
                        SetisLoading(false)
                        SetError(err.message)
                //     }
                   
                })
      }, 500);

    //   return() => {
    //     abortControl.abort()
    //   }

    }, [url]);

    return { data, isLoading, error }
   
}
 
export default useFetch;