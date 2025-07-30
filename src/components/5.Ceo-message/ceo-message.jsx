import "./ceo-message.css";

const CeoMessage = () => {
  return (
    <section className="ceo-message">
      <div className="ceo-message_content">
        <h2 className="ceo-message_title">Захирлын мэндчилгээ</h2>
        <p className="ceo-message_description">
          Сайн байна уу! Намайг Анул гэдэг. Би Монгол Барилга Групп компанийн 
          захирал юм. Бид 20 гаруй жилийн туршлагатай, Монголын барилгын салбарт 
          тэргүүлэгч байр суурь эзэлдэг компани. Манай зорилго бол хэрэглэгчдэд 
          чанартай, найдвартай, орчин үеийн барилгын шийдлүүдийг хүргэх юм. 
          Хамтдаа Монголын барилгын салбарыг хөгжүүлцгээе!
        </p>
        <p className="ceo-message_signature">- Анул, Захирал</p>
      </div>
      <div className="ceo-message_image">
        <img src="/ceo.jpg" alt="CEO" className="ceo-message_photo" />
        <div className="ceo-message_overlay">
          <p className="ceo-message_overlay-text">Манай алсын хараа</p>
        </div>
      </div>
    </section>
  );
};
export default CeoMessage;
