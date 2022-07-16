import {ThemeProvider} from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import Project from "./Project";
import Typed from "react-typed";


function Landing() {
    return (

        <div className="Landing">
            <div className={"land-left"}>
                <div className={"landing-text"}>
                    <h1>Hey,<br/>my name is<br/> <a className={"name"}>Debdeep</a><br/>
                        And I'm a <Typed className={"highlight-p1"} strings={['YouTuber','Developer','Freelancer','Blogger']} typeSpeed={40} loop/>
                    </h1>

                </div>
                <div className={"land-button"}>
                    <Button variant='contained' color={"primary1"} endIcon={<EmailIcon/>}>Contact Me</Button>
                    <Button variant='contained' color={"primary1"} endIcon={<ArticleIcon/>}>Resume</Button>
                </div>
            </div>
            <div className={"land-right"}>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>


    )
        ;
}

export default Landing;