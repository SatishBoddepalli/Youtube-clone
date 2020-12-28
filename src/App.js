import React from 'react'
import './App.css';
import Header from './header'
import Sidebar from './sidebar'
import RecommendedVideos from './recommendedvideo'
import SearchPage from './SearchPage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LogIn from './Login'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="./Login.js" component="Login"/>
     
      <Header/>
          <Switch>
              <Route path="/search/:searchTerm">
                  <div className="app-page">
                      <Sidebar/>
                      <SearchPage/>
                   </div>
              
              </Route>
              <Route path="/">
                  
                  <div className="app-page">
                      <Sidebar/>
                   <RecommendedVideos/>
                   </div>
              </Route>
              
          </Switch>
      </Router>



      {/* <Header/>
      <div className="app-page">
      <Sidebar/>
      <RecommendedVideos/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
