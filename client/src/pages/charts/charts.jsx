import Chart from "../../components/charts/charts";
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const ChartsPage = () => {
    return ( 
        <>
               <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <Chart />
            </div>
        </div>
      </div>
        </>
     );
}
 
export default ChartsPage;