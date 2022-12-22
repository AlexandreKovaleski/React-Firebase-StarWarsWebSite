import React from 'react';
import { Grid } from '@mui/material';

import Cabecalho from '../components/Cabecalho';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

const About = () => {
    return (
        <>

            <Grid container style={{ padding: 10 }}>

                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <Menu />
                </Grid>

                <Grid item md={5} xs={12} sm={12}></Grid>

                <Grid item md={2} xs={12} sm={12}>

                    <div
                        className='about'>
                        <h2 style={{ textAlign: "center" }}>Desenvolvedor</h2>
                        
                    </div>

                </Grid>

                <Grid item md={5} xs={12} sm={12}></Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>

            </Grid>
        </>
    );
}

export default About;
