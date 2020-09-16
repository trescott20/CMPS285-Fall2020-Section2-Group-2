import React from 'react';
import './shop.styles.scss';
import Shop_Data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// We need to store the data related to our actual collection, We create a class component...
class ShopPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collections: Shop_Data
        };
    } 

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id}{...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;