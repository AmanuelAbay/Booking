import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/originals/a7/3c/bf/a73cbfbcf18054bf31ee42e6453c5d94.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.orangesmile.com/common/img_cities_original/london--2601889-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
