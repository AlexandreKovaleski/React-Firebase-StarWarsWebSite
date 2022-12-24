import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

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

                        <Link to="/home">
                            <div
                                className='itemMenu'>
                                HOME
                            </div>
                        </Link>

                        <Link to="/films">
                            <div
                                className='itemMenu'>
                                FILMS
                            </div>
                        </Link>

                        <Link to='/starships'>
                            <div
                                className='itemMenu'>
                                STARSHIPS
                            </div>
                        </Link>

                        <Link to='/people'>
                            <div
                                className='itemMenu'>
                                PEOPLE
                            </div>
                        </Link>

                        <Link to='/planets'>
                            <div
                                className='itemMenu'>
                                PLANETS
                            </div>
                        </Link>

                        <Link to='/species'>
                            <div
                                className='itemMenu'>
                                SPECIES
                            </div>

                        </Link>
                        
                        <Link to='/about'>
                            <div
                                className='itemMenu'>
                                ABOUT
                            </div>

                        </Link>

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
