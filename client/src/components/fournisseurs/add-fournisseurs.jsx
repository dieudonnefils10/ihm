import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const AjoutFournisseurs = () => {
    const [client, setClient] = useState([])
    const navigate = useNavigate()
    const URL = 'http://localhost:3001/createfrn'

    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 

        setClient(values => ({...values, [name]:value}))
    }

    const addclient = () => {
        if(client.nom != null && client.pays != null && client.ville != null && client.mail != null && client.adresse != null && client.phone != null){
            if (isFinite(client.phone)) {
                axios.post("http://localhost:3001/getone",client).then((response) => {
                    if(response.data == null){
                        axios.post(URL,client)
                    alert("Enregistrement reussit")
                    navigate('/fournisseurs')
                    }else{
                        alert("Addresse email existant")
                    }
                })
              
            }else{
                alert("Telephone invalide")
            }
        }
        else {
            alert("Erreur d'enregistrement")
        }
    }
    return ( 
        <>
           <div className="clientAdd">
        <br />
        <h1>Client</h1>
        <hr />
        <h2>
          <i>Gestion des fournisseurs</i>
        </h2>
        <div className="ajouter">
            <i> Creation d'une fournisseur</i>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Nom" name="nom" onChange={handleChange} />
                    <label htmlFor="">Nom</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Pays" name="pays" onChange={handleChange} />
                    <label htmlFor="">Pays</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Ville" name="ville" onChange={handleChange} />
                    <label htmlFor="">Ville</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="email" className="form-control" placeholder="Email" name="mail" onChange={handleChange} />
                    <label htmlFor="">Email</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Telephone" name="phone" onChange={handleChange} />
                    <label htmlFor="">Telephone</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Adresse" name="adresse" onChange={handleChange} />
                    <label htmlFor="">Adresse</label>
                </div>
            </div>
        </div>
        <button className="btn btn-primary cli" onClick={addclient}><span className="bi bi-check"></span> Sauvegarder</button>
      </div>
        </>
     );
}
 
export default AjoutFournisseurs;