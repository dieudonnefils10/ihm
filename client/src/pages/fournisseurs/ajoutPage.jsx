import AjoutFournisseurs from "../../components/fournisseurs/add-fournisseurs";
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const AjoutFournisseursPage = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <AjoutFournisseurs />
            </div>
        </div>
      </div>
    </>
  );
};

export default AjoutFournisseursPage;
