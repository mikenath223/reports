import EmptyDataImage from "app/images/emptydata.png";
import "./styles.css";

export default function EmptyData() {
  return (
    <section className="empty-wrap">
      <div className="content-wrap">
        <h1 className="empty-heading">No reports</h1>
        <p className="empty-content">
          Currently you have no data for the reports to be generated. Once you
          start generating traffic through the Balance application the reports
          will be shown.
        </p>
        <img src={EmptyDataImage} alt="" />
      </div>
    </section>
  );
}
