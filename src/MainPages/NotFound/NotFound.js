import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h3 className="mt-5">Opps, this page is not found</h3>
            <h2><FontAwesomeIcon icon={faTriangleExclamation} /></h2>
            <h1>404</h1>

        </div>
    );
};

export default NotFound;