import { formatDate } from "app/utils/formatDate";
import PropTypes from "prop-types";

export default function ReportTemplate3({ title, reports }) {
  const grandTotal = reports.reduce((a, c) => a + c.total, 0);

  return (
    <section className="reports-wrap">
      <div className="reports-template">
        <h1>{title}</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th className="date">Date</th>
                <th>Transaction ID</th>
                <th className="amount">Amount</th>
              </tr>
            </thead>
            <tbody>
              {reports?.map((project) => {
                return (
                  <tr key={project.amount}>
                    <td className="date">{formatDate(project?.created)}</td>
                    <td>{project?.paymentId}</td>
                    <td className="amount">{project?.amount} USD</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grand-total">
        <span>
          TOTAL: {new Intl.NumberFormat("ja-JP").format(Math.round(grandTotal))}
        </span>
      </div>
    </section>
  );
}

ReportTemplate3.propTypes = {
  title: PropTypes.string,
  reports: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};
