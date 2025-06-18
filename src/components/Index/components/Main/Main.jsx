import  './Main.css';
function Main() {
return (
<main className="container-fluid rounded-5 aboutUs text-white my-4" style={{"backgroundColor": "#7A56D0"}}>
        <div className="row container-aboutUs">
            <div className="col-12 col-lg-5 px-4 pt-3 align-content-center">
                <div className='col-12' id='main-tittle'>
                    <h1 style={{"color": "white", "backgroundColor": "#81F0EF"}} className="coiny-title mt-4 text-center rounded-4 aboutUs-tittle p-2">Quienes Somos</h1>
                </div>
                <div>
                    <p style={{"color": "white"}} className="text-center ms-5 me-5">
                    Somos un grupo de desarrolladores apasionados por la educación, buscamos contribuir al acceso a la educación de calidad y equitativa para todos
                    </p>
                    <p className="text-center ms-5 me-5">En EducAprende, creemos que la educación es un juego y que aprender debe ser divertido. Por eso, ofrecemos una amplia variedad de juegos educativos que te ayudarán a aprender mientras te diviertes.                    
                    </p>
                </div>
            </div>
            <div className="col-12  col-lg-7 d-flex align-items-end" id='index-main-img'>
                <img className="img-fluid index-img-developers" src="./src/assets/img/Generation.png" alt="AboutUs" />
            </div>
            </div>
        </main>
)
}
export default Main
