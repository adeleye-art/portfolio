
import Navigation from './Navigation'
import Header from './Header'
import Skills from './Skills'
import About from './About'
import './App.css'
import'./assets/bootstrap.min.css'
import Portfolio from './Portfolio'
import Testimonial from './Testimonial'
import Contact from './Contact'
import ScrollToTopButton from './ScrollToTopButton'
import {Helmet} from 'react-helmet'

function App() {
  const handleEmailClick = () => {
    window.open('mailto:adeleyealarape@gmail.com', '_blank');
};

const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/adeleye-remi-alarape-581b64191', '_blank');
};

const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348108301202', '_blank');
};

const handleGitClick = () =>{
    window.open ('https://github.com/adeleye-art', '_blank');
}


  document.body.classList.add('bg-dark', 'bg-fixed', 'onepage-version')
  return (
   
    <div className="main-wrapper opened">
      <Helmet>
        <title>Adeleye Portfolio</title>
        <meta name="description" content="Adeleye Portfolio" />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="Adeleye Remi-Alarape" />
        <meta property="og:title" content="Adeleye" />
        <meta property="og:description" content="Adeleye Portfolio" />
        <meta property="og:image" content="https://findadeleye.netlify.app" />
        <meta property="og:url" content="https://findadeleye.netlify.app" />
      </Helmet>
      <Navigation handleLinkedInClick={handleLinkedInClick} handleGitClick={handleGitClick} />
      <Header />
      <Skills />
      <About
        handleEmailClick={handleEmailClick}
        handleWhatsAppClick={handleWhatsAppClick}
        handleLinkedInClick={handleLinkedInClick}
      />
      <Portfolio />
      <Testimonial />
      <Contact handleEmailClick={handleEmailClick} handleWhatsAppClick={handleWhatsAppClick} />
      <ScrollToTopButton/>
    </div>

  )
}

export default App
