import React,{useState} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button';



function About(){
    const [display,setDisplay] = useState(1)
    return(
        <div className="about-container">
        <ButtonGroup className="about-btns" variant="text" color="primary" aria-label="text primary button group">
            <Button className={display === 1?'about--button active':'about--button'} onClick={()=> setDisplay(1)}>One</Button>
            <Button className={display === 2?'about--button active':'about--button'} onClick={()=> setDisplay(2)}>Two</Button>
            <Button className={display === 3?'about--button active':'about--button'} onClick={()=> setDisplay(3)}>Three</Button>
       </ButtonGroup>
       <div className="about-wrapper">
            <section className={display === 1?'section1':'sectionInactive'}>
                <div className="about-image"></div>
                <p>Sunt officia anim consequat sint dolor. Cillum aliquip anim aute id minim in adipisicing aute laborum ipsum. Occaecat consectetur ad exercitation anim dolor amet velit in pariatur dolor. Nostrud deserunt consequat eiusmod amet tempor eiusmod est laborum officia exercitation nisi ea. Proident et Lorem Lorem amet ad sunt duis et esse veniam. Sit consectetur officia sit adipisicing reprehenderit proident. Laborum ea fugiat aliqua esse occaecat aute et irure in amet elit.</p>
            </section>
            <section className={display === 2?'section2':'sectionInactive'}>
                <p>Sunt officia anim consequat sint dolor. Cillum aliquip anim aute id minim in adipisicing aute laborum ipsum. Occaecat consectetur ad exercitation anim dolor amet velit in pariatur dolor. Nostrud deserunt consequat eiusmod amet tempor eiusmod est laborum officia exercitation nisi ea. Proident et Lorem Lorem amet ad sunt duis et esse veniam. Sit consectetur officia sit adipisicing reprehenderit proident. Laborum ea fugiat aliqua esse occaecat aute et irure in amet elit.</p>
                <div className="about-image"></div>
            </section>
            <section className={display === 3?'section3':'sectionInactive'}>
                <div className="about-image"></div>
                <p>Sunt officia anim consequat sint dolor. Cillum aliquip anim aute id minim in adipisicing aute laborum ipsum. Occaecat consectetur ad exercitation anim dolor amet velit in pariatur dolor. Nostrud deserunt consequat eiusmod amet tempor eiusmod est laborum officia exercitation nisi ea. Proident et Lorem Lorem amet ad sunt duis et esse veniam. Sit consectetur officia sit adipisicing reprehenderit proident. Laborum ea fugiat aliqua esse occaecat aute et irure in amet elit.</p>
            </section>
            </div>
        </div>
    )
}

export default About