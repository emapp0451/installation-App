import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home_component/Home';
import About from './components/about_component/About';
import Contact from './components/contact_component/Contact';
import CustomNavbar from './components/CustomNavbar';
import Bangalore from './components/bangalore_component/Bangalore';
import Hospital from './components/hospital_component/Hospital';
import Hotel from './components/hotel_component/Hotel';
import Software from './components/software_component/Software';
import Filter from './components/filter_component/Filter';
import Filterd from './components/filterd_component/Filterd';
import College from './components/college_component/College';
import Form from './components/form_component/Form';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

function App() {
  return (
   <Router>
     <div>
       <CustomNavbar />
       <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={Form} />
        <Route path="/filter" component={Filter} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        <Route path="/filterd-data/:values" component={Filterd} />
        <Route path="/software/:softwareId" exact component={Software} />
        <Route path="/hospital/:softwareId" exact component={Hospital} />
        <Route path="/hotel/:softwareId" exact component={Hotel} />
        <Route path="/college/:softwareId" exact component={College} />
     </div>
   </Router>
  );
}

export default App;
