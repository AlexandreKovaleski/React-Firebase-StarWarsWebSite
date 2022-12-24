import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpFive = () => {

    const [film, setFilm] = useState([])

    useLayoutEffect(() => {

        axios.get("https://swapi.dev/api/films/2")
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
                            Star Wars Episódio 5:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            O Império Contra-Ataca
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

                            <b>Abertura do filme em Português:</b> É um período crítico para as Forças Rebeldes. Embora a
                            Estrela da Morte tenha sido destruída, as Tropas Imperiais conseguem expulsar os
                            rebeldes de sua base secreta e os perseguem por toda a galáxia.
                            Fugindo da terrível Frota Imperial, um grupo de Rebeldes chefiados por Luke Skywalker, estabelece uma
                            nova base secreta no remoto mundo gelado de Hoth. O senhor do mal, Lorde Darth
                            Vader, obcecado pela idéia de encontrar o jovem Skywalker, enviou milhares de sondas
                            remotas para os pontos mais longínquos do espaço.... <br /> <br />

                            <b>Diretor: </b> {film.director} <br /> <br />
                            <b>Produtor: </b> {film.producer} <br /> <br />
                            <b>Data de Lançamento: </b> {film.release_date} <br /> <br />

                            <b>Sinopse: </b> Em Star Wars: Episódio V, as forças imperais comandadas por Darth Vader 
                            (David Prowse/James Earl Jones) lançam um ataque contra os membros da resistência, que 
                            são obrigados a fugir. Enquanto isso, Luke Skywalker (Mark Hamill) tenta encontrar o 
                            Mestre Yoda, que poderá ensiná-lo a dominar a "Força" e torná-lo um cavaleiro Jedi. 
                            No entanto, Darth Vader planeja levá-lo para o Lado Negro da "Força". <br /> <br />

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

export default EpFive;
