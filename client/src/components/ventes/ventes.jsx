/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useEffect, useState } from "react";
import Prix from "./vente-prix"

const Vente = () => {
    const [vente, setvente] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3001/getvente").then((response) => {
            setvente(response.data)
        })
    },[])
    const handleNext = () => {
        if(currentIndex < vente.length / 2){
          setCurrentIndex(currentIndex + 1)
        }
      }
      const handlePrev = () => {
        setCurrentIndex(currentIndex - 1)
      }
    return ( 
        <>
              <div className="prix col-lg-6">
                <table className="table table-striped">
                    <thead>
                       <tr>
                       <th>Numero</th>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Total</th>
                        <th>Actions</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                            vente.slice(currentIndex * 2, (currentIndex +1 ) *2).map((vtn) => (
                                <tr key={vtn.id}>
                                <td><i>{vtn.numero}</i></td>
                                <td><i>{vtn.produit}</i></td>
                                <td><i>{vtn.prix}</i></td>
                                <td><i>{vtn.quantite}</i></td>
                                <td><i>{vtn.quantite*vtn.prix}</i></td>
                                 <td><button className="btn btn-warning"><span className="bi bi-pencil-square"></span></button> <button className="btn btn-danger"><span className="bi bi-trash"></span></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button className="btn btn-dark" onClick={handlePrev}><i className="bi bi-caret-left"></i></button>
      <button className="btn btn-dark rg" onClick={handleNext} desabled={currentIndex >= vente.length /2}><i className="bi bi-caret-right"></i></button><br /><br />
                <Prix />
                </div>
        </>
     );
}
 
export default Vente;