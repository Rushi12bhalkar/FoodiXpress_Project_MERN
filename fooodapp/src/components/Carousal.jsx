import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carousal() {
    return (
        
        <Carousel data-bs-theme="dark" > 

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100 "
            src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
            style={{filter:'brightness(40%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100 "
            src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="third slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600 h=300"
            alt="Fourth slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2273823/pexels-photo-2273823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fifth slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/15832879/pexels-photo-15832879/free-photo-of-cheeseburger-with-french-fries-and-three-dipping-sauces.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Sixth slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Seventh slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/10295769/pexels-photo-10295769.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Eighth slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>

        <Carousel.Item className='picture' style={{objectFit:"contain !important"}}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/474476806/photo/panner-butter-masala-with-missi-roti.jpg?b=1&s=612x612&w=0&k=20&c=11UTGjKGqy9xiobH6nlOrmhRGIWOFT4i0K-F9D2AXRM="
            alt="Ninth Slide"
            style={{filter:'brightness(60%)'}}
          />
        </Carousel.Item>
      </Carousel>

      
   )
}

export default Carousal