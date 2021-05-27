import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

import '../assets/css/paginas/Home.css'

export default function Home() {
    const [noticias, setNoticias] = useState([])
    const classes = useStyles();

    useEffect(() => {
        fetch('http://servicodados.ibge.gov.br/api/v3/noticias/', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                let arrayAux = []
                for (let i = 0; i < 10; i++) {
                    arrayAux.push(json.items[i])
                }
                console.log(arrayAux)
                setNoticias(arrayAux)
            })
            .catch(error => {
                console.log(error)
            })
        //http://servicodados.ibge.gov.br/api/v3/noticias/
    }, [])

    return (
        <div className="container-cards">
            {noticias.map((noticia) => (
                <Card key={noticia.id} className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {noticia.data_publicacao}
                        </Typography>

                        <Typography variant="h5" component="h2">
                            {noticia.titulo}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {noticia.tipo}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {noticia.introducao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => window.open(`${noticia.link}`, "_blank")} size="small">Leia Mais!</Button>
                        {/* <a href="https://www.google.com">Leia Mais!</a> */}
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 7,
        borderRadius: 5,
        background: '#EEE',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
    },
});