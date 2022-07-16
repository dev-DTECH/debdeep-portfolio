import '../App.scss';
import Menu from '@mui/material/Menu';
import logo from '../logo.png'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import React, {useState, Fragment} from 'react'

let open = false;

function menuToggle() {
    open = !open;
}

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            navBackground: "transparent",
            color: "red"
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 200 ? "transparent" : "#212121";
            const navcolor = window.scrollY < 200 ? "" : "red";

            this.setState({navBackground: backgroundcolor});
            this.setState({color: navcolor});
        });
    }


    render() {
        // const [anchorEl, setAnchorEl] = useState(null);
        // const open = Boolean(anchorEl);
        // const handleClick = (event) => {
        //     setAnchorEl(event.currentTarget);
        // };
        // const handleClose = () => {
        //     setAnchorEl(null);
        // };
        return (
            <div className={"NavBar" + " " + this.state.color} style={{backgroundColor: this.state.navBackground}}>
                <div className={"logo"}>
                    <img src={logo} height={36.5}/>
                    <div>DTech</div>
                </div>
                <div>
                    <Button color={"primary2"} variant="text">Home</Button>
                    <Button color={"primary2"} variant="text">About</Button>
                    <Button color={"primary2"} variant="text">Skills</Button>
                    <Button color={"primary2"} variant="text">Home</Button>
                    <Button color={"primary2"} variant='contained'>Contact</Button>

                    {/*<Button variant='contained' onClick={menuToggle} endIcon={<KeyboardArrowDownIcon/>}>Panels</Button>*/}
                </div>
            </div>
        );
    }
}

export default NavBar;