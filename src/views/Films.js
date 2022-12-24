import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import Cabecalho from '../components/Cabecalho';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import img1 from '../assets/images/EpisodioI.png';
import img2 from '../assets/images/EpisodioII.png';
import img3 from '../assets/images/EpisodioIII.png';
import img4 from '../assets/images/EpisodioIV.png';
import img5 from '../assets/images/EpisodioV.png';
import img6 from '../assets/images/EpisodioVI.png';
import img7 from '../assets/images/EpisodioVII.png';
import img8 from '../assets/images/EpisodioVIII.png';
import img9 from '../assets/images/EpisodioIX.png';
import img10 from '../assets/images/HanSolo.png';
import img11 from '../assets/images/RogueOne.png';
import img12 from '../assets/images/Sequence.png';

const Films = () => {
    return (
        <>

            <Grid container style={{ padding: 10 }}>

                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>

                <Grid item md={12} xs={12} sm={12}>
                    <Menu />
                </Grid>


                <Grid item md={1} xs={12} sm={12}></Grid>
                <Grid item md={10} xs={12} sm={12}>

                    <Link to='/films/ep-one'>
                        <div style={{ float: "center" }}>
                            <img
                                src={img1}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50
                                }}
                                alt='Star Wars Episódio 1: A Ameaça Fantasma' />
                        </div>

                    </Link>

                    <Link to='/films/ep-two'>
                        <div>
                            <img
                                src={img2}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50
                                }}
                                alt='Star Wars Episódio 2: O Ataque dos Clones' />
                        </div>
                    </Link>

                    <Link to='/films/ep-three'>
                        <div>
                            <img
                                src={img3}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50
                                }}
                                alt='Star Wars Episódio 3: A Vingança dos Sith' />
                        </div>
                    </Link>

                    <Link to='/films/ep-four'>
                        <div>
                            <img
                                src={img4}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50
                                }}
                                alt='Star Wars Episódio 4: Uma Nova Esperança' />
                        </div>
                    </Link>

                    <Link to='/films/ep-five'>
                        <div>
                            <img
                                src={img5}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Star Wars Episódio 5: O Império Contra-Ataca' />
                        </div>
                    </Link>

                    <Link to='/films/ep-six'>
                        <div>
                            <img
                                src={img6}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Star Wars Episódio 6: O Retorno de Jedi' />
                        </div>
                    </Link>

                    <Link to='/films/ep-seven'>
                        <div>
                            <img
                                src={img7}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Star Wars Episódio 7: O Despertar da Força' />
                        </div>
                    </Link>

                    <Link to='/films/ep-eight'>
                        <div>
                            <img
                                src={img8}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Star Wars Episódio 8: Os Últimos Jedi' />
                        </div>
                    </Link>

                    <Link to='/films/ep-nine'>
                        <div>
                            <img
                                src={img9}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Star Wars Episódio 9: A Ascensão Skywalker' />
                        </div>
                    </Link>

                    <Link to='/films/han-solo'>
                        <div>
                            <img
                                src={img10}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Han Solo: Uma História Star Wars' />
                        </div>
                    </Link>

                    <Link to='/films/rogue-one'>
                        <div>
                            <img
                                src={img11}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Rogue One: Uma História Star Wars' />
                        </div>
                    </Link>

                    <Link to='/films/sequence'>
                        <div>
                            <img
                                src={img12}
                                style=
                                {{
                                    width: 250,
                                    float: 'left',
                                    marginLeft: 50,
                                    marginTop: 20
                                }}
                                alt='Rogue One: Uma História Star Wars' />
                        </div>
                    </Link>

                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>

            </Grid>
        </>
    );
}

export default Films;
