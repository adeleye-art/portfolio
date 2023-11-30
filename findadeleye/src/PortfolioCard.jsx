/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";


const PortfolioCard = ({ contentTitle, img, projectData, title}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="col-lg-6 item-center">
      <div className="portfolio-style-one">
        <div className="thumb-zone">{img}</div>
        <div className="pf-item-info">
          <div className="content-info">
            {contentTitle}
            <h2>
              <button onClick={openModal}>{title}</button>
            </h2>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} projectData={projectData} />
      </div>
    </div>
  );
};

export default PortfolioCard;
