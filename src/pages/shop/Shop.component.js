import React from 'react'
import ShopDat from '../../data/shop.data'
import Preview from '../../components/previe-collection/previe-collection.component'

class ShopPage extends React.Component{


    constructor() {
        super();
        this.state = {
            collections:ShopDat
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id,...other}) => (<Preview  key={id} {...other}/>))
                }
            </div>
        );
    }
}
export default ShopPage;