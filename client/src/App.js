import './App.scss';

function App() {
    return(
    <>
        <header className="header">
            <div className="header-container container">
                <nav className="primary-nav">
                    <div className="logo-wrapper">
                        <h1 className="logo"><a href="#" className="link">THE INTERIOR</a></h1>
                    </div>
                    <ul className="menu-desktop">
                        <li class="item">
                            <a href="#" className="link active">Home</a>
                        </li>
                        <li class="item">
                            <a href="#" className="link">Collection</a>
                        </li>
                        <li class="item">
                            <a href="#" className="link">About</a>
                        </li>
                        <li class="item">
                            <a href="#" className="link">Contact</a>
                        </li>
                    </ul>
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
                        <img src="//placehold.it/821x586" alt="" className="img"/>
                    </div>
                    <div className="card-component">
                        <div className="info-container">
                            <div className="img-wrapper">
                                <img src="" alt="" className="img"/>
                            </div>
                            <div className="info-wrapper">
                                <h3 className="title">Aliza Webber</h3>
                                <h4 className="subtitle">interior designer</h4>
                            </div>
                        </div>
                        <p className="description">
                            Designed in 2020 by Aliza Webber
                        </p>
                    </div>
                </div>
            </div>
        </div>        
    </>
    )
}

export default App;
