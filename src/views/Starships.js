import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../components/Cabecalho';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

const Starships = () => {

    const [starships, setStarships] = useState([])

    useLayoutEffect(() => {

        axios.get(
            "https://swapi.dev/api/starships/")

            .then((results) => {
                setStarships(results.data.results)
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
                        className='starships' style={{ textAlign: 'center' }}>
                        <table>
                            {
                                starships.map((item, key) =>
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
                                        ><b>Modelo:</b><br /> {item.model}</td><br />
                                        <td
                                            style=
                                            {{
                                                widht: "33%"
                                            }}
                                        ><b>Fábrica:</b><br /> {item.manufacturer}</td><br />
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

export default Starships;
