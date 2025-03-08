function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ background: "#a3a0a9", width: "100%", height: 75, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <NavBarComponent />
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ background: "#c8dceb", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ProfileComponent />
        </div>

        <div style={{ background: "#ede99d", flex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PostComponent />
        </div>

        <div style={{ background: "#ecd9dd", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SettingsComponent />
        </div>
      </div>
    </div>
  );
}

function NavBarComponent() {
  return <div style={{ fontWeight: "bold" }}>This is Navbar</div>;
}

function PostComponent() {
  return <div>This is posts area</div>;
}

function ProfileComponent() {
  return <div>This is profile area</div>;
}

function SettingsComponent() {
  return <div>This is settings area</div>;
}

export default App;
