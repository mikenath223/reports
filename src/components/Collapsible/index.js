import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import PropTypes from "prop-types";

export default function AccordionElem({
  header,
  expanded,
  setExpanded,
  children,
}) {
  return (
    <Accordion className="accordion" expanded={expanded} onChange={setExpanded}>
      <AccordionSummary
        expandIcon={null}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {header}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

AccordionElem.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func,
};
