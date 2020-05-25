import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'; 

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [ {
                title: 'hats',
                imageUrl: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/1803467/pexels-photo-1803467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;