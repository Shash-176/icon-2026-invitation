import ImageGrid from "./components/ImageGrid";
import InvitationCard from "./components/InvitationCard";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      {/* Background */}
      <ImageGrid />

      {/* Foreground Invitation */}
      <div className="invitation-layer">
        <InvitationCard />
      </div>
    </div>
  );
}

export default App;
