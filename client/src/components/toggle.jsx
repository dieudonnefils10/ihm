import AOS from 'aos'
import { useEffect } from 'react';

const Toggle = () => {
   useEffect(() => {
      AOS.init({duration: 1500})
   })
    return ( 
        <>
               <div className="topbar" data-aos="fade-down">
                  <nav className="navbar navbar-expand-lg navbar-light">
                     <div className="full">
                        <div className="logo_section">
                           <a><img className="img-responsive" src="./image/logo.jpeg" alt="#" /></a>
                        </div>
                        <div className="right_topbar">
                              <h2><i className="e">E</i><i>-</i><i>V</i><i>A</i><i>R</i><i>O</i><i>T</i><i>R</i><i>A</i></h2>
                        </div>
                     </div>
                  </nav>
               </div>
        </>
     );
}
 
export default Toggle;