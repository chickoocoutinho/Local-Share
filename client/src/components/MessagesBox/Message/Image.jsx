import React, {useState , useEffect} from 'react';
import styles from '../Messages.module.css';

const Image = ({ path }) => {
    
    return (
        <img src={require(`${path}`)} className={styles.chip} />
    );
}

export default Image;