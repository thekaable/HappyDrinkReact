import React from 'react'

const Establishment = ({establishment}) => {

    return (
        <div className='establishment' >
            <h3>{ establishment.name }</h3>

            { establishment.description }

        </div>
    );
}

export default Establishment;
