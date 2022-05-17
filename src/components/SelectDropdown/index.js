import { Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import "./styles.css";

export default function SelectDropdown({ selectedType, handleChange, items }) {
  return (
    <Select
      id="projects-select"
      value={selectedType}
      displayEmpty
      onChange={handleChange}
      className="project-select"
    >
      {items?.map((project) => (
        <MenuItem key={project.value} value={project.value}>
          {project.name}
        </MenuItem>
      ))}
    </Select>
  );
}

SelectDropdown.propTypes = {
  selectedType: PropTypes.string,
  handleChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
