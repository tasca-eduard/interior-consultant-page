import './App.scss';
import photo1 from './media/photo1.png';
import photo2 from './media/photo2.png';
import { useRef } from 'react';
 
function App() {
    const mobileNav = useRef(),
          header = useRef();

    const toggleMobileMenu = (e) => {
        e.preventDefault();
        console.log(e.target);
        e.target.classList.toggle('active');
        header.current.classList.toggle('active')
    }

    return(
    <>
        <header className="header" ref={header}>
            <div className="header-container container">
                <nav className="primary-nav">
                    <div className="logo-wrapper">
                        <h1 className="logo"><a href="#" className="link">THE INTERIOR</a></h1>
                    </div>
                    <ul className="menu-desktop">
                        <li className="item">
                            <a href="#" className="link active">Home</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Collection</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">About</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Contact</a>
                        </li>
                    </ul>
                    <div className="menu-mobile">
                        <a href="#" className="menu-mobile-container" onClick={toggleMobileMenu}>
                            <div className="slice top"></div>
                            <div className="slice middle"></div>
                            <div className="slice bottom"></div>
                        </a>
                        <div className="mobile-nav" ref={mobileNav}>
                            <li className="mobile-item">
                                <a href="#" className="link active">Home</a>
                            </li>
                            <li className="mobile-item">
                                <a href="#" className="link">Collection</a>
                            </li>
                            <li className="mobile-item">
                                <a href="#" className="link">About</a>
                            </li>
                            <li className="mobile-item">
                                <a href="#" className="link">Contact</a>
                            </li>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div className="showcase-component">
            <div className="showcase-container container">
                <div className="about">
                    <h2 className="title">Modern Interior</h2>
                    <p className="description">
                        A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.
                    </p>
                    <a href="#" className="link">
                        Read more
                        <span className="arrow right"></span>
                    </a>
                </div>
                <div className="showcase-wrapper">
                    <div className="img-wrapper">
                        <img src={photo1} alt="" className="img"/>
                    </div>
                    <div className="card-component">
                        <div className="info-container">
                            <div className="avatar-wrapper">
                                <img src={photo2} alt="" className="img"/>
                            </div>
                            <div className="info-wrapper">
                                <h3 className="title">Aliza Webber</h3>
                                <h4 className="subtitle">
                                    interior designer</h4>
                            </div>
                        </div>
                        <p className="description">
                            Designed in 2020 by Aliza Webber
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-container container">
                <span className="copyright">
                    created by <u><strong>tasca-eduard</strong></u> - devChallenges.io
                </span>
            </div>
        </footer>        
    </>
    )
}

export default App;
