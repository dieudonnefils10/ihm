import Dashboard from "../../components/dashboard"
import Notifications from "../../components/notifications";
import Toggle from "../../components/toggle"

const Expie = () => {
    return ( 
        <>
            <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <Notifications />
            </div>
        </div>
      </div>
        </>
     );
}
 
export default Expie;