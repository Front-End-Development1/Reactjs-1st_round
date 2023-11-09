import Carousel from 'react-bootstrap/Carousel';
const ImageCarousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/img/p1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/path-to-image-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        {/* Add more Carousel.Item elements for additional images */}
      </Carousel>
    );
  };
  
  export default ImageCarousel;
  