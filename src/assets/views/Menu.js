import { Grid } from '@mui/material';
import React from 'react';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

const Menu = () => {
    return (
        <>

            <Grid container style={{ padding: 10 }}>

                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <div className='menu'>
                        <div className='itemMenu'>HOME</div>
                        <div className='itemMenu'>FILMS</div>
                        <div className='itemMenu'>STARSHIPS</div>
                        <div className='itemMenu'>PEOPLE</div>
                        <div className='itemMenu'>PLANETS</div>
                        <div className='itemMenu'>SPECIES</div>
                        <div className='itemMenu'>ABOUT</div>
                        <div className='itemMenu'>LOGOFF</div>

                    </div>
                </Grid>

                <div
                    className='corpo'>
                    corpo
                </div>

                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>

            </Grid>
        </>
    );
}

export default Menu;
