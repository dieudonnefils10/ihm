import Vente from "../../components/ventes/ventes"
import VenteAdd from "../../components/ventes/vente-add"
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const VentePage = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <br />
          <h1>Ventes</h1>
          <hr />
          <h2>
            <i>Gestion des ventes</i>
          </h2><br />
                <div className="row">
                    <VenteAdd />
                    <Vente />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default VentePage;
