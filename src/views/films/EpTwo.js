import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const EpTwo = () => {

    const [film, setFilm] = useState([])

    useLayoutEffect(() => {

        axios.get("https://swapi.dev/api/films/5")
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
                            Star Wars Episódio 2:
                        </h1>
                        <h2
                            style=
                            {{
                                textAlign: 'center',

                            }}>
                            O Ataque dos Clones
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

                            <b>Abertura do filme em Português:</b> Há apreensão no Senado Galáctico. Milhares de sistemas
                            solares manifestaram sua intenção de deixar a República. Esse movimento separatista,
                            sob a liderança do misterioso Conde Dookan, tornou difícil para o pequeno número de
                            Cavaleiros Jedi manter a paz e a ordem na galáxia.
                            A senadora Amidala, ex-rainha de Naboo, está voltando ao Senado Galáctico para votar a
                            delicada questão de criar um Exército da República para ajudar os combalidos Jedi.... <br /> <br />

                            <b>Diretor: </b> {film.director} <br /> <br />
                            <b>Produtor: </b> {film.producer} <br /> <br />
                            <b>Data de Lançamento: </b> {film.release_date} <br /> <br />

                            <b>Sinopse: </b> Em Star Wars: Episódio 2, dez anos após a tentativa frustrada de invasão do 
                            planeta Naboo, Obi-Wan Kenobi (Ewan McGregor), Anakin Skywalker (Hayden Christensen) e Padmé Amidala 
                            (Natalie Portman) estão juntos novamente. Neste período de tempo Obi-Wan passou de aprendiz a 
                            professor dos ensinamentos jedi para Anakin, sendo que ambos foram destacados para proteger a 
                            agora senadora Amidala, que tem sua vida ameaçada por facções separatistas da República, que 
                            ameaçam desencadear uma guerra civil intergalática. Com o passar do tempo surge um romance 
                            proibido entre Anakin e Amidala, pois os cavaleiros jedi não têm permissão para se apaixonarem. <br /> <br />


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

export default EpTwo;
