import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
          sections : [
                {
                  title: 'Mobile Devices',
                  imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                  id: 1,
                  linkUrl: 'mobiledevices'
                },
                {
                  title: 'Camera, Photo & Video',
                  imageUrl: 'https://images.unsplash.com/photo-1493805503700-3219b693ffcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'Headphones',
                  imageUrl: 'https://images.unsplash.com/photo-1558590812-4f28be81cdcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'Wearable Technology',
                  imageUrl: 'https://images.unsplash.com/photo-1593871978329-02621035b835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'Video Games',
                  imageUrl: 'https://images.unsplash.com/photo-1585369111972-771555a164c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                },
                {
                    title: 'Office Electronics',
                    imageUrl: 'https://images.unsplash.com/photo-1589113050289-1c654e7e305d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    size: 'large',
                    id: 6,
                    linkUrl: ''
                },
                {
                    title: 'Bluetooth & Wireless Speakers',
                    imageUrl: 'https://cdn.statically.io/img/cdn.mos.cms.futurecdn.net/qHgNGPxJFUEoieoyRmJ2U7.jpg',
                    size: 'large',
                    id: 7,
                    linkUrl: ''
                },
                {
                    title: 'PC & Laptops',
                    imageUrl: 'https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
                    size: 'large',
                    id: 8,
                    linkUrl: ''
                },
              ]
              
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id}{...otherSectionProps}></MenuItem>
                    ) )
                }
            </div>
        ); 
    }
}

export default Directory;