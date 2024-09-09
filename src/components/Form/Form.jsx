import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="اسمك الكامل" />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="بريدك الإلكتروني" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" rows="4" placeholder="رسالتك"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">إرسال</button>
    </form>
  );
};

export default Form;
