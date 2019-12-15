import React, { Component } from 'react';
import classes from '../css/Experience.module.css';
import { Container } from '@material-ui/core';
import CardComponent from '../components/CardComponent';
import SubtitleComponent from '../components/SubtitleComponent';
// import classnames from 'classnames';

class ExperienceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const listExperiences = [
            {
                id: 1, title: 'Wisebird', link: 'https://github.com/stevepennings/Wisebird', inverted: false,
                desc: 'A responsive webapplication made with Polymer and NodeJS. Users can learn the Dutch language in various ways of questioning from English',
                activities: 'scrum'
            },
            {
                id: 2, title: 'Chesscript', link: 'https://github.com/stevepennings/ChessJS', inverted: true,
                desc: 'A webapplication made with HTML, CSS and Javascript. Users can play the game Chess against eachother on one device',
                activities: 'scrum'
            },
            {
                id: 3, title: 'Feadr', link: 'https://github.com/cassshh/Feadr', inverted: false,
                desc: 'A social media PWA made with Polymer and NodeJS. Users are able to post/read stories based on their location',
                activities: 'scrum'
            }
        ];

        const renderExperiences = listExperiences.map((experience, index) =>
            <CardComponent key={index} id={experience.id} title={experience.title} link={experience.link} inverted={experience.inverted} desc={experience.desc}></CardComponent>
        );
        return (
            <>
                <Container maxWidth="md">
                    <div className={classes.experiencesGrid}>
                        <SubtitleComponent title="I've Worked On"></SubtitleComponent>
                        {renderExperiences}
                    </div>
                </Container>
            </>
        );
    }
}

export default ExperienceContainer;