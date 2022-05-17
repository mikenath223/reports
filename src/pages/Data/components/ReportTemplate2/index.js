import { pieColors } from "app/constants";
import { formatDate } from "app/utils/formatDate";
import { getPieChartValues } from "app/utils/getPieChartValuew";
import Collapsible from "components/Collapsible";
import { useState } from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";
import "./styles.css";

export default function ReportTemplate2({ title, reports, totalTitle }) {
  const [expanded, setExpanded] = useState(
    Object.keys(reports)?.reverse()?.[0]
  );

  const grandTotal = Object.values(reports).reduce((a, c) => a + c.total, 0);

  const pieData = Object.entries(
    getPieChartValues(reports, grandTotal)
  ).reverse();
  const pieElement = pieData.map((item) => item[0]);
  const options = {
    title: null,
    legend: "none",
    pieHole: 0.6,
    is3D: false,
    colors: pieColors,
  };

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
              {new Intl.NumberFormat("ja-JP").format(
                Math.round(reports[projectTitle]?.total)
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
              <th>Transaction ID</th>
              <th className="amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((project) => {
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
      </Collapsible>
    );
  };
  return (
    <section className="reports-wrap reports-2-wrap">
      <div className="reports-template reports-template2">
        <h1>{title}</h1>
        <div>
          {Object.keys(reports || {})
            ?.reverse()
            ?.map((projectTitle, i) => renderProject(projectTitle, i))}
        </div>
      </div>
      <div className="pie-chart-wrap">
        <div className="pie-titles">
          {pieElement?.map((title, i) => (
            <p key={title} className="pie-title-wrap">
              <span
                className="pie-span"
                style={{
                  backgroundColor: pieColors[i % 5],
                }}
              />{" "}
              <span className="pie-title">{title}</span>
            </p>
          ))}
        </div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={[["Projects", "Amount"], ...pieData]}
          options={options}
        />
        <div className="grand-total">
          <span>
            {totalTitle} |{" "}
            {new Intl.NumberFormat("ja-JP").format(Math.round(grandTotal))} USD
          </span>
        </div>
      </div>
    </section>
  );
}

ReportTemplate2.propTypes = {
  title: PropTypes.string,
  reports: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    total: PropTypes.number,
  }),
  totalTitle: PropTypes.string,
};
