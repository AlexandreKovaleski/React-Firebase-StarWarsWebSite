import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    const navigate = useNavigate();

    const logar = () => {
       navigate("/home")
    };

    const cadastrar = () => {
        navigate("/cadastro")
    }

    return (

        <Grid container style={{ padding: 10 }}>

            <Grid item md={12} xs={12} sm={12}>
                <div className='coluna'
                    style={{ textAlign: "center", marginBottom: 50 }}>
                    <h1>Wellcome</h1>
                    <h2>Star Wars Fans</h2>
                </div>
            </Grid>

            <Grid item md={4} xs={12} sm={12}></Grid>
            <Grid item md={4} xs={12} sm={12}
                style={{ backgroundColor: "#d4d4d4", padding: 15, borderRadius: 15 }}>
                <div
                    style={{ marginBottom: 15 }}>
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        type="email"
                    />
                </div>

                <div>
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                    />
                </div>
                <div
                    style={{ marginTop: 15, float: "right" }}>
                    <Button variant="outlined"
                        style={{ marginRight: 10 }}
                        onClick={logar}>
                        Login
                    </Button>

                    <Button variant="outlined"
                        onClick={cadastrar}>
                        Register
                    </Button>

                </div>
            </Grid>
            <Grid item md={12} xs={12} sm={12}></Grid>
        </Grid>

    );
}

export default Login;