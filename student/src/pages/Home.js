import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ('./Home.css');
const Home = () => {
  return (
    <div className='center'>
      
      <h1 style={{"textAlign":"center"}}>Welcome to Springdale Public School</h1>
      
      <div style={{"textAlign":"center"}}>
      <img style={{"height":"100px"}}  src='https://media.istockphoto.com/id/1171617683/vector/education-symbol-design-template-pencil-and-book-icon-stylized.jpg?s=1024x1024&w=is&k=20&c=B6KRVGQH1vtJWfDNOhmwqY_FiJ1Ni50gMs58n4zkqSk=' alt='school logo'></img>
      <p style={{"marginTop":"43px"}} >Where we nurture young minds for a brighter future.</p>
      </div>
      <Carousel className='center' style={{"marginTop":"90px" , "marginBottom":"90px"}} >
      <Carousel.Item>
          <img  src="https://media.istockphoto.com/id/1148219796/photo/teachers-applauding-for-student-at-awards-ceremony.webp?b=1&s=170667a&w=0&k=20&c=65VgszKqMgEfKfv8fx1h1_Mkt1fsbfTiucSvo-aSufk=" alt="Sports Day" />
          <Carousel.Caption>
            <h2>Annual Sports Day</h2>
            <h4>Celebrating Excellence in Sports</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.unsplash.com/photo-1558685555-bcdb675f9b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NpZW5jZSUyMGV4aGliaXRpb258ZW58MHx8MHx8fDA%3D" alt="Science Exhibition" />
          <Carousel.Caption>
            <h2>Science Exhibition</h2>
            <h4>Showcasing Student Innovations</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1570313179513-0b1d58ae8fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN1dHVyYWwlMjBmZXN0fGVufDB8fDB8fHww" alt="Cultural Fest" />
          <Carousel.Caption>
            <h2>Cultural Fest</h2>
            <h4>Embracing Diversity and Creativity</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div >
  );
};

export default Home;
