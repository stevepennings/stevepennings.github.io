import React from 'react';
import SubtitleDivider from '../assets/images/divider.svg';

const SubtitleComponent = (props) => {
    return (
        <>
            <div className="h2Header">
                {props.title}
            </div>
            <img src={SubtitleDivider} className="subtitleDivider" alt="_____"></img>
        </>
    );
}

export default SubtitleComponent;