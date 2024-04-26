/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

const Prix = () => {
    const [total, settotal] = useState([])
    const [somme, setsomme] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/getprix").then((response) => {
            settotal(response.data)
        })
    },[])

    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 

        setsomme(values => ({...values, [name]:value}))
    }
    const payer = () => {
        const API = 'http://localhost:3001/payer'
        axios.put(API,somme)
        alert("Payement reussite")
        window.location.reload()
    }
    return ( 
        <>
                <div className="row">
                    <div className="col-lg-10">
                        <div className="form-floating">
                            <input type="number" className="form-control" placeholder="Montant à payer" name="total" value={total.somme} onChange={handleChange} readOnly />
                            <label htmlFor="">Montant à payer</label>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    <div className="form-floating">
                            <input type="text" className="form-control" placeholder="UM" value="Ar" readOnly/>
                            <label htmlFor="">UM</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating">
                            <input type="number" className="form-control" placeholder="Montant donner par le client"  name="donne" onChange={handleChange} />
                            <label htmlFor="">Montant donner par le client</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="form-floating">
                            <input type="number" className="form-control" placeholder="Montant à rendre" value={somme.donne-total.somme}  name="rendre" onChange={handleChange} readOnly/>
                            <label htmlFor="">Montant à rendre</label>
                        </div>
                    </div>
                </div><br />
                <button className="btn btn-success bout" onClick={payer}><i className="bi bi-check">Valider</i></button>
        </>
     );
}
 
export default Prix;