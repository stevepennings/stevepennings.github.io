import React from 'react';
import classes from '../css/CardComponent.module.css';
import classnames from 'classnames';
import ButtonComponent from '../components/ButtonComponent';
// import cardImage from '../assets/images/wisebirdImage.svg';

const CardComponent = (props) => {
    // let image;
    let gradient;
    switch (props.id) {
        case 1:
            // image = {cardImage};
            gradient = classnames(classes.cardBackground, classes.gradientRed);
            break;
        case 2:
            // image = '';
            gradient = classnames(classes.cardBgInverted, classes.gradientBlue);
            break;
        case 3:
            // image = '';
            gradient = classnames(classes.cardBackground, classes.gradientGreen);
            break;
        default:
            // image = '';
            gradient = classnames(classes.cardBackground, classes.gradientBlack);
    }

    return (
        <>
            <div className={classes.cardComponent}>
            
                {props.inverted ?
                    <div className={classes.cardContainer}>
                        <div className={gradient}>
                            <div className={classnames(classes.cardTopBackground, classes.cardTopBgInverted)}>
                            </div>
                        </div>
                        <div className={classnames(classes.cardContent, classes.cardInverted)}>
                            <div className="h3Header">{props.title}</div>
                            <div className={classes.cardDesc}>{props.desc}</div>
                            <ButtonComponent id={props.id} link={props.link} text="Go to Github"></ButtonComponent>
                        </div>
                    </div>
                    :
                    <div className={classes.cardContainer}>
                        <div className={classes.cardContent}>
                            <div className="h3Header">{props.title}</div>
                            <div className={classes.cardDesc}>{props.desc}</div>
                            <ButtonComponent id={props.id} link={props.link} text="Go to Github"></ButtonComponent>
                        </div>
                        <div className={gradient}>
                            <div className={classes.cardTopBackground}></div>
                                {/* <img className={classes.cardImage} src={image} alt={props.title}></img> */}
                        </div>
                    </div>
                }


            </div>
        </>
    );
}

export default CardComponent;