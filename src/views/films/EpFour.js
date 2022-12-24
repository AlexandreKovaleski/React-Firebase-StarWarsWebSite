import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpFour = () => {

    const [film, setFilm] = useState([])

    useLayoutEffect(() => {

        axios.get("https://swapi.dev/api/films/1")
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
                            Star Wars Episódio 4:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            Uma Nova Esperança
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

                            <b>Abertura do filme em Português:</b> É um período de guerra civil. Partindo de uma base secreta,
                            naves rebeldes atacam e conquistam sua primeira vitória contra o perverso Império Galáctico.
                            Durante a batalha, espiões rebeldes conseguem roubar os planos secretos da arma decisiva do Império, a
                            ESTRELA DA MORTE, uma estação espacial blindada com poder suficiente para destruir um planeta inteiro.
                            Perseguida pelos sinistros agentes do Império, a princesa Leia, apressa-se em voltar para casa a bordo de sua
                            nave estelar, protegendo os planos roubados que podem salvar seu povo e restaurar a liberdade na
                            galáxia.... <br /> <br />

                            <b>Diretor: </b> {film.director} <br /> <br />
                            <b>Produtor: </b> {film.producer} <br /> <br />
                            <b>Data de Lançamento: </b> {film.release_date} <br /> <br />

                            <b>Sinopse: </b> Em Star Wars - Episódio IV, o jovem Luke Skywalker (Mark Hamill) sonha
                            ir para a Academia como seus amigos, mas se vê envolvido em uma guerra intergalática
                            quando seu tio compra dois robôs e com eles encontra uma mensagem da princesa Leia Organa
                            (Carrie Fisher) para o Jedi Obi-Wan Kenobi (Alec Guinness) sobre os planos da construção
                            da Estrela da Morte, uma gigantesca estação espacial com capacidade para destruir um planeta.
                            Luke então se junta aos cavaleiros Jedi e a Han Solo (Harrison Ford), um mercenário, para
                            tentar destruir esta terrível ameaça ao lado dos membros da resistência. <br /> <br />

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

export default EpFour;
