/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

const VanteAdd = () => {
    const [prix, setprix] = useState([])
    const [vente, setvente] = useState([])

    const URL = "http://localhost:3001/getstocks"

    useEffect(() => {
        axios.get(URL).then((response) => {
            setvente(response.data)
        })
    },[])

    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 

        setprix(values => ({...values, [name]:value}))
    }
    const addvente = () => {
      if(prix.numero != null && prix.nom != null && prix.quantite !=null){
        axios.post('http://localhost:3001/createvente',prix).then((response) => {
            if(response.data === "Error") {
                alert("Stocks insuffissants") 
                window.location.reload()
            }
            else {
                alert("Vente created")
                window.location.reload()
            }
        })
      }
      else {
          alert("Completez les champs")
      }
    }
    
    return ( 
        <>
            <div className="col-lg-6 ven">
                <div className="row addv">
                    <div className="col-lg-12">
                        <div className="form-floating">
                        <input type="text" placeholder="Numero de ticket" className="form-control" name="numero" onChange={handleChange} />
                        <label htmlFor="">Numero de ticket</label>
                        </div>
                    </div>
                    <div className="col-lg-12">
                    <div className="form-floating">
                        <select name="nom" id="" className="form-control"  onChange={handleChange}>
                            <option value="---">---</option>
                            {
                                vente.map((vtn) => (
                                    <option value={vtn.nom} key={vtn.id}>{vtn.nom}</option>
                                ))
                            }
                        </select>
                        <label htmlFor="">Nom du produit</label>
                        </div>
                    </div>
                    <div className="col-lg-12">
                    <div className="form-floating">
                        <input type="number" placeholder="Quantité" className="form-control" name="quantite"  onChange={handleChange} />
                        <label htmlFor="">Quantité</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary bout" onClick={addvente}><i><span className="bi bi-plus"></span>Ajouter</i></button>
            </div>
        </>
     );
}
 
export default VanteAdd;