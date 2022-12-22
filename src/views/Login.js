import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import loginService from "../services/AuthService"

const Login = (props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const logar = async () => {

        try {
            await loginService(email, password)
            sessionStorage.setItem("login", true)
            props.verificarLogin()
            navigate("/home")

        } catch (error) {
            alert("Invalid Email or Password")
        }
    };

    const cadastrar = () => {
        navigate("/cadastro")
    };

    const rememberEmailPassword = () => {
        setRemember(!remember)

        if (!remember) {
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
        } else {
            localStorage.removeItem("email", email)
            localStorage.removeItem("password", password)
        }
    };

    useLayoutEffect(() => {
        if (localStorage.getItem("email")) {
            setEmail(localStorage.getItem("email"))
            setPassword(localStorage.getItem("password"))
            setRemember(true)
        }
    }, []);


    return (
        <>
            <Grid container
                style={{ padding: 10 }}>

                <Grid item md={12} xs={12} sm={12}>
                    <div className='coluna'
                        style={{
                            textAlign: "center",
                            marginBottom: 50
                        }}>
                        <h1>Wellcome</h1>
                        <h2>Star Wars Fans</h2>
                    </div>
                </Grid>

                <Grid item md={4} xs={12} sm={12}></Grid>
                <Grid item md={4} xs={12} sm={12}
                    style={{
                        backgroundColor: "#d4d4d4",
                        padding: 15,
                        borderRadius: 15
                    }}>

                    <div
                        style={{ marginBottom: 15 }}>
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={remember}
                                        onChange={rememberEmailPassword} />}
                                label="Remember"
                                style={{ float: "left" }} />

                        </FormGroup>
                    </div>

                    <div
                        style={{
                            marginTop: 15,
                            float: "right"
                        }}>
                        <Button variant="outlined"
                            style={{ marginRight: 10 }}
                            onClick={logar}>
                            Login
                        </Button>

                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}></Grid>
            </Grid>
        </>
    );
}

export default Login;