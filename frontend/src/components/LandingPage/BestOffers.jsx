import React from 'react'

const BestOffers = () => {





  return (
    <div className='container' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://images.pexels.com/photos/12565208/pexels-photo-12565208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/3520548/pexels-photo-3520548.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/9467802/pexels-photo-9467802.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

)};

export default BestOffers