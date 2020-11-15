import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button';


function About(){

    return(
        <div>
        <ButtonGroup className="about-btns" variant="text" color="primary" aria-label="text primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
       </ButtonGroup>
            <section className="section1"></section>
            <section className="section2"></section>
            <section className="section3"></section>
        </div>
    )
}

export default About