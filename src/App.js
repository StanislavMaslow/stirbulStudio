import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//includes
import './Asets/css/default.min.css';

//components
import  Header from './components/headerComponent/header';
import  Footer from './components/footerComponent/footer';
import Homepage from  './components/pages/homePage';
import About from './components/pages/about';
import Work from './components/pages/work';
import Blog from './components/pages/blog';
import Contacts from './components/pages/contacts'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>

                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path='/work' component={Work}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/contacts" component={Contacts}/>

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
