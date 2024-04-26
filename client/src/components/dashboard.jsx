/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'

const Dashboard = () => {
   const navigate = useNavigate()
   const [auth, setAuth] = useState(false)
   const [message, setMessage] = useState("")
   const [name, setName] = useState("")
   const [total, setTotal] = useState("")

   axios.defaults.withCredentials = true
   useEffect(() => {
      axios.get('http://localhost:3001').then((response) => {
             if(response.data.Status === "Success"){
                 setAuth(true)
                 setName(response.data.name)
             }else {
                setAuth(false)
                 setMessage(response.data.error)
                 navigate('/login')
             }
         })
         AOS.init()
         axios.get("http://localhost:3001/total").then((response) => {
            setTotal(response.data)
            console.log(response.data);
         }) 
   },[])
    const fournisseurs = () => {
        navigate('/fournisseurs')
    }
    const stocks = () => {
        navigate('/stocks')
    }
    const vente = () => {
        navigate('/vente')
    }
    const production = () => {
        navigate('/production')
    }
    const charts = () => {
      navigate('/')
  }
  const ventemvt = () => {
   navigate('/mouvement')
}
const notif = () => {
   navigate('/notifications')
}
    const logout = () => {
       axios.get('http://localhost:3001/logout').then(() => {
          location.reload(true)
       })
    }
    return ( 
        <>
            {
               auth ? (
                  <nav id="sidebar">
               <div className="sidebar_blog_1">
                  <div className="sidebar_user_info">
                     <div className="icon_setting"></div>
                     <div className="user_profle_side">
                        <div className="user_img"><img className="img-responsive" src="./image/cap.jpg" alt="#" /></div>
                        <div className="user_info">
                           <h6>{name}</h6>
                           <p><span className="online_animation"></span> En ligne</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sidebar_blog_2">
                  <h4>General</h4>
                  <ul className="list-unstyled components">
                     <li className="active"  onClick={charts} data-aos="fade-right"  data-aos-duration="1000">
                        <a><i className="fa fa-dashboard yellow_color"></i> <span>Tableau de bord</span></a>
                     </li>
                     <li onClick={production}  data-aos="fade-right" data-aos-duration="1200"><a><i className="fa fa-clock-o orange_color"></i> <span>Production</span></a></li>
                     <li onClick={stocks} data-aos="fade-right" data-aos-duration="1400"><a><i className="fa fa-diamond purple_color"></i> <span>Stocks</span></a></li>
                     <li onClick={fournisseurs} data-aos="fade-right" data-aos-duration="1600"><a><i className="fa fa-table purple_color2"></i> <span>Fournisseurs</span></a></li>
                     <li onClick={vente} data-aos="fade-right" data-aos-duration="1800"><a><i className="fa fa-object-group blue2_color"></i> <span>Ventes</span></a></li>
                     <li onClick={ventemvt} data-aos="fade-right" data-aos-duration="2000"><a><i className="fa fa-briefcase blue1_color"></i> <span>Mouvement de vente</span></a></li>
                     <li onClick={notif} data-aos="fade-right" data-aos-duration="2400"><a><i className="fa fa-bell orange_color2"></i> <span>Notifications</span><i className="not">{total.count}</i></a></li>
                     <li onClick={logout} data-aos="fade-right" data-aos-duration="2400"><a><i className="fa fa-map purple_color2"></i> <span>Deconnexion</span></a></li>
                  </ul>
               </div>
            </nav>
               ) : (
                  <div className="div">
                     <p className="text-dark">{message}</p>
                  <h1 className="text-dark"><i>Login not found</i></h1>
                  </div>
               )
            }
        </>
     );
}
 
export default Dashboard;