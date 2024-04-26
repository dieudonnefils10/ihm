import Mouvement from "../../components/charts/mouvement";
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const MouvPage = () => {
    return ( 
        <>
               <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <Mouvement />
            </div>
        </div>
      </div>
        </>
     );
}
 
export default MouvPage;