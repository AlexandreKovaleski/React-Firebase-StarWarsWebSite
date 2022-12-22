import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.removeItem("login")
        navigate("/")

    }

    return (
        <>

            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <div className='menu'>
                        <div className='itemMenu'>HOME</div>
                        <div className='itemMenu'>FILMS</div>
                        <div className='itemMenu'>STARSHIPS</div>
                        <div className='itemMenu'>PEOPLE</div>
                        <div className='itemMenu'>PLANETS</div>
                        <div className='itemMenu'>SPECIES</div>
                        <div className='itemMenu'>ABOUT</div>
                        <div
                            className='itemMenu'
                            onClick={logout}>
                            LOGOUT
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Menu;
