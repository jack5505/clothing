import React from 'react'

import {sections} from '../../data/Sections'
import  {MenuItemComponent} from '../../components/menu-item/MenuItemComponent'
import './directory.styles.scss'

class Directory extends React.Component{


    constructor() {
        super();
        this.state = {
            sections:sections
        }
    }

    render() {

        const  MenuItems = this.state.sections.map(section =>(
           <MenuItemComponent title={section.title}/>
        ));
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size}) =>(
                        <MenuItemComponent key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;