import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    article: {
        width: '100vw',
        height: '100%',
        flexGrow: 1,
        padding: '32px 80px',
    },
});

export const PageContainer: FunctionComponent = ({ children }) => {
    const styles = useStyles();
    return <article className={styles.article}>{children}</article>;
};
