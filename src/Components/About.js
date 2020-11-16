import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button';


function About(){

    return(
        <div className="about-container">
        <ButtonGroup className="about-btns" variant="text" color="primary" aria-label="text primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
       </ButtonGroup>
            <section className="section1">
                <p>Sunt officia anim consequat sint dolor. Cillum aliquip anim aute id minim in adipisicing aute laborum ipsum. Occaecat consectetur ad exercitation anim dolor amet velit in pariatur dolor. Nostrud deserunt consequat eiusmod amet tempor eiusmod est laborum officia exercitation nisi ea. Proident et Lorem Lorem amet ad sunt duis et esse veniam. Sit consectetur officia sit adipisicing reprehenderit proident. Laborum ea fugiat aliqua esse occaecat aute et irure in amet elit.</p>
            </section>
            <section className="section2">
            <p>Sunt officia anim consequat sint dolor. Cillum aliquip anim aute id minim in adipisicing aute laborum ipsum. Occaecat consectetur ad exercitation anim dolor amet velit in pariatur dolor. Nostrud deserunt consequat eiusmod amet tempor eiusmod est laborum officia exercitation nisi ea. Proident et Lorem Lorem amet ad sunt duis et esse veniam. Sit consectetur officia sit adipisicing reprehenderit proident. Laborum ea fugiat aliqua esse occaecat aute et irure in amet elit.</p>
            </section>
            <section className="section3">
            <p>Sunt officia anim consequat sint dolor. Cillum aliquip anim aute id minim in adipisicing aute laborum ipsum. Occaecat consectetur ad exercitation anim dolor amet velit in pariatur dolor. Nostrud deserunt consequat eiusmod amet tempor eiusmod est laborum officia exercitation nisi ea. Proident et Lorem Lorem amet ad sunt duis et esse veniam. Sit consectetur officia sit adipisicing reprehenderit proident. Laborum ea fugiat aliqua esse occaecat aute et irure in amet elit.</p>
            </section>
        </div>
    )
}

export default About