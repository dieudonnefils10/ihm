import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [data, setData] = useState([])
    const [datas, setDatas] = useState({})
    const [message, setMEssage] = useState("")
    const [messages, setMEssages] = useState("")
    const navigate = useNavigate()

  const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value 

        setData(values => ({...values,[name]:value}))
    }
    const handleChanges = (e) => {
        const name = e.target.name 
        const value = e.target.value 

        setDatas(values => ({...values,[name]:value}))
    }

    const handleSubmit = () => {
        if(data.name != "" && data.mail != "" && data.password != ""){
            axios.post("http://localhost:3001/register", datas)
            .then(res => {
                if(res.data.Status === "Success"){
                    setMEssages("Inscription reussit")
                    window.location.reload()
                }else {
                    setMEssages("Email déjà existant ou champ incomplet")
                }
            })
        }
}
    axios.defaults.withCredentials = true
    const handleClick = () => {
            if(data.mail != "" && data.password != ""){
                axios.post("http://localhost:3001/login", data)
                .then(res => {
                    if(res.data.Status === "Success"){
                        navigate('/')
                    }else {
                        setMEssage("Email ou mot de passe incorrect")
                    }
                })
            }
    }
    return ( 
        <>
            <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
					<label htmlFor="chk" aria-hidden="true" className="label">Sign up</label>
					<input type="text" placeholder="User name" required="" className="input" name="name" onChange={handleChanges} />
					<input type="email" placeholder="Email" required="" className="input" name="mail" onChange={handleChanges} />
					<input type="password" placeholder="Password"  className="input" required="" name="password" onChange={handleChanges} />
                    <p className="text-info"><i>{messages}</i></p>
					<button onClick={handleSubmit} className="bouto" >Sign up</button>
			</div>

			<div className="login">
					<label htmlFor="chk" aria-hidden="true"  className="label">Login</label>
					<input type="email" placeholder="Email" required="" name="mail" className="input" onChange={handleChange}  />
					<input type="password" placeholder="Password" required="" name="password"  className="input" onChange={handleChange}  />
                    <p className="text-info"><i>{message}</i></p>
					<button  onClick={handleClick}  className="bouto">Login</button>
			</div>
	</div>
        </>
     );
}
 
export default Login;