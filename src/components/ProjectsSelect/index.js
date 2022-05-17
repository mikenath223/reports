import { useEffect } from "react";
import SelectDropdown from "components/SelectDropdown";
import { setProjectType } from "app/slices/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "app/slices/projectsSlice";

export default function ProjectsSelect() {
  const dispatch = useDispatch();
  const selectedProjectType = useSelector((state) => state.form.projectType);
  const projects = useSelector((state) => state.projects.data);
  const updatedProjects = [
    { name: "All Projects", value: "All Projects" },
    ...(projects?.map((item) => ({ name: item.name, value: item.projectId })) ||
      []),
  ];

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(setProjectType(event.target.value));
  };

  return (
    <SelectDropdown
      selectedType={selectedProjectType}
      items={updatedProjects}
      handleChange={handleChange}
    />
  );
}
