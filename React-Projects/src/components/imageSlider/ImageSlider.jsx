import { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
function ImageSlider({ url, page = "1", limit = "10" }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e);
    }
  }

  if (errorMsg) {
    return <div>error</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  return (
    <div className="container">
      {loading ? <div>data loading please wait</div> : null}
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((item, index) => (
            <img
              src={item.download_url}
              className={
                currentSlide === index
                  ? "current-slide"
                  : "current-slide hide-current-slide"
              }
              key={item.id}
              alt=""
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
