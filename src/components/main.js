import React from 'react'
import LandingPage from './landingpage';
import Project from './project';
import Resume from './resume';
import Contact from './contact';
import AboutMe from './aboutme';
import { Route,Switch } from 'react-router-dom';


const Main = () => (
    <Switch>
    <Route exact path="/" component={LandingPage} />
    
    <Route  path="/aboutme" component={AboutMe} />
    
    <Route  path="/contact" component={Contact} />
    
    <Route  path="/project" component={Project} />
    
    <Route  path="/resume" component={Resume} />
    
    <Route  path="/" component={LandingPage} />
    </Switch> 


)

export default Main;