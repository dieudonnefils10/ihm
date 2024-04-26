import AjoutProduction from "../../components/production/ajout-production";
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const AjoutProductionPage = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <AjoutProduction />
            </div>
        </div>
      </div>
    </>
  );
};

export default AjoutProductionPage;
