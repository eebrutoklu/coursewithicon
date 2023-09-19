import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber)); //aynı kurs gelmiyor.
  };

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return chexkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <>
      <div>
        <div>
          {" "}
          <h2 className="title">Kurslarım</h2>
          <button className="cardDelete" onClick={getRandomCourse}>
            Rasgele Kurs Ata
          </button>
        </div>
        <div className="cardDiv">
          <button className="fa" onClick={prevCourse}>
            <FaChevronLeft />
          </button>
          <div className="card">
            <div className="cardTitlePrice">
              <h2 className="cardTitle">{title}</h2>
              <h4 className="cardPrice">{price} TL</h4>
              <p>{content}</p>
              {/* <button
                className="cardDelete"
                onClick={() => romeveOneCourse(id)}
              >
                Sil
              </button> */}
            </div>
          </div>
          <button className="fa" onClick={nextCourse}>
            {" "}
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Courses;
