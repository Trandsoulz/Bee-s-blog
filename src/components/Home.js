import { useState } from "react";

const Home = () => {

    // let name = 'Bee'

    const [name, setName] = useState('Bee');
    
    const [age, SetAge] = useState(18);

    const handleClick = () => {
        
        const data = ['Bee', 'JP', 'Chidd', 'Destiny', 'Dave', 'Mario'];
        const aged = [18, 20, 22, 28, 17, 29]
        setName('Mario');
        SetAge(29)

        console.log(name + ' is ' + age + ' years old ')
    }

   

    // const handleClickAgain = (name) => {
    //     console.log(`Hello ${name}`)
    // }

    return ( 
        <div className="home">
            <h2>Homepage</h2>

            <button onClick={handleClick}> Click Me</button> 
            <p> { name + ' is ' + age + ' years old ' } </p>
            {/* <button onClick={ () => (handleClickAgain('Bee'))}> Click Me again</button> */}
        </div>
     );
}
 
export default Home;