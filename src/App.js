import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import Footer from "./components/Footer";
import Page404 from './components/Page404';

const App = () => {
  return (

   <Router>
     <div className='App'>
       <Navbar />

       <div className="content">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
       </div>

       <Footer />
    </div>
   </Router>

  )
}

export default App
