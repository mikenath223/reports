import Form from "components/Form";
import SideNav from "components/SideNav";
import Data from "pages/Data";
import "./styles.css";

export default function Reports() {
  return (
    <section className="reports">
      <SideNav />
      <div className="data-wrap">
        <div className="form-wrap">
          <div>
            <h1 className="heading">Reports</h1>
            <p className="intro">
              Easily generate a report of your transactions
            </p>
          </div>
          <Form />
        </div>
        <Data />
      </div>
    </section>
  );
}
