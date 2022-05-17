import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "components/DatePicker";
import GatewaySelect from "components/GatewaySelect";
import ProjectsSelect from "components/ProjectsSelect";
import { setFromDate, setToDate } from "app/slices/formSlice";
import { getReports } from "app/slices/reportsSlice";
import "./styles.css";
import { formatDate } from "app/utils/formatDate";

export default function Form() {
  const toDate = useSelector((state) => state.form.toDate);
  const fromDate = useSelector((state) => state.form.fromDate);
  const projectType = useSelector((state) => state.form.projectType);
  const gatewayType = useSelector((state) => state.form.gatewayType);
  const projects = useSelector((state) => state.projects);
  const gateways = useSelector((state) => state.gateways);
  const dispatch = useDispatch();
  const [isOpenFromDate, setOpenFromDate] = useState(false);
  const [isOpenToDate, setOpenToDate] = useState(false);

  const handleFromDate = (date) => dispatch(setFromDate(date));

  const handleToDate = (date) => dispatch(setToDate(date));

  const handleGenerateReport = () => {
    const payload = {
      ...(projectType !== "All Projects" ? { projectId: projectType } : {}),
      ...(gatewayType !== "All Gateways" ? { gatewayId: gatewayType } : {}),
      from: formatDate(fromDate),
      to: formatDate(toDate),
    };
    const requestType = `${
      projectType === "All Projects" ? projectType : "Single Project"
    }-${gatewayType === "All Gateways" ? gatewayType : "Single Gateway"}`;
    const title = `${
      projectType !== "All Projects"
        ? projects.data?.find((item) => item.projectId === projectType)?.name
        : projectType
    } | ${
      gatewayType !== "All Gateways"
        ? gateways.data?.find((item) => item.gatewayId === gatewayType)?.name
        : gatewayType
    }`;

    dispatch(
      getReports({
        payload,
        requestType,
        title,
      })
    );
  };

  return (
    <section className="form">
      <ProjectsSelect />
      <GatewaySelect />
      <DatePicker
        text="From date"
        dateText={fromDate ? new Date(fromDate).toLocaleDateString() : null}
        date={fromDate || new Date().toDateString()}
        handleChange={handleFromDate}
        isOpen={isOpenFromDate}
        setOpen={(value) => setOpenFromDate(value)}
      />
      <DatePicker
        text="To date"
        dateText={toDate ? new Date(toDate).toLocaleDateString() : null}
        date={toDate || new Date().toDateString()}
        handleChange={handleToDate}
        isOpen={isOpenToDate}
        setOpen={(value) => {
          fromDate && setOpenToDate(value);
        }}
        minDate={new Date(fromDate)}
      />
      <button className="submit-button" onClick={handleGenerateReport}>
        Generate report
      </button>
    </section>
  );
}
