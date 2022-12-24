import React from 'react';
import { Grid } from '@mui/material';


import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpSeven = () => {

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
                            Star Wars Episódio 7:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            O Despertar da Força
                        </h2>

                        <div
                            className='films'
                            style=
                            {{
                                textAlign: 'justify',
                                lineHeight: 1.5
                            }}>
                            <b>Titulo original: </b> The Force Awakens <br /> <br />
                            <b>Abertura do filme: </b> Luke Skywalker has vanished. In his absence, the sinister
                            FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi,
                            has been destroyed. With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE.
                            She is desperate to find her brother Luke and gain his help in restoring peace and
                            justice to the galaxy. Leia has sent her most daring pilot on a secret mission
                            to Jakku, where an old ally has discovered a clue to Luke's whereabouts.... <br /> <br />

                            <b>Abertura do filme em Português:</b> Luke Skywalker está desaparecido. Em sua ausência, a sinistra
                            PRIMEIRA ORDEM se ergue das cinzas do Império e não irá descansar até que Skywalker, o último Jedi,
                            seja destruído. Com o apoio da REPÚBLICA, a general Leia Organa lidera uma brava RESISTÊNCIA. Ela
                            está desesperada para encontrar seu irmão Luke e obter sua ajuda para restaurar a paz e
                            a justiça na galáxia. Leia enviou seu mais audacioso piloto em uma missão secreta até Jakku, onde um antigo
                            aliado descobriu uma pista sobre o paradeiro de Luke.... <br /> <br />

                            <b>Diretor: </b> J. J. Abrams <br /> <br />
                            <b>Produtor: </b> 	Kathleen Kennedy, J. J. Abrams, Bryan Burk <br /> <br />
                            <b>Data de Lançamento: </b> 2015-12-17 <br /> <br />

                            <b>Sinopse: </b> Em Star Wars: Episódio VII, décadas após a queda de Darth Vader e do Império,
                            surge uma nova ameaça: a Primeira Ordem, uma organização sombria que busca minar o poder da República
                            e que tem Kylo Ren (Adam Driver), o General Hux (Domhnall Gleeson) e o Líder Supremo Snoke (Andy Serkis)
                            como principais expoentes. Eles conseguem capturar Poe Dameron (Oscar Isaac), um dos principais pilotos
                            da Resistência, que antes de ser preso envia através do pequeno robô BB-8 o mapa de onde vive o mitológico
                            Luke Skywalker (Mark Hamill). Ao fugir pelo deserto, BB-8 encontra a jovem Rey (Daisy Ridley), que vive
                            sozinha catando destroços de naves antigas. Paralelamente, Poe recebe a ajuda de Finn (John Boyega),
                            um stormtrooper que decide abandonar o posto repentinamente. Juntos, eles escapam do
                            domínio da Primeira Ordem. <br /> <br />

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

export default EpSeven;
