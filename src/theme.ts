import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const colors = {
    primary: blue.A200,
};

const headingTypography = {
    fontFamily: 'Barlow',
};

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#f44336',
        },
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    typography: {
        fontFamily: 'Open Sans',
        useNextVariants: true,
        h1: headingTypography,
        h2: headingTypography,
        h3: headingTypography,
        h4: headingTypography,
        h5: headingTypography,
        h6: headingTypography,
    },
    overrides: {
        MuiButton: {
            label: {
                fontFamily: 'Barlow',
                fontWeight: 600,
                textTransform: 'none',
            },
        },
    },
});

export default theme;
