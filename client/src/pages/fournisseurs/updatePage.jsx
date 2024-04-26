import ModifierFournisseurs from "../../components/fournisseurs/update-fournisseurs";
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const ModifFournisseursPage = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <ModifierFournisseurs />
            </div>
        </div>
      </div>
    </>
  );
};

export default ModifFournisseursPage;
