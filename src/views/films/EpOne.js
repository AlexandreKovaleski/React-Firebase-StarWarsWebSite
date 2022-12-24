import React, { useState, useLayoutEffect } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';


const EpOne = () => {

    const [film, setFilm] = useState([])

    useLayoutEffect(() => {

        axios.get("https://swapi.dev/api/films/4")
            .then((results) => setFilm(results.data))
            .catch((error) => console.log(error))

    }, [])

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
                            Star Wars Episódio 1:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            A Ameaça Fantasma
                        </h2>

                        <div
                            className='films'
                            style=
                            {{
                                textAlign: 'justify',
                                lineHeight: 1.5
                            }}>
                            <b>Titulo original: </b> {film.title} <br /> <br />
                            <b>Abertura do filme: </b> {film.opening_crawl} <br /> <br />

                            <b>Abertura do filme em Português:</b> A República Galáctica está em grande tumulto.
                            Em disputa estão os impostos sobre as rotas comerciais para os sistemas estelares exteriores.
                            Na esperança de resolver o assunto com um bloqueio de implacáveis naves de guerra,
                            a gananciosa federação de comércio interrompe todos os carregamentos para o pequeno planeta Naboo.
                            Enquanto o Congresso da República debate incessantemente esta alarmante cadeia de acontecimentos, o Chanceler
                            Supremo manda secretamente dois Cavaleiros Jedi, guardiões da paz e da justiçana galáxia,
                            resolver o conflito.... <br /> <br />

                            <b>Diretor: </b> {film.director} <br /> <br />
                            <b>Produtor: </b> {film.producer} <br /> <br />
                            <b>Data de Lançamento: </b> {film.release_date} <br /> <br />

                            <b>Sinopse: </b> Em Star Wars: Episódio I, quando a maquiavélica Federação Comercial
                            planeja invadir o pacífico planeta Naboo, o guerreiro Jedi Qui-Gon Jinn (Liam Neeson)
                            e seu aprendiz Obi-Wan Kenobi (Ewan McGregor) embarcam em uma aventura para tentar salvar
                            o planeta. Viajam com eles a jovem Rainha Amidala (Natalie Portman), que é visada pela
                            Federação pois querem forçá-la a assinar um tratado político. Eles têm de viajar para os
                            distantes planetas Tatooine e Coruscant em uma desesperada tentativa de salvar o mundo de
                            Darth Sidious (Ian McDiarmid), o demoníaco líder da Federação que sempre surge em imagens
                            tridimensionais (a ameaça fantasma). Durante a viagem, Qui-Gon Jinn conhece um garoto de
                            nove anos que deseja treiná-lo para ser tornar um Jedi, pois o menino tem todas as qualidades
                            para isto. Mas o tempo revelará que nem sempre as coisas são o que aparentam. <br /> <br />


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

export default EpOne;
