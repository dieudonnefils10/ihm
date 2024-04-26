import Stocks from "../../components/stocks/stocks"
import Dashboard from "../../components/dashboard"
import Toggle from "../../components/toggle"

const StocksPage = () => {
  return (
    <>
      <div className="full_container">
        <div className="inner_container">
            <Dashboard />
            <div id="content">
                <Toggle />
                <Stocks />
            </div>
        </div>
      </div>
    </>
  );
};

export default StocksPage;
