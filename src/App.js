import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Note from './pages/note'
import Nav from './layouts/nav'
import Footer from './layouts/footer'
import Gallery from './pages/gallery'
import About from './pages/about'

// const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

class App extends Component {
  
  render() {

    return (
      <main className="my-app">

        <Nav/>

        <div id="container" className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Post} />
            <Route path="/note" component={Note} />
            <Route path="/project" component={Project} />
            <Route path="/gallery" component={Gallery} />
            <Route pate="/:id"> 404 </Route>
          </Switch>
        </div>

        <Footer/>
      </main>
    )
  } 
}

export default App;
