import React from 'react';
import { Avatar, Grid } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

import Cabecalho from '../components/Cabecalho';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import ProfilePhoto from '../assets/images/profilePhoto.jpg';


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

                <Grid item md={4} xs={12} sm={12}></Grid>
                
                <Grid item md={4} xs={12} sm={12}>

                    <div className="about">
                        
                        <Avatar
                            sx={{ width: 150, height: 150, objectPosition: 'top' }}
                            style={{ objectPosition: 'top' }}
                            alt=""
                            src={ProfilePhoto}
                        />
                        
                        <h1>Alexandre Kovaleski Fochi</h1>
                        
                        <div className="link-group">
                            <a
                                href="https://www.linkedin.com/in/alexandrefochi/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedIn />
                            </a>
                            
                            <a
                                href="https://github.com/AlexandreKovaleski"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHub />
                            </a>
                        </div>
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
