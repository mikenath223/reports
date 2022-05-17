import Reports from "pages/Reports";
import TopNav from "components/TopNav";
import "./styles.css";

export default function Home() {
  return (
    <main>
      <TopNav />
      <Reports />
      <footer className="footer">Terms&Conditions | Privacy policy</footer>
    </main>
  );
}
