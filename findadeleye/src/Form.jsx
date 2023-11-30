import { useState } from "react"





function Form() {
  const initialFormData = {
    email: '',
    name: '',
    phone: '',
    projectDescription: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setFormData(initialFormData);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <div>
      <form className="contact-form mt-30" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                id="name"
                name="name"
                required
                maxLength={30}
                value={formData.name}
                onChange={handleChange}
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                className="form-control"
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <label htmlFor="comments">Project Description:</label>
              <textarea
                className="form-control"
                id="comments"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Get in Touch
            </button>
          </div>
        </div>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          Thanks for contacting us. <br />
          We will get back to you shortly
        </div>
      )}
    </div>
  );
}


export default Form









