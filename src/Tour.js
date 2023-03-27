import "./tour.css";
const Tour = ({ tours, handleDelete /*shorten*/ }) => {
  return (
    <div className="box__container">
      {tours.map((tour) => (
        <div className="box" key={tour.id}>
          <div className="image">
            <div className="price">{tour.price}</div>
            <img src={tour.image} alt="" className="pic" />
          </div>
          <h3 className="title"> {tour.title}</h3>
          <p className="desc">{tour.desc}</p>
          <button className="read" /*onClick={() => shorten(tour.id)}*/>
            Read Less
          </button>
          <button className="shift" onClick={() => handleDelete(tour.id)}>
            Not Interested
          </button>
        </div>
      ))}
    </div>
  );
};
export default Tour;
