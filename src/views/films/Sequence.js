import React from 'react';
import { Grid } from '@mui/material';


import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

const Sequence = () => {
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
                            Sequências para assistir aos filmes:
                        </h1>

                        <div
                            className='films'
                            style=
                            {{
                                textAlign: 'justify',
                                lineHeight: 1.5
                            }}>
                            <h2
                                style=
                                {{
                                    textAlign: 'center'
                                }}>
                                Ordem de Lançamento
                            </h2>

                            Esse é o jeito mais popular e segue a ordem de lançamento de cada um dos títulos. Mas há ressalvas.
                            Quando George Lucas lançou a trilogia prequela, ele acabou fazendo algumas alterações digitais
                            na trilogia original. <br /><br /> Isso fez com que certos personagens que só foram apresentados
                            nos filmes lançados a partir do final dos anos 90, aparecessem nos primeiros filmes de
                            “Star Wars”. Ou seja, se você achar melhor começar por aqui, pode ficar sem entender algumas
                            coisas, mas nada que prejudique a experiência como um todo.<br /><br />

                            - Star Wars Episódio 4: Uma Nova Esperança <br />
                            - Star Wars Episódio 5: O Império Contra-Ataca <br />
                            - Star Wars Episódio 6: O Retorno de Jedi <br />
                            - Star Wars Episódio 1: A Ameaça Fantasma <br />
                            - Star Wars Episódio 2: O Ataque dos Clones <br />
                            - Star Wars Episódio 3: A Vingança dos Sith <br />
                            - Star Wars Episódio 7: O Despertar da Força <br />
                            - Rogue One: Uma História Star Wars <br />
                            - Star Wars Episódio 8: Os Últimos Jedi <br />
                            - Han Solo: Uma História Star Wars <br />
                            - Star Wars Episódio 9: A Ascensão Skywalker <br /> <br />

                            Depois de conhecer cada um dos filmes pela ordem em que foram lançados, é possível assistí-los de
                            diferentes formas. Vamos apresentar cada uma delas e você decide qual se adaptará melhor a experiência
                            que deseja ter com Star Wars. Veja as opções abaixo.

                            <h2
                                style=
                                {{
                                    textAlign: 'center',
                                    marginTop: 25
                                }}>
                                Ordem de Cronológica
                            </h2>

                            Assistir desse jeito pode estragar as maiores surpresas que a trilogia original pode proporcionar
                            ao expectador. Não viver essa experiência cinematográfica é quase um crime, mas se mesmo
                            assim desejar, voilà!<br /> <br />

                            - Star Wars Episódio 1: A Ameaça Fantasma <br />
                            - Star Wars Episódio 2: O Ataque dos Clones <br />
                            - Star Wars Episódio 3: A Vingança dos Sith <br />
                            - Han Solo: Uma História Star Wars <br />
                            - Rogue One: Uma História Star Wars <br />
                            - Star Wars Episódio 4: Uma Nova Esperança <br />
                            - Star Wars Episódio 5: O Império Contra-Ataca <br />
                            - Star Wars Episódio 6: O Retorno de Jedi <br />
                            - Star Wars Episódio 7: O Despertar da Força <br />
                            - Star Wars Episódio 8: Os Últimos Jedi <br />
                            - Star Wars Episódio 9: A Ascensão Skywalker <br /> <br />

                            <h2
                                style=
                                {{
                                    textAlign: 'center',
                                    marginTop: 25
                                }}>
                                Ordem Ernst Rister
                            </h2>

                            Essa ordem foi criada como uma espécie de “cronologia perfeita”. O caminho por ela não priva o espectador
                            das grandes revelações dos episódios IV e V, e não causa estranhamento com a
                            figura que aparece no episódio VI. <br /> <br />

                            - Star Wars Episódio 4: Uma Nova Esperança <br />
                            - Star Wars Episódio 5: O Império Contra-Ataca <br />
                            - Star Wars Episódio 1: A Ameaça Fantasma <br />
                            - Star Wars Episódio 2: O Ataque dos Clones <br />
                            - Star Wars Episódio 3: A Vingança dos Sith <br />
                            - Star Wars Episódio 6: O Retorno de Jedi <br />
                            - Star Wars Episódio 7: O Despertar da Força <br />
                            - Star Wars Episódio 8: Os Últimos Jedi <br />
                            - Star Wars Episódio 9: A Ascensão Skywalker <br /> <br />

                            <h2
                                style=
                                {{
                                    textAlign: 'center',
                                    marginTop: 25
                                }}>
                                Ordem Machete
                            </h2>

                            Muitos fãs de Star Wars não gostam do episódio I. Eles ignoram esse filme pelo fato de não ter
                            superado as expectativas de mostrar uma base solidificada para o universo criado por George Lucas.
                            Um fã chamado Rod Hilton criou essa ordem e muita gente segue até hoje. Ela não considera
                            o episódio I e nem os episódios mais recentes, mas é o jeito mais rápido de conhecer a
                            trajetória de Luke Skywalker.<br /><br />

                            - Star Wars Episódio 4: Uma Nova Esperança <br />
                            - Star Wars Episódio 5: O Império Contra-Ataca <br />
                            - Star Wars Episódio 6: O Retorno de Jedi <br />
                            - Star Wars Episódio 2: O Ataque dos Clones <br />
                            - Star Wars Episódio 3: A Vingança dos Sith <br /><br />

                            Mas lembre-se, apesar de todas as críticas e exageros dos fãs sobre o episódio I,
                            ele serve como complemento e não deixa de ser importante para a saga. Se você optar
                            por assistir desse jeito, o ideal é que entre o episódio III e VII,
                            você dê um jeito de assistí-lo. Okay? <br /><br />

                            Agora que você conhece todas as formas de assistir a saga “Star Wars”,
                            cuidado para <i>não ser seduzido pelo do lado negro da “Força"</i>.<br /><br />
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
export default Sequence;
