import React from 'react';
import PaperComponent from './PaperComponent';

const PaperGridComponent = (props) => {
    const skillsList = props.skills;

    const mapSkills = skillsList.map((skill, index) =>
        <PaperComponent key={index} id={skill.id} title={skill.title} desc={skill.desc}></PaperComponent>
    );

    return (
        <>
            <div className="skillsGrid">
                {mapSkills}
            </div>
        </>
    );
}

export default PaperGridComponent;
