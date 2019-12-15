import React from 'react';
import classes from "../css/ButtonComponent.module.css";
import classnames from 'classnames';

const ButtonComponent = (props) => {
    console.log(props.link)
    let buttonBackground;
    switch (props.id) {
        case 1:
            buttonBackground = classnames(classes.ButtonComponent, classes.gradientBlue);
            break;
        case 2:
            buttonBackground = classnames(classes.ButtonComponent, classes.gradientTurq);
            break;
        case 3:
            buttonBackground = classnames(classes.ButtonComponent, classes.gradientPurple);
            break;
        default:
            buttonBackground = classnames(classes.ButtonComponent, classes.gradientBlack);
    }
    return (
        <a className={buttonBackground} href={props.link} rel="noopener noreferrer" target="_blank">
            <span className={classes.buttonText}>{props.text}</span>
        </a>
    );
}

export default ButtonComponent;