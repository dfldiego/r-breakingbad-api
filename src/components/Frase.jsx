import React, { Fragment } from 'react';

const Frase = ({ frase }) => {
    return (
        <Fragment>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </Fragment>
    );
}

export default Frase;