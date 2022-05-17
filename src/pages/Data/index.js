import { groupDataByGateways, groupDataByProjects } from "app/utils/groupData";
import { useSelector } from "react-redux";
import EmptyData from "./components/EmptyData";
import ReportTemplate1 from "./components/ReportTemplate1";
import ReportTemplate2 from "./components/ReportTemplate2";
import ReportTemplate3 from "./components/ReportTemplate3";
import "./styles.css";

export default function Data() {
  const { data: reports, type, title } = useSelector((state) => state.reports);
  const projects = useSelector((state) => state.projects);
  const gateways = useSelector((state) => state.gateways);
  let dataElement = null;
  let groupedProjectsData = groupDataByProjects(reports?.data, projects?.data);
  let groupedGatewaysData = groupDataByGateways(reports?.data, gateways?.data);

  switch (type) {
    case "All Projects-All Gateways": {
      dataElement = (
        <ReportTemplate1 reports={groupedProjectsData} title={title} />
      );
      break;
    }
    case "All Projects-Single Gateway": {
      dataElement = (
        <ReportTemplate2
          reports={groupedProjectsData}
          title={title}
          totalTitle="GATEWAY TOTAL"
        />
      );
      break;
    }
    case "Single Project-All Gateways": {
      dataElement = (
        <ReportTemplate2
          reports={groupedGatewaysData}
          title={title}
          totalTitle="PROJECT TOTAL"
        />
      );
      break;
    }
    case "Single Project-Single Gateway": {
      dataElement = <ReportTemplate3 reports={reports?.data} title={title} />;
      break;
    }
    default: {
      dataElement = <EmptyData />;
      break;
    }
  }

  return dataElement;
}
