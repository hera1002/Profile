import React, { Component } from 'react'
import {Grid , Cell} from 'react-mdl'

class Landingpage extends Component {
    state = {  }
    render() {
        return (
            <div>
             <Grid className="landingpage">
                 <Cell col={12}>
                     <img 
                     src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_smart_guy-512.png" 
                      height="400px"
                     alt = "avatar"
                     className="avatar"
                     ></img>
                     <div className ="banner-text">
                         <h1> Fullstack Web Developer</h1>
                         <hr />
                         <p>HTML | Javascript | ReactJs | Java | Spring | Python | Django</p>
                     </div>

                 </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage;