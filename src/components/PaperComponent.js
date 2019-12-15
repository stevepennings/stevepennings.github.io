import React from 'react';
import classes from '../css/PaperComponent.module.css';
import classnames from 'classnames';
import uiuxIcon from '../assets/images/uiuxIcon.svg';
import frontendIcon from '../assets/images/frontendIcon.svg';
import databasesIcon from '../assets/images/databasesIcon.svg';
import backendIcon from '../assets/images/backendIcon.svg';
import projectManagementIcon from '../assets/images/projectManagementIcon.svg';
import illustrationIcon from '../assets/images/illustrationIcon.svg';

const PaperComponent = (props) => {
    let avatar;
    let icon;
    switch (props.id) {
        case 1:
            avatar = classnames(classes.avatar, classes.gradientRed);
            icon = uiuxIcon;
            break;
        case 2:
            avatar = classnames(classes.avatar, classes.gradientBlue);
            icon = frontendIcon;
            break;
        case 3:
            avatar = classnames(classes.avatar, classes.gradientGreen);
            icon = illustrationIcon;
            break;
        case 4:
            avatar = classnames(classes.avatar, classes.gradientYellow);
            icon = databasesIcon;
            break;
        case 5:
            avatar = classnames(classes.avatar, classes.gradientPurple);
            icon = backendIcon;
            break;
        case 6:
            avatar = classnames(classes.avatar, classes.gradientOrange);
            icon = projectManagementIcon;
            break;
        default:
            avatar = classnames(classes.avatar, classes.gradientBlack);
            icon = uiuxIcon;
    }

    return (
        <>
            <div className={classes.paperComponent}>
                <div className={avatar}><img className={classes.avatarIcon} src={icon} alt={props.title}></img></div>
                <span className="title">{props.title}</span><br/>
                <span className="description">{props.desc}</span>
            </div>
        </>
    );
}

export default PaperComponent;