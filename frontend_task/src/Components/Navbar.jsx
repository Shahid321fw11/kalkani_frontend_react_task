import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container >
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        component="a"
                        sx={{
                            mr: 5,
                            display: { md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                        }}
                    >
                        <Link to="/screen1" style={{ textDecoration: 'none', color: 'white' }}>
                            Screen1
                        </Link>
                    </Typography>

                    <Typography
                        noWrap
                        component="a"
                        sx={{
                            mr: 5,
                            display: { md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                        }}
                    >
                        <Link to="/screen2" style={{ textDecoration: 'none', color: 'white' }}>
                            Screen2
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navbar;