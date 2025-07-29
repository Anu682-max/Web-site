import "./ceo-message.css";

const CeoMessage = () => {
  return (
    <section className="ceo-message">
      <div className="ceo-message_content">
        <h2 className="ceo-message_title">Миний танилцуулга</h2>
        <p className="ceo-message_description">
          Сайн байна уу! Намайг Анул гэдэг. Би бүтээлч сэтгэлгээтэй, шинэ санаа,
          технологиор байнга өөрийгөө хөгжүүлж, бусдад үнэ цэнтэй зүйл бүтээхийг
          зорьдог. Миний гол зорилго бол хэрэглэгчдэд энгийн, ойлгомжтой,
          гоёмсог шийдэл бүхий вэб болон программ хангамжийг хүргэх юм. Хамтдаа
          илүү сайхан ирээдүйг бүтээцгээе!
        </p>
        <p className="ceo-message_signature">- Анул</p>
      </div>
      <div className="ceo-message_image">
        <img src="/ceo.jpg" alt="CEO" className="ceo-message_photo" />
        <div className="ceo-message_overlay">
          <p className="ceo-message_overlay-text">Миний зорилго</p>
        </div>
      </div>
    </section>
  );
};
export default CeoMessage;
