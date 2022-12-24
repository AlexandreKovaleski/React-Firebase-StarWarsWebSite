import React from 'react';
import { Grid } from '@mui/material';

import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpNine = () => {
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
                            Star Wars Episódio 9:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            A Ascensão Skywalker
                        </h2>

                        <div
                            className='films'
                            style=
                            {{
                                textAlign: 'justify',
                                lineHeight: 1.5
                            }}>
                            <b>Titulo original: </b> The Rise of Skywalker <br /> <br />
                            <b>Abertura do filme: </b> The dead speak! The galaxy has heard a mysterious broadcast,
                            a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.
                            GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY,
                             the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.
                            Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, 
                            determined to destroy any threat to his power....<br /> <br />

                            <b>Abertura do filme em Português:</b> Os mortos falam! A galáxia ouviu uma transmissão misteriosa,
                            uma ameaça de VINGANÇA na voz sinistra do finado IMPERADOR PALPATINE. A GENERAL LEIA ORGANA
                            enviou agentes secretos para coletar informações, enquanto REY, última esperança dos Jedi,
                            treina para a batalha contra a diabólica PRIMEIRA ORDEM. Enquanto isso, o Líder Supremo
                            KYLO REN busca furiosamente o Imperador fantasma, determinado a destruir qualquer
                            ameaça ao seu poder.... <br /> <br />

                            <b>Diretor: </b> J. J. Abrams <br /> <br />
                            <b>Produtor: </b> Kathleen Kennedy, J. J. Abrams, Michelle Rejwan <br /> <br />
                            <b>Data de Lançamento: </b> 2019-12-19 <br /> <br />
                            
                            <b>Sinopse: </b> Em Star Wars: Episódio IX, com o retorno do Imperador Palpatine (Ian McDiarmid), 
                            todos voltam a temer seu poder. Assim, a Resistência toma a frente da batalha que ditará os 
                            rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra 
                            em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir 
                            de sua complexa ligação com Kylo Ren (Adam Driver), que também se 
                            encontra em conflito pela Força. <br /> <br />

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

export default EpNine;
