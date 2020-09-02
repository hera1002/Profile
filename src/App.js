import React from 'react';
import Main from  './components/main'
import './App.css'
import { Layout , Header ,  Navigation, Content,Drawer} from 'react-mdl';
import{Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header className ="header" title="Title" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title" className="drawer" >
            <Navigation className="drawer">
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>


    <h1>Test APP </h1>

    </div>
  );
}

export default App;
