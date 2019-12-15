import React, { Component } from 'react';
import '../css/Skills.css';
import SubtitleComponent from '../components/SubtitleComponent';
import { Container } from '@material-ui/core';
import PaperGridComponent from '../components/PaperGridComponent';

class SkillsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const skills = [
            { id: 1, title: 'UI/UX', desc: 'Landingpages, Wireframes, Prototypes and Web Apps' },
            { id: 2, title: 'Frontend', desc: 'HTML, CSS, JavaScript, TypeScript, React and Angular' },
            { id: 3, title: 'Illustration', desc: 'Icons and images with Illustrator and Photoshop' },
            { id: 4, title: 'Databases', desc: 'SQL and NoSQL' },
            { id: 5, title: 'Backend', desc: 'C#, Java and PHP' },
            { id: 6, title: 'Project management', desc: 'Scrum and Agile' }
        ];
        return (
            <>
                <Container maxWidth="md">
                    <div className="skillsSection">
                        <SubtitleComponent title="I Work With"></SubtitleComponent>
                        <PaperGridComponent skills={skills}></PaperGridComponent>
                    </div>
                </Container>
            </>
        );
    }
}

export default SkillsContainer;