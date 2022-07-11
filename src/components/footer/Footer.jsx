import '../styles/footer.css'
import 'animate.css';

export const Footer = props => {
  return (
    <footer>
       <div className="container" >
            <div className="row align-items-center pt-5 pb-5" >
                {
                    props.images.map((item, index) => (
                        <div key={index} className="d-flex flex-column justify-content-center align-items-center col-sm-6 col-lg-3 col-md-3 content-footer p-5 animate__animated animate__backInDown border-light footer-content">
                            <img src={item} alt="" />
                            <h2 className="title-footer fs-5 mt-3">METEORITOS STORE</h2>
                            <p className="text-center">Mercado negro de articulos espaciales.</p>
                        </div>                          
                    ))
                }
            </div>
      </div>
      <div className="redes d-flex justify-content-center align-items-center flex-column p-3 animate__animated animate__backInDown">
        <span>REDES SOCIALES</span>
        <a href="https://www.linkedin.com/in/jos%C3%A9-manuel-luman-salazar-363371175/" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
        </a>
      </div>
      <div className="copyright d-flex justify-content-center align-items-center p-3">
        <span>Desarrollado por José Manuel Luman®</span>
      </div>
    </footer>
  )
}
