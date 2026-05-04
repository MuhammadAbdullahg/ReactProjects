const NewsItem = ({ article }) => {
  const { urlToImage, title, description, url } = article;
  return (
    <div className="card mx-2 my-2 px-3 py-3" style={{ maxWidth: "345px" }}>
      <img
        src={urlToImage}
        style={{ width: "350px", height: "300px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 30)}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
