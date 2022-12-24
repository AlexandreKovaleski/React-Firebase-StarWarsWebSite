import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpSix = () => {

    const [film, setFilm] = useState([])

    useLayoutEffect(() => {

        axios.get("https://swapi.dev/api/films/3")
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
                            Star Wars Episódio 6:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            O Retorno de Jedi
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

                            <b>Abertura do filme em Português:</b> Luke Skywalker voltou ao seu planeta natal, Tatooine,
                            na tentativa de salvar seu amigo Han Solo das garras do desprezível bandido Jabba, o Hutt.
                            Luke ainda não sabe que o IMPÉRIO GALÁCTICO iniciou secretamente a construção de uma nova estação
                            espacial bélica, mais poderosa que a primeira e temida Estrela da Morte.
                            Quando estiver pronta, esta arma definitiva certamente significará o fim do pequeno
                            grupo de rebeldes que luta para devolver a liberdade à galáxia.... <br /> <br />

                            <b>Diretor: </b> {film.director} <br /> <br />
                            <b>Produtor: </b> {film.producer} <br /> <br />
                            <b>Data de Lançamento: </b> {film.release_date} <br /> <br />

                            <b>Sinopse: </b> Em Star Wars: Episódio VI, o Imperador Palpatine (Ian McDiarmid)
                            está supervisionando a construção de uma nova Estrela da Morte. Enquanto isso,
                            Luke Skywalker (Mark Hamill) liberta Han Solo (Harrison Ford) e a Princesa Leia (Carrie Fisher)
                            das mãos de Jabba, o pior bandido das galáxias. Luke só se tornará um cavaleiro Jedi quando destruir
                            Darth Vader, que ainda pretende atraí-lo para o lado negro da "Força". No entanto a luta entre os dois
                            vai revelar um inesperado segredo. <br /> <br />

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

export default EpSix;
