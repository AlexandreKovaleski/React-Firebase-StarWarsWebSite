import React, { useLayoutEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

import Cabecalho from '../components/Cabecalho';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

const Species = () => {

    const [species, setSpecies] = useState([])

    useLayoutEffect(() => {

        axios.get(
            "https://swapi.dev/api/species/")

            .then((results) => {
                setSpecies(results.data.results)
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
                        className='species' style={{ textAlign: 'center' }}>
                        <table>
                            {
                                species.map((item, key) =>
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
                                        ><b>Média de Altura:</b><br /> {item.average_height}cm</td><br />
                                        <td
                                            style=
                                            {{
                                                widht: "33%"
                                            }}
                                        ><b>Linguagem:</b><br /> {item.language}cm</td><br />
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

export default Species;
