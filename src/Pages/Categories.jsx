import React from 'react'
import './Categories.css'

const Categories = () => {
    const categorias = [
        {nombre: "Inglés", img_name: "english.png", color: "#FEF4BB", class: "ingles"},
        {nombre: "Historia", img_name:"history.png", color: "#FEEAC0", class: "historia"},
        {nombre: "Matemáticas", img_name: "maths.png", color: "#C0E9FE", class: "matematicas"},
        {nombre: "Ciencias", img_name: "science.png", color: "#E5FEC0", class: "ciencias"},
        {nombre: "Lenguaje", img_name: "spanish.png", color: "#E9CAFE", class: "lenguaje"}
    ]
  return (
    <div className="container myCategories py-3">
        <h1 className="section-title display-5">Nuestras categorías</h1>
        <div className="row row-cols-2 mt-2 row-cols-lg-3 text-center gx-lg-4">
            {categorias.map((category)=>
            (<div className="col">
                <div className={`card mycard ${category.class}`}>
                    <img src={`./src/assets/img/${category.img_name}`} className="card-img-top mx-auto" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{category.nombre}</h5>
                    </div>
                </div>
            </div>)
            )}
        </div>
    </div>
  )
}

export default Categories