import React from 'react';
import '../assets/css/paginas/Sobre.css'

import imagem from './../assets/images/bitcoinn.png'

export default function Sobre() {
    return (
        <div className="containersobre">
            <h1>Investe Notícias</h1>
            <p className="paragrafosobre"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit semper leo nec elementum. Curabitur eu iaculis ipsum, sit amet accumsan ipsum. Sed nec urna dui. Nunc et sollicitudin arcu, non fermentum nisl. Suspendisse eu turpis at purus pellentesque fringilla id vitae nulla. Curabitur ultricies bibendum semper. Phasellus auctor at ex quis scelerisque.
            <br />Integer ultrices convallis purus, sed ultricies elit placerat eu. Aenean id pulvinar est. Proin faucibus aliquam quam id malesuada. Ut convallis metus ipsum, varius faucibus justo hendrerit id. Integer sed viverra nibh. Curabitur non ligula ipsum. In consectetur mauris nec quam mattis pharetra. Aliquam accumsan erat id ligula posuere, et iaculis ligula molestie. Aliquam sit amet mi ultrices magna interdum lobortis vitae in justo. Nam vel ex sed arcu lobortis luctus non vel mauris. Aenean tempus commodo nibh, in lacinia turpis malesuada id. Vivamus fermentum quam a hendrerit vestibulum. Sed enim orci, posuere et luctus at, dictum in quam. Nam ac consequat sem, tristique imperdiet velit.
            <br />Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at malesuada dolor. Nullam nec dolor tristique, congue orci ac, rhoncus erat. Sed euismod maximus risus quis fringilla. Morbi et pulvinar urna. Integer consectetur mi sit amet lacus vestibulum porta. Aenean sed massa lacinia, dictum libero et, tristique nisl. Curabitur molestie odio ipsum, vel luctus tortor cursus non. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

            <img src={imagem} className="imagemSobre" alt="Logo" />
            <p className="textodespedida">Agradeçemos a visita!</p>
            
        </div>
    )
}