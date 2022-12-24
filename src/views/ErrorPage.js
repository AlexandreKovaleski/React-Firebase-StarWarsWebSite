import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const ErrorPage = () => {

    const navigate = useNavigate();

    const backHome = () => {
        navigate('/')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid md={6}>
                        <Typography variant="h1">
                            404
                        </Typography>
                        <Typography variant="h6">
                            A página que você tentou acessar não existe.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={backHome}>Back Home</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ErrorPage;
