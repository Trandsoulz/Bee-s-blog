import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error} = useFetch('https://first-json-server-hosting.herokuapp.com/blogs/' + id);
    const history = useHistory();

    const deleteItem = () => {
        fetch(('https://first-json-server-hosting.herokuapp.com/blogs/' + blog.id), {
        method: 'DELETE'
    }).then(() => {
        history.push('/');
    })
    }


    return ( 
        <div className="blog-details">
             
            {isLoading && <div>Loading...</div> }
            { error && <div> {error} </div> }
            {
                blog && (
                    <article>
                        <h2> { blog.title } </h2>
                        <p> Written by { blog.author } </p>
                        <div> { blog.body } </div>
                        
                        <button onClick={deleteItem} >Delete</button>
                    </article>
                    
                )
            }

        </div>
     );
}
 
export default BlogDetails;