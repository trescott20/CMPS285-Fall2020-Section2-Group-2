import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';  // Higher order component,function that takes a component as an argument and returns you a modified component.

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> 
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem); // Returns a super powered Menu-item component with access to location, match, history props.