import { ReactComponent as SideImage } from "app/images/sidenav.svg";
import "./styles.css";

export default function SideNav() {
  return (
    <nav className="side-nav">
      <SideImage />
    </nav>
  );
}
