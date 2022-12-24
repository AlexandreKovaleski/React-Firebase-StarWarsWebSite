import React from 'react';
import { Grid } from '@mui/material';


import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpEight = () => {
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
                        className='films'>
                        <h1
                            style=
                            {{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 32
                            }}>
                            Han Solo:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            Uma História Star Wars
                        </h2>

                        <div
                            className='films'
                            style=
                            {{
                                textAlign: 'justify',
                                lineHeight: 1.5
                            }}>
                            <b>Titulo original: </b> Solo: A Star Wars Story <br /> <br />

                            <b>Abertura do filme: </b> It is a lawless time. Crime Syndicates compete for resources – food,
                            medicine, and hyperfuel. On the shipbuilding planet of Corellia, the foul Lady Proxima forces runaways
                            into a life of crime in exchange for shelter and protection. On these mean streets,
                            a young man fights for survival, but yearns to fly among the stars <br /> <br />

                            <b>Diretor: </b> Ron Howard <br /> <br />
                            <b>Produtor: </b> Kathleen Kennedy, Allison Shearmur, Simon Emanuel <br /> <br />
                            <b>Data de Lançamento: </b> 2018-05-24 <br /> <br />

                            <b>Sinopse: </b> Em dificuldade financeira, o piloto Han Solo (Alden Ehrenreich) e sua namorada
                            Qi'ra (Emilia Clarke) buscam algum trabalho. Eles conseguem pôr as mãos em uma substância valiosa,
                            mas perigosa, que acaba levando à perseguição do Império e à separação entre os dois. Preocupado,
                            Han usa toda a sua esperteza para se infiltrar num plano arriscado, mas que pode render a
                            oportunidade de voltar à terra natal e reencontrar a sua amada. Caso ele falhe, vai ter que
                            prestar contas ao perigoso Dryden Vos (Paul Bettany). No caminho, o piloto encontra parceiros
                            importantes, como Chewbacca (Joonas Suotamo) e Lando Calrissian (Donald Glover), o proprietário
                            original da Millennium Falcon. <br /> <br />

                        </div>

                    </div>

                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>

            </Grid>
        </>
    );
}

export default EpEight;
