import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            {/* Mobile Devices */}
            <div className="menu-item">
                <div className="content">
                    <h1>Mobile Devices</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            {/* Camera, Photo & Video */}
            <div className="menu-item">
                <div className="content">
                    <h1>Camera, Photo & Video</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            {/* Headphones */}
            <div className="menu-item">
                <div className="content">
                    <h1>Headphones</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            {/* Wearable Technologies */}
            <div className="menu-item">
                <div className="content">
                    <h1>Wearable Technology</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            {/* Video Games */}
            <div className="menu-item">
                <div className="content">
                    <h1>Video Games</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            {/* Office Electronics */}
            <div className="menu-item">
                <div className="content">
                    <h1>Office Electronics</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            {/* B and Wireless Speakers */}
            <div className="menu-item">
                <div className="content">
                    <h1>Bluetooth & Wireless Speakers</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            {/* PC and Laptops */}
            <div className="menu-item">
                <div className="content">
                    <h1>PC & Laptops</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;