import { Link } from "react-router-dom";

// import { FaTimes } from "react-icons/fa";
const BlogList = ({ blogs, title }) => {

    // const blogs = props.blogs

    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {
                blogs.map( (blog) => (
                    <div className="blog-preview" key={ blog.id }>
                        <Link to={`/blogs/${blog.id}`}>
                        <h2> { blog.title } </h2>
                        <h4> Written by { blog.author } </h4>
                         </Link>
                        
                    </div>
                ))
            }
        </div>
     );
}
 
export default BlogList;