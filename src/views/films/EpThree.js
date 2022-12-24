import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpThree = () => {

    const [film, setFilm] = useState([])

    useLayoutEffect(() => {

        axios.get("https://swapi.dev/api/films/6")
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
                            Star Wars Episódio 3: A Vingança dos Sith
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            A Vingança dos Sith
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

                            <b>Abertura do filme em Português:</b> Guerra! A República está desmoronando sob o ataque do
                            impiedoso Lorde Sith, Conde Dookan. Há heróis de ambos os lados. O Mal está por toda a parte.
                            Em uma manobra surpreendente, o diabólico líder Droide, General Grievous, invadiu a
                            capital da República e sequestrou o Chanceler Palpatine, líder do Senado Galáctico.
                            Enquanto o Exército Separatista de Droides tenta escapar da capital sitiada com seu valioso
                            refém, dois cavaleiros Jedi lideram uma missão desesperada para resgatar o Chanceler preso.... <br /> <br />

                            <b>Diretor: </b> {film.director} <br /> <br />
                            <b>Produtor: </b> {film.producer} <br /> <br />
                            <b>Data de Lançamento: </b> {film.release_date} <br /> <br />

                            <b>Sinopse: </b> Em Star Wars: Episódio III, as Guerras Clônicas estão em pleno andamento
                            e as diferenças entre o Conselho Jedi e o Chanceler Palpatine (Ian McDiarmid) aumentam cada
                            vez mais. Anakin Skywalker (Hayden Christensen) mantém um elo de lealdade com Palpatine, ao
                            mesmo tempo em que luta para que seu casamento com Padmé Amidala (Natalie Portman) não seja
                            afetado por esta situação. Seduzido por promessas de poder, Anakin se aproxima cada vez mais de
                            Darth Sidious (Ian McDiarmid) até se tornar o temível Darth Vader. Juntos eles tramam um plano
                            para aniquilar de uma vez por todas com os cavaleiros jedi. <br /> <br />

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

export default EpThree;
