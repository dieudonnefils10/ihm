import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Production = () => {
    const navigate = useNavigate()
    const [prod, setProd] = useState([])
    const [modal, setModal] = useState([])
    const [trans, setTrans] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3001/getprod').then((response) => {
        setProd(response.data)
      })
    },[])
    const ajout = () => {
        navigate('/ajoutproduction')
    }
    const handleChange = (e) => {
      const name = e.target.name 
      const value = e.target.value 

      setModal(values => ({...values, [name]:value}))
    }
    const transformer = (id) => {
      axios.get(`http://localhost:3001/pkprod/${id}`).then((response) => {
        setTrans(response.data)
      })
  }
  const transform = (id) => {
    const val = modal.quantite*1.5
    const values = {
      "nom": modal.nom,
      "qte": trans.quantite-val,
      "quantite": modal.quantite,
      "prix": modal.prix,
      "qteProd": trans.quantite
    }
    if(modal.nom != "" && modal.quantite != null && modal.prix != null){
      if(val < trans.quantite){
        axios.put(`http://localhost:3001/updateprod/${id}`, values)
        alert("Success")
        window.location.reload()
      }
      else {
        alert("Stocks insuffissants")
      }
    }
   
}
    return ( 
        <>
            <div className="stock">
            <br />
          <h1>Production</h1>
          <hr />
          <h2>
            <i>Gestion des production</i>
          </h2>
          <div className="ajouter">
            <button className="btn btn-light" onClick={ajout}>
              <i className="dropdown-item">
                <span className="bi bi-plus"></span> Nouveau
              </i>
            </button>
          </div>
                 <table className="table table-striped">
            <thead>
              <tr>
                <th><i><input type="checkbox" /></i></th>
                <th><i>Numero</i></th>
                <th><i>Nom</i></th>
                <th><i>Fournisseurs</i></th>
                <th><i>Date d'expiration</i></th>
                <th><i>Quantité</i></th>
                <th><i>Unité</i> </th>
                <th><i>Actions</i></th>
              </tr>
            </thead>
            <tbody>
                {
                  prod.map((item) => (
                    <tr key={item.id}>
                <td><i><input type="checkbox" /></i></td>
                <td><i>PROD/0{item.id}</i></td>
                <td><i>{item.nom}</i></td>
                <td><i>{item.fournisseurs}</i></td>
                <td><i>{item.date}</i></td>
                <td><i>{item.quantite}</i></td>
                <td><i>Kg</i></td>
                <td>
                  <i>
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i><span className="bi bi-list"></span> Actions</i>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button type="button" className="btn btn-light"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {transformer(item.id)}}><i className="dropdown-item"><span className="fa fa-pencil"></span> Transformer</i></button></li>
                      </ul>
                    </div>
                  </i>
                </td>
              </tr>
                  ))
                }
            </tbody>
          </table>
            </div>  
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="Nom Produit" value={trans.nom} onChange={handleChange} />
  <label htmlFor="">Nom Produit</label>
</div>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="Nom Produit finie" name="nom" onChange={handleChange} />
  <label htmlFor="">Nom Produit finie</label>
</div>
      <div className="form-floating mb-3 input-group">
  <input type="number" className="form-control" id="floatingInput" placeholder="Quantité Raisin" name="vin" value={trans.quantite}  onChange={handleChange} /><span className="input-group-text" id="basic-addon2">Kg</span>
  <label htmlFor="">Quantité Raisin</label>
</div>
      <div className="form-floating mb-3 input-group">
  <input type="number" className="form-control" id="floatingInput" placeholder="Quantité Vin" name="quantite" onChange={handleChange} /><span className="input-group-text" id="basic-addon2">Litre</span>
  <label htmlFor="">Quantité Vin</label>
</div>
<div className="form-floating input-group">
  <input type="number" className="form-control" id="floatingPassword" placeholder="Raisin necessaire" name="litre" value={modal.quantite * 1.5}  onChange={handleChange}/><span className="input-group-text" id="basic-addon2">Kg</span>
  <label htmlFor="floatingPassword">Raisin necessaire</label>
</div><br />
<div className="form-floating input-group">
  <input type="number" className="form-control" id="floatingPassword" placeholder="Prix" name="prix" onChange={handleChange} /><span className="input-group-text">Ar</span>
  <label htmlFor="floatingPassword">Prix</label>
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={() => {transform(trans.id)}}>Save changes</button>
      </div>
    </div>
  </div>
</div>

        </>
     );
}
 
export default Production;