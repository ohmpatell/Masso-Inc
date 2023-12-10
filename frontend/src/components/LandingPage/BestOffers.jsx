import React from "react";

const BestOffers = () => {
  return (
    <div
      className="container"
      style={{ maxHeight: "100vh", overflow: "hidden" }}
    >
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner vh-100">
          <div className="carousel-item vh-100 active">
            <div className="d-flex vh-100 align-items-center">
              {/* Left side - Image */}
              <div className="w-50">
                <img
                  src="https://images.pexels.com/photos/11249806/pexels-photo-11249806.jpeg"
                  className="d-block w-100 h-100 rounded"
                  alt="..."
                  style={{
                    maxWidth: "80%",
                    maxHeight: "80%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Right side - Hotel Information */}
              <div
                className="w-50 d-flex align-items-center justify-content-center"
                style={{ padding: "3rem" }}
              >
                <div className="text-start bg-white rounded p-3">
                  <h5 className="mb-3">Burj-Al-Arab, Dubai, UAE</h5>
                  <p className="mb-3">
                    "Experience luxury beyond imagination at the iconic Burj Al
                    Arab – where every moment is a symphony of opulence, and
                    indulgence is an art form. Discover a world where lavish
                    meets extraordinary, and redefine your notion of decadence
                    amidst the breathtaking backdrop of Dubai's skyline."
                  </p>
                  <p>
                    <span className="text-decoration-line-through text-muted">
                      $10,000
                    </span>{" "}
                    $4,999
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item vh-100">
            <div className="d-flex vh-100 align-items-center">
              {/* Left side - Image */}
              <div className="w-50">
                <img
                  src="https://images.pexels.com/photos/7621928/pexels-photo-7621928.jpeg"
                  className="d-block w-100 h-100 rounded"
                  alt="..."
                  style={{
                    maxWidth: "80%",
                    maxHeight: "80%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Right side - Hotel Information */}
              <div
                className="w-50 d-flex align-items-center justify-content-center"
                style={{ padding: "3rem" }}
              >
                <div className="text-start bg-white rounded p-3">
                  <h5 className="mb-3">Fairmont Royal York, Toronto, Canada</h5>
                    <p className="mb-3">
                      "Experience unparalleled elegance at the historic Fairmont
                      Royal York – where timeless charm meets modern
                      sophistication. Immerse yourself in a world where luxury
                      is a tradition, and every detail tells a story. Enjoy the
                      seamless blend of classic grandeur and contemporary
                      comfort, set against the backdrop of Toronto's vibrant
                      cityscape."
                    </p>
                    <p>
                      <span className="text-decoration-line-through text-muted">
                        $8,500
                      </span>{" "}
                      $6,499
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 3 */}
          <div className="carousel-item vh-100">
            <div className="d-flex vh-100 align-items-center">
              {/* Left side - Image */}
              <div className="w-50">
                <img
                  src="https://images.pexels.com/photos/12133925/pexels-photo-12133925.jpeg"
                  className="d-block w-100 h-100 rounded"
                  alt="..."
                  style={{
                    maxWidth: "80%",
                    maxHeight: "80%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Right side - Hotel Information */}
              <div
                className="w-50 d-flex align-items-center justify-content-center"
                style={{ padding: "3rem" }}
              >
                <div className="text-start bg-white rounded p-3">
                  <h5 className="mb-3">New York Palace, Budapest, Hungary</h5>
                  <p className="mb-3">
                    "Embark on a journey of refined luxury at the enchanting New
                    York Palace in Budapest – where history and elegance
                    converge. Step into a world where timeless architecture
                    meets contemporary comfort, and every moment is a
                    celebration of opulence. Discover a haven of sophistication
                    amidst the cultural richness of Budapest."
                  </p>
                  <p>
                    <span className="text-decoration-line-through text-muted">
                      $9,200
                    </span>{" "}
                    $7,999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BestOffers;
