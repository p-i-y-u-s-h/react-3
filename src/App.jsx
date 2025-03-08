import { useState } from "react";
import { Home, Bell, User, Settings, MessageCircle, PlusSquare, Search } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("feed");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", fontFamily: "Arial, sans-serif", background: "#f0f2f5" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px", borderBottom: "1px solid #ddd", background: "#fff", boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1877F2" }}>SocialApp</h1>
        <NavBarComponent setActiveSection={setActiveSection} />
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        {activeSection === "profile" && <ProfileComponent />}
        {activeSection === "settings" && <SettingsComponent />}
        {activeSection === "feed" && <PostComponent />}
        {activeSection === "messages" && <MessagesComponent />}
        {activeSection === "notifications" && <NotificationsComponent />}
      </div>
    </div>
  );
}

function NavBarComponent({ setActiveSection }) {
  return (
    <div style={{ display: "flex", gap: "20px", fontSize: "20px" }}>
      <Home onClick={() => setActiveSection("feed")} style={{ cursor: "pointer", color: "#1877F2" }} />
      <Search style={{ cursor: "pointer" }} />
      <PlusSquare style={{ cursor: "pointer" }} />
      <Bell onClick={() => setActiveSection("notifications")} style={{ cursor: "pointer" }} />
      <MessageCircle onClick={() => setActiveSection("messages")} style={{ cursor: "pointer" }} />
      <User onClick={() => setActiveSection("profile")} style={{ cursor: "pointer" }} />
      <Settings onClick={() => setActiveSection("settings")} style={{ cursor: "pointer" }} />
    </div>
  );
}

function PostComponent() {
  return (
    <div style={{ width: "50%", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      <div style={{ marginBottom: "20px" }}>
        <img src="https://via.placeholder.com/600x400" alt="Post" style={{ width: "100%", borderRadius: "10px" }} />
        <p><strong>John Doe</strong>: Hello, world!</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="Post" style={{ width: "100%", borderRadius: "10px" }} />
        <p><strong>Jane Smith</strong>: This is a great app!</p>
      </div>
    </div>
  );
}

function ProfileComponent() {
  return (
    <div style={{ textAlign: "center", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      <img src="https://via.placeholder.com/100" alt="Profile" style={{ borderRadius: "50%", marginBottom: "10px" }} />
      <h2>Profile</h2>
      <p>Welcome, User!</p>
    </div>
  );
}

function SettingsComponent() {
  return (
    <div style={{ textAlign: "center", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      <h2>Settings</h2>
      <p>Manage your preferences</p>
    </div>
  );
}

function MessagesComponent() {
  return (
    <div style={{ textAlign: "center", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      <h2>Messages</h2>
      <p>Your conversations appear here.</p>
    </div>
  );
}

function NotificationsComponent() {
  return (
    <div style={{ textAlign: "center", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      <h2>Notifications</h2>
      <p>Stay updated with alerts.</p>
    </div>
  );
}

export default App;
