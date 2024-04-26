/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Fournisseurs = () => {
    const navigate = useNavigate()
    const URL = 'http://localhost:3001/getfrn'

    const [client, setClient] = useState([])
    const [rech, setRech] = useState('')

    useEffect(() => {
      axios.get(URL).then(response => {
        setClient(response.data)
      })
      console.log(client);
    },[])
    const search = (id) => {
      const URL_PK = `http://localhost:3001/pkfrn/${id}`
      axios.get(URL_PK).then((response) => {
        setRech(response.data)
      })
  
    }
  
    const addfrn = () => {
        navigate('/nouveauFournisseurs')
    }
    const updatefrn = (id) => {
      navigate(`/modifierfournisseurs/${id}`)
  }
  const deletefrn = (id) => {
    const URL_DE = `http://localhost:3001/deletefrn/${id}`
    axios.delete(URL_DE)
    window.location.reload()
  }
    return (
      <>
        <div className="client">
          <br />
          <h1>Fournisseurs</h1>
          <hr />
          <h2>
            <i>Gestion des fournisseurs</i>
          </h2>
          <div className="ajouter">
            <button className="btn btn-light"  onClick={addfrn}>
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
                <th><i>Pays</i></th>
                <th><i>Ville</i></th>
                <th><i>Email</i> </th>
                <th><i>Téléphone</i></th>
                <th><i>Adresse</i></th>
                <th><i>Actions</i></th>
              </tr>
            </thead>
            <tbody>
            {
              client.map((cli) => (
                <tr key={cli.id}>
                <td><i><input type="checkbox" /></i></td>
                <td><i>FRN/0{cli.id}</i></td>
                <td><i>{cli.nom}</i></td>
                <td><i>{cli.pays}</i></td>
                <td><i>{cli.ville}</i></td>
                <td><i>{cli.mail}</i></td>
                <td><i>{cli.phone}</i></td>
                <td><i>{cli.adresse}</i></td>
                <td>
                  <i>
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i><span className="bi bi-list"></span> Actions</i>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li onClick={() => {updatefrn(cli.id)}}><button type="button" className="btn btn-light"><i className="dropdown-item"><span className="bi bi-pencil-square"></span> Modifier</i></button></li>
                        <li><button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#delete" onClick={() => {search(cli.id)}}><i className="dropdown-item"><span className="bi bi-trash"></span> Supprimer</i></button></li>
                      </ul>
                    </div>
                  </i>
                </td>
              </tr>
              ))
            }
            </tbody>
          </table>
          <div className="modal fade" id="delete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Suppression d'un client</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            <h2><p><i>Vous voulez vraiment le supprimer</i></p></h2>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger"data-bs-dismiss="modal"  onClick={() => {deletefrn(rech.id)}}>Supprimer</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </>
    );
  };
  
  export default Fournisseurs;
  