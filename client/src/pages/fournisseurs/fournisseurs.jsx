import Fournisseurs from "../../components/fournisseurs/fournisseurs";
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const FournisseursPage = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <Fournisseurs />
            </div>
        </div>
      </div>
    </>
  );
};

export default FournisseursPage;
