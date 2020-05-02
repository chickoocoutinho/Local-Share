import React from 'react';
import styles from './Messages.module.css';


const Video = ({path}) => {
    return (
        <video src={require(`${path}`)} className={styles.chip} controls>
                Your browser does not support Video Tag
        </video>
    );
}

export default Video;