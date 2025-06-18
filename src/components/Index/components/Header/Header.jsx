import  './Header.css'

function Header() {
return (

    <header className="container-fluid  coiny-title mt-3" id="header">
        <div className="row">
            <div className="col-12 col-md-6 text-center text-header header-text">
                <div id='index-tittle'>
                    <h1 className=" jugando-title"><span className="jugando-txt">Jugando</span><span className="se-txt"> se</span> <p className="jugando-txt  aprende-text ">aprende</p>
                    </h1>
                    <h4 className='aprendiendo-title'><span className="aprendiendo-txt text-center">aprendiendo</span><p className="se-txt">se <span className="gana-txt">gana</span></p>
                    </h4>
                </div>
            </div>
            <div className="col-12 col-md-6 header-img">
                <img className="img-fluid index-img" src="./src/assets/img/img_hero.png" alt="EducAprende" />
            </div>
        </div>
        <div>
            <button type="button" className="btn btn-warning btn-lg mt-4 mt-sm-2 header-btn">¡Juega Ahora!</button>
        </div>
    </header>
)
}
export default Header
