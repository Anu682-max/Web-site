import "./project.css";

const Project = () => {
  return (
    <ul className="project">
      <li className="project_content">
        <h2 className="project_title">Манай төслүүд</h2>
        <p className="project_description">
          Бид орон сууц, оффис, үйлдвэр үйлчилгээний барилга зэрэг олон төрлийн
          төслүүдийг амжилттай хэрэгжүүлсэн туршлагатай. Чанар, инноваци,
          бүтээлч шийдэл бол бидний үнэт зүйл.
        </p>
        <ul className="project_list">
          <li className="project_item">
            <img
              src="/project1.jpg"
              alt="Орон сууцны цогцолбор"
              className="project_image"
            />
            <h3 className="project_name">Орон сууцны цогцолбор</h3>
            <p className="project_details">
              Орчин үеийн шийдэлтэй, тав тухтай, байгальд ээлтэй орон сууцны
              цогцолбор.
            </p>
          </li>
          <li className="project_item">
            <img
              src="/project2.jpg"
              alt="Оффис барилга"
              className="project_image"
            />
            <h3 className="project_name">Оффис барилга</h3>
            <p className="project_details">
              Бизнесийн хэрэгцээнд нийцсэн, уян хатан төлөвлөлттэй оффисын
              барилга.
            </p>
          </li>
          <li className="project_item">
            <img
              src="/project3.jpg"
              alt="Үйлдвэрийн байгууламж"
              className="project_image"
            />
            <h3 className="project_name">Үйлдвэрийн байгууламж</h3>
            <p className="project_details">
              Дэвшилтэт технологи, аюулгүй байдлыг хангасан үйлдвэрийн
              байгууламж.
            </p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Project;
