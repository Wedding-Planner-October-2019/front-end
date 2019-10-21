import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
     
    src: 'pexels-photo-169190.jpeg', 
    altText: 'Slide 1',
    caption: ' Location: Omaha, NE',
    header: 'Andy and Latha Wedding'
  },
  {
    src: 'pexels-photo-169198.jpeg',
    altText: 'Slide 2',
    caption: 'Rustic Theme',
    header: 'Shivani is the wedding Photographer'
  },
  {
    src: 'pexels-photo-265730.jpeg',  
    altText: 'Slide 3',
    caption: 'Wedding planned at brides behset',
    header: '100 + guests'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;