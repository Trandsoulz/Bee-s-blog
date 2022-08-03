import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, SetBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const allBlogs = 'All Blogs'

    const handleDelete = (id) => {
        const deletedBlog = blogs.filter( (blog) => (blog.id !== id))
         SetBlogs(deletedBlog)
    }
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={allBlogs} handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;