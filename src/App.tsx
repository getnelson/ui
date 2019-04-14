import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import routes from './Routes';
import { PageContainer, LogoWithText } from './components';

const useStyles = makeStyles({
    container: {
        width: '100vw',
        height: '100vh',
    },
    toolbarLeft: {
        flexGrow: 1,
        display: 'flex',
    },
    typography: {
        color: 'white',
    },
});

function App() {
    const styles = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={styles.toolbarLeft}>
                            <LogoWithText />
                        </div>
                        <div>
                            {/* Avatar */}
                            <Button className={styles.typography}>Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <PageContainer>{routes}</PageContainer>
            </div>
        </ThemeProvider>
    );
}

export default App;
