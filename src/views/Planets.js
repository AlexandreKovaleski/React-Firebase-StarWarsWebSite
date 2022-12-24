import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../components/Cabecalho';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useLayoutEffect(() => {

        axios.get(
            "https://swapi.dev/api/planets/")

            .then((results) => {
                setPlanets(results.data.results)
            })
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


                <Grid item md={8} xs={12} sm={12} style={{ alignContent: 'center' }} >
                    <div
                        className='planets' style={{ textAlign: 'center' }}>
                        <table>
                            {
                                planets.map((item, key) =>
                                    <tr key={key}>
                                        <td
                                            style=
                                            {{
                                                widht: "33%",
                                            }}
                                        ><b>Nome:</b><br /> {item.name}</td><br />
                                        <td
                                            style=
                                            {{
                                                widht: "33%",
                                            }}
                                        ><b>Tipo de terreno</b><br /> {item.terrain}</td><br />
                                        <td
                                            style=
                                            {{
                                                widht: "33%"
                                            }}
                                        ><b>População:</b><br /> {item.population}</td><br />
                                    </tr>
                                )
                            }
                        </table>

                    </div>

                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>

            </Grid>
        </>
    );
}

export default Planets;
