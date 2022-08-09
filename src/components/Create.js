import { useState } from "react";
import { useHistory } from 'react-router-dom'


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();


    const submitDefault = (e) => {
        e.preventDefault()
        const blog = {
            title,
            body,
            author
        };
        setIsLoading(true)
       
        fetch('https://first-json-server-hosting.herokuapp.com/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then (() => (
            setIsLoading(false),
            history.push('/')
        ))

        setTitle('');
        setBody('');
        setAuthor('Mario');
    }
    






    return ( 
        <div className="create">
            {/* {
                isLoading && <div> Is Loading</div>
            } */}
            <h2>
                Add a new blog
            </h2>

            <form onSubmit={submitDefault} >
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                    />

                <label>Blog body:</label>
                <textarea 
                //  name=""
                //  id=""
                //  cols="30" 
                 rows="5"
                 required
                 value={body}
                 onChange={ (e) => setBody(e.target.value)}></textarea>

                 <label>Blog author:</label>
                 <input 
                    type="text"
                    required
                    value={author}
                    onChange={ (e) => setAuthor(e.target.value)}
                    />

                 {/* <select
                    value={author}
                    onChange={ (e) => setAuthor(e.target.value) }
                 >
                    <option value="Mario">mario</option>
                    <option value="Yoshi">yoshi</option>
                 </select> */}

                 { !isLoading && <button type="submit">Add blog</button>}
                 { isLoading && <button disabled="disabled">Adding...</button> }


            </form>
        </div>
     );
}
 
export default Create;


