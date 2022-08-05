import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data: blogs, isLoading, error} = useFetch('http://localhost:200/blogs')

    const allBlogs = 'All Blogs'

    // const handleDelete = (id) => {
    //     const deletedBlog = blogs.filter( (blog) => (blog.id !== id))
    //      SetBlogs(deletedBlog)
    // }

    return ( 
       
        <div className="home">
            { error && <div> {error} </div> }
            {isLoading && <div>Loading...</div> }
           { blogs && <BlogList blogs={blogs} title={allBlogs} />}
            {/* <p>
                { errorMessage }
            </p> */}
            {/* <p>
                { named }
            </p>

            <button onClick={() => (bleach())}>
                Change name
            </button> */}
        </div>
        
     );
}
 
export default Home;