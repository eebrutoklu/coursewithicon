function Course({ id, content, title, price, img, romeveOneCourse }) {
  return (
    <>
      <div className="card">
        <div className="cardTitlePrice">
          <h2 className="cardTitle">{title}</h2>
          <h4 className="cardPrice">{price} TL</h4>
          <p>{content}</p>
          <button className="cardDelete" onClick={() => romeveOneCourse(id)}>
            Sil
          </button>
        </div>
      </div>
    </>
  );
}

export default Course;
