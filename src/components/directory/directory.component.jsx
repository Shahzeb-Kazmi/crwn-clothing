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
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2,
                linkUrl: 'jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3,
                linkUrl: 'sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/1803467/pexels-photo-1803467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size: 'large',
                id: 4,
                linkUrl: 'womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                size: 'large',
                id: 5,
                linkUrl: 'mens'
              }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;