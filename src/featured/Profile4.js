import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
     
    src: 'pexels-photo-1024993.jpeg', 
    altText: 'Slide 1',
    caption: ' Location: Omaha, NE',
    header: 'Eric and Joy Wedding'
  },
  {
    src: 'pexels-photo-1024960.jpeg',
    altText: 'Slide 2',
    caption: 'Rustic Theme',
    header: 'Shivani is the wedding Photographer'
  },
  {
    src: 'pexels-photo-540522.jpeg',  
    altText: 'Slide 3',
    caption: 'Wedding planned at brides behset',
    header: '100 + guests'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;