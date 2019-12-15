import React, { Component } from 'react';
import classes from '../css/Gallery.module.css';
// import classnames from 'classnames';

class GalleryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className={classes.galleryContainer}>
                    <div className={classes.footerBackground}>
                        <div className={classes.gallery}>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default GalleryContainer;