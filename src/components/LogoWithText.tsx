import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import nelsonLogo from '../assets/nelson-without-background.svg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        textDecoration: 'none',
    },
    text: {
        color: 'white',
        fontSize: '1.25rem',
        fontWeight: 500,
        letterSpacing: '.02em',
    },
    logo: {
        height: 30,
        width: 30,
        margin: '0 12px',
    },
});

export const LogoWithText: FunctionComponent = () => {
    const styles = useStyles();
    return (
        <a className={styles.root} href="/">
            <img className={styles.logo} src={nelsonLogo} alt="Nelson Logo" />
            <Typography className={styles.text}>Nelson</Typography>
        </a>
    );
};
