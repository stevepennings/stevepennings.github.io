import React from 'react';
import '../css/Introduction.css';
import { Container } from '@material-ui/core';

const IntroductionComponent = () => {
    return (
        <>
            <div className="Home-introductionSection">
                <Container>
                    <div className="Home-introductionTitle h1Header">
                        Hi! I'm Steve
                    </div>
                    <div className="Home-introductionDescription">
                        A passionate frontend developer with a BSc Software Engineering certificate
                    </div>
                </Container>
            </div>
        </>
    );
}

export default IntroductionComponent;