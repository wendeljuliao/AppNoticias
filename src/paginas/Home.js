import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    const [noticias, setNoticias] = useState([])
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

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
        <div>
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
            </Card>
            ))}
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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
});