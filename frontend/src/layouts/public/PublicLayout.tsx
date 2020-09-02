import React from 'react';

import './PublicLayout.css';

const PublicLayout: React.FC = (props) => {
    return (
    <div className="public-layout">
        <header>
            <form>
                <div className="inputs__container">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="number" placeholder="Amount" />
                </div>
                <div className="submit-button__container">
                    <button id="submit-button" type="submit">Add</button>
                </div>
            </form>
        </header>
        <div className="content">
            { props.children }
        </div>
    </div>
    )
}


export default PublicLayout;