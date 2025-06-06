import  './Header.css'

function Header() {
return (

    <header className="container-fluid p-5 mb-3 coiny-title" id="header">
        <div className="row">
            <div className="col-6 text-center text-header">
                <h1 className=" jugando-title"><span className="jugando-txt">Jugando</span><span className="se-txt"> se</span> <p className="jugando-txt  aprende-text ">aprende</p></h1>
                <h4 className='aprendiendo-title'><span className="aprendiendo-txt text-center">aprendiendo</span><p className="se-txt">se <span className="gana-txt">gana</span></p></h4>
                <button type="button" className="btn btn-warning btn-lg mt-4 mt-sm-2">Juega Ahora!</button>
            </div>
            <div className="col">
                <img className="img-fluid index-img" src="./src/assets/img/img_hero.png" alt="EducAprende" />
            </div>
        </div>
    </header>
)
}
export default Header
