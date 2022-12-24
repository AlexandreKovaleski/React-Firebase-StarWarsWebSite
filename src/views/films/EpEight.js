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
                            Star Wars Episódio 8:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            Os Últimos Jedi
                        </h2>

                        <div
                            className='films'
                            style=
                            {{
                                textAlign: 'justify',
                                lineHeight: 1.5
                            }}>
                            <b>Titulo original: </b> The Last Jedi <br /> <br />
                            <b>Abertura do filme: </b> The FIRST ORDER reigns. Having decimated the peaceful Republic,
                            Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.
                            Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny,
                            certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.
                            “But the Resistance has been exposed. As the First Order speeds toward the rebel base,
                            the brave heroes mount a desperate escape.... <br /> <br />

                            <b>Abertura do filme em Português:</b> A PRIMEIRA ORDEM reina. Tendo dizimado a pacífica
                            República, o Líder Supremo Snoke agora envia suas implacáveis legiões para assumir militarmente
                            o controle da galáxia. Somente os guerreiros da RESISTÊNCIA da General Leia Organa se colocam
                            contra a tirania crescente, certos de que o Mestre Jedi Luke Skywalker vai retornar
                            e devolver uma fagulha de esperança à luta. Mas a resistência foi exposta. Enquanto a Primeira Ordem
                            Se direciona para a Base Rebelde os valentes heróis preparam uma fuga desesperada.... <br /> <br />

                            <b>Diretor: </b> Rian Johnson <br /> <br />
                            <b>Produtor: </b> Kathleen Kennedy, Ram Bergman <br /> <br />
                            <b>Data de Lançamento: </b> 2014-12-17 <br /> <br />

                            <b>Sinopse: </b> Em Star Wars: Episódio VIII, após encontrar o mítico e recluso Luke Skywalker (Mark Hamill)
                            em uma ilha isolada, a jovem Rey (Daisy Ridley) busca entender o balanço da Força a partir dos ensinamentos
                            do Mestre Jedi. Paralelamente, a Primeira Ordem de Kylo Ren (Adam Driver) se reorganiza para enfrentar a
                            Resistência. <br /> <br />

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
