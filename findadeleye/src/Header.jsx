//import leye1 from './assets/WhatsApp.jpg'
function Header() {
    return (
        <div id="home" className="banner-style-two-area default-padding" style={{height:"100vh"}}>
            <div className="container">
                <div className="banner-top">
                    <div className="row">
                        <div className="col-lg-7 pr-50">
                            <div className="information">
                                <div className="content">
                                    <h2>Hey, I'm<br/>Adeleye Remi-Alarape</h2>
                                    <h3 className="title">
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span className="cd-words-wrapper">
                                                    <b className="is-hidden">Senior Web Developer</b>
                                                    <b className="is-visible">Professional &amp; Expert Coder</b>
                                                    <b className="is-hidden">UI/UX Desiging Expert</b>
                                                </span>
                                            </span>
                                        </span>
                                    </h3>
                                    <div className="btn-standard mt-10">
                                        <a href='#contact'>HIRE ME</a>
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

export default Header