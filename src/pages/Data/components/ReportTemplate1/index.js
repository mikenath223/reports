import { formatDate } from "app/utils/formatDate";
import Collapsible from "components/Collapsible";
import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./styles.css";

export default function ReportTemplate1({ title, reports }) {
  const gateways = useSelector((state) => state.gateways);
  const [expanded, setExpanded] = useState(
    Object.keys(reports)?.reverse()?.[0]
  );

  const grandTotal = Object.values(reports).reduce((a, c) => a + c.total, 0);

  const renderProject = (projectTitle, i) => {
    const data = reports[projectTitle]?.data;
    return (
      <Collapsible
        key={projectTitle}
        expanded={expanded === projectTitle}
        setExpanded={(event, newExpanded) =>
          setExpanded(newExpanded ? projectTitle : false)
        }
        header={
          <div className="panel-header">
            <h2 className="title">{projectTitle}</h2>
            <span className="title">
              TOTAL:{" "}
              {new Intl.NumberFormat("en-IN").format(
                reports[projectTitle]?.total
              )}{" "}
              USD
            </span>
          </div>
        }
      >
        <table className="table">
          <thead>
            <tr>
              <th className="date">Date</th>
              <th>Gateway</th>
              <th>Transaction ID</th>
              <th className="amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((project) => {
              const gateway = gateways?.data?.find(
                (item) => item.gatewayId === project.gatewayId
              );
              return (
                <tr key={project.amount}>
                  <td className="date">{formatDate(project?.created)}</td>
                  <td>{gateway?.name}</td>
                  <td>{project?.paymentId}</td>
                  <td className="amount">{project?.amount} USD</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Collapsible>
    );
  };
  return (
    <section className="reports-wrap">
      <div className="reports-template">
        <h1>{title}</h1>
        <div>
          {Object.keys(reports || {})
            ?.reverse()
            ?.map((projectTitle, i) => renderProject(projectTitle, i))}
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

ReportTemplate1.propTypes = {
  title: PropTypes.string,
  reports: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    total: PropTypes.number,
  }),
};
