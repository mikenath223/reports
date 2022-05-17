import { useEffect } from "react";
import SelectDropdown from "components/SelectDropdown";
import { setGatewayType } from "app/slices/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { getGateways } from "app/slices/gatewaySlice";

export default function GatewaySelect() {
  const dispatch = useDispatch();
  const selectedGatewayType = useSelector((state) => state.form.gatewayType);
  const gateways = useSelector((state) => state.gateways.data);
  const updatedGateways = [
    { name: "All Gateways", value: "All Gateways" },
    ...(gateways?.map((item) => ({ name: item.name, value: item.gatewayId })) ||
      []),
  ];

  useEffect(() => {
    dispatch(getGateways());
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(setGatewayType(event.target.value));
  };

  return (
    <SelectDropdown
      selectedType={selectedGatewayType}
      items={updatedGateways}
      handleChange={handleChange}
    />
  );
}
