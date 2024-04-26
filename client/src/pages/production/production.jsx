import Production from "../../components/production/production";
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const ProductionPage = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <Production />
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductionPage;
