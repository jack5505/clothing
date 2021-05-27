import React from 'react'

import {sections} from '../../data/Sections'
import  {MenuItemComponent} from '../../components/menu-item/MenuItemComponent'

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
            <div>
                {
                    this.state.sections.map(section =>(
                        <MenuItemComponent title={section.title}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;