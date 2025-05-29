import  './Main.css';
function Main() {
return (
<main className="container-fluid rounded-5 aboutUs text-white my-4" style={{"backgroundColor": "#7A56D0"}}>
        <div className="row">
            <div className="col-6 col-lg-5 px-4 pt-3">
                <h1 style={{"color": "white", "backgroundColor": "#81F0EF"}} className="coiny-title text-center rounded-4">Quienes Somos</h1>
                <p style={{"color": "white"}} className="text-center">
                Somos un grupo de desarrolladores apasionados por la educación, buscamos contribuir al acceso a la educación de calidad y equitativa para todos
                </p>
                <p className="text-center">En EducAprende, creemos que la educación es un juego y que aprender debe ser divertido. Por eso, ofrecemos una amplia variedad de juegos educativos que te ayudarán a aprender mientras te diviertes.</p>
            </div>
            <div className="col-6 d-flex align-items-end">
                <img className="img-fluid index-img" src="./src/assets/img/Generation.png" alt="AboutUs" />
            </div>
            </div>
        </main>
)
}
export default Main
