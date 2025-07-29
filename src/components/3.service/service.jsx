import "./Service.css";

const Service = () => {
  return (
    <section className="service">
      <div className="service_contact">
        <h2 className="service_title">Бидний үйлчилгээ</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Загвар дизайн, төлөвлөлт</h3>
            <p className="service-description">
              Бид таны хэрэгцээнд нийцсэн, шинэлэг, ухаалаг шийдэл бүхий зураг
              төсөл, төлөвлөлтийн үйлчилгээг санал болгодог.
            </p>
          </div>
          <div className="service-item">
            <h3>Бүтцийн барилга угсралт</h3>
            <p className="service-description">
              Манай баг чанарын өндөр түвшинд, стандартын дагуу бүтцийн барилга
              угсралтын ажлыг хийж гүйцэтгэнэ.
            </p>
          </div>
          <div className="service-item">
            <h3>Төслийн менежмент</h3>
            <p className="service-description">
              Төслийн явц, чанар, хугацааг мэргэжлийн түвшинд удирдаж, захиалагч
              бүрт ил тод, найдвартай хамтын ажиллагааг бий болгодог.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
