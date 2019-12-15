import React from 'react';
import classes from '../css/CardComponent.module.css';
import classnames from 'classnames';
import ButtonComponent from '../components/ButtonComponent';
import wisebirdImage from '../assets/images/wisebirdImage.svg';
import chessjsImage from '../assets/images/chessjsImage.svg';
import feadrImage from '../assets/images/feadrImage.svg';

const CardComponent = (props) => {
    let image;
    let gradient;
    switch (props.id) {
        case 1:
            image = wisebirdImage;
            gradient = classnames(classes.cardBackground, classes.gradientBlue);
            break;
        case 2:
            image = chessjsImage;
            gradient = classnames(classes.cardBgInverted, classes.gradientTurq);
            break;
        case 3:
            image = feadrImage;
            gradient = classnames(classes.cardBackground, classes.gradientPurple);
            break;
        default:
            // image = cardImage;
            gradient = classnames(classes.cardBackground, classes.gradientBlack);
    }

    return (
        <>
            <div className={classes.cardComponent}>

                {props.inverted ?
                    <div className={classes.cardContainer}>
                        <div className={gradient}>
                            <div className={classnames(classes.cardTopBackground, classes.cardTopBgInverted)}></div>
                            <img src={image} className={classes.cardImage} alt={props.title} />
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
                            <img src={image} className={classes.cardImage} alt={props.title} />
                        </div>
                    </div>
                }


            </div>
        </>
    );
}

export default CardComponent;