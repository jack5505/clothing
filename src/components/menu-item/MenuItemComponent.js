import React from 'react'

export const MenuItemComponent = ({title}) =>(
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

