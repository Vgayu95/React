import React from 'react';
import Rainbow from '../hoc/Rainbow'

const Contact = () => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    )
}

export default Rainbow(Contact)