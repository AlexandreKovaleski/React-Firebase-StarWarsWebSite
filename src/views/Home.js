import React from 'react';
import { Grid } from '@mui/material';

import Cabecalho from '../components/Cabecalho';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import imgHome from '../assets/images/imgHome.png';

const Home = () => {
    return (
        <>

            <Grid container style={{ padding: 10 }}>

                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <Menu />
                </Grid>


                <Grid item md={2} xs={12} sm={12}></Grid>
                
                <Grid item md={8} xs={12} sm={12} style={{ textAlign: 'center' }}>

                    <div
                        className='home'>
                        <h1
                            style=
                            {{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 42
                            }}>
                            Sejam todos bem-vindos
                        </h1>
                        
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            Que a força esteja com você
                        </h2>

                        <div
                            style=
                            {{
                                textAlign: 'justify',
                                marginTop: 90,
                                marginBottom: 30
                            }}>
                            <b>Star Wars</b> é o título de uma<i>"ópera espacial"</i>, nas próprias palavras do seu autor que assim
                            designou o universo de fantasia que compunha este projeto, que foi transformada em uma série de
                            nove filmes de ficção científica. Como subprodutos surgiram também uma franquia literária,
                            uma série de jogos eletrônicos e desenhos animados, baseados nas idéias do diretor e roteirista George Lucas.
                            <br /><br />
                            Os filmes, organizados em duas trilogias, abordam a transição histórica <i>"numa galáxia muito, muito distante..."</i>
                            onde ocorre a queda da República Galáctica e a implantação do Império Galáctico sob comando do
                            senador Palpatine (Lorde Sith).
                        </div>

                        <div
                            style=
                            {{
                                textAlign: 'right',
                                marginBottom: 60
                            }}>
                            <i>Seres luminosos somos nós. Não esta matéria bruta.</i> (Yoda)
                        </div>

                        <div>
                            <img
                                src={imgHome}
                                style=
                                {{
                                    width: 350,
                                    float: 'center',
                                }}
                                alt='Baby Yoda' />
                        </div>

                    </div>

                </Grid>
                <Grid item md={2} xs={12} sm={12}></Grid>
                
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>

            </Grid>
        </>
    );
}

export default Home;
