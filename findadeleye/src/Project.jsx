/* eslint-disable react/prop-types */
function Project({ headingImg, client, type, date, address, img1, img2, links, details, moreDetails, onClose }) {
    return (
        <div className="modal-content">
            <div className="modal-body">
                <div className="modal-header">
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close">X</button>
                </div>
                <div className="project-details-area">
                    <div className="container">
                        <div className="project-details-items">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-thumb">
                                        {headingImg}
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="project-details mt-60 mt-xs-30">
                                        <div className="top-info">
                                            <div className="row">
                                                <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15 order-lg-last">
                                                    <ul className="gallery-project-basic-info">
                                                        <li>
                                                            <div className="info">
                                                                <b>Clients:</b> {client}
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="info">
                                                                <b>Project Type:</b> {type}
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="info">
                                                                <b>Date:</b> {date}
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="info">
                                                                <b>Address:</b> {address}
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h1>{links}</h1>
                                                    <p>{details}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-40 mb-40">
                                            <div className="col-lg-5 pr-50 pr-md-15 pr-xs-15">
                                                <div className="check-list">
                                                    <div className="single-list">
                                                        <h4>Mobile Optimization</h4>
                                                        <p>{moreDetails}</p>
                                                    </div>
                                                    <div className="single-list">
                                                        <h4>Marketing Automation</h4>
                                                        <ul className="list-disc">
                                                            <li>Social media marketing</li>
                                                            <li>Search engine optimization (seo)</li>
                                                        
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="thumb-grid">
                                                    {img1}
                                                    {img2}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;