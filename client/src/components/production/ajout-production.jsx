import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const AjoutProduction = () => {
    const [stocks, setstocks] = useState([])
    const [fourni, setFourni] = useState([])
    const navigate = useNavigate()
    const today = new Date()
    const URL = 'http://localhost:3001/getfrn'

    useEffect(() => {
        axios.get(URL).then((response) => {
            setFourni(response.data)
        })
    },[])
    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 

        setstocks(values => ({...values, [name]:value}))
    }

    const addProd = () => {
        if(stocks.nom != null && stocks.quantite != null && stocks.date != null && stocks.fournisseurs != null && stocks.date && new Date(stocks.date) > today){
            axios.post('http://localhost:3001/addprod', stocks)
            alert('Created')
            navigate("/production")
        }else {
            alert("Not created")
            navigate("/production")
        }
    }
    return ( 
        <>
           <div className="stocksAdd">
        <br />
        <h1>Production</h1>
        <hr />
        <h2>
          <i>Gestion des Production</i>
        </h2>
        <div className="ajouter">
            <i> Creation d'une matiere P</i>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Nom du produit" name="nom" onChange={handleChange} />
                    <label htmlFor="">Nom du produit</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating">
                    <select name="fournisseurs" id="" className="form-control" onChange={handleChange}>
                        <option value="---">---</option>
                        {
                            fourni.map((frn) => (
                                <option value={frn.nom} key={frn.id}>{frn.nom}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="">Fournisseurs</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating input-group">
                    <input type="number" className="form-control" placeholder="Quantité" name="quantite" onChange={handleChange} /><span className="input-group-text" id="basic-addon2">Kg</span>
                    <label htmlFor="">Quantité</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="date" className="form-control" placeholder="Date d'expiration" name="date" onChange={handleChange} />
                    <label htmlFor="">Date d'expiration</label>
                </div>
            </div>
        </div>
        <button className="btn btn-primary cli" onClick={addProd}><span className="bi bi-check"></span> Sauvegarder</button>
      </div>
        </>
     );
}
 
export default AjoutProduction;