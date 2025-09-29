import { useState } from "react";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { JobsPage } from "@/components/JobsPage";
import { StudentsPage } from "@/components/StudentsPage";
import { ProfilePage } from "@/components/ProfilePage";
import { RecruiterDashboard } from "@/components/RecruiterDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "jobs" | "students" | "profile" | "recruiter">("dashboard");
  const [userRole] = useState<"student" | "recruiter">("student"); // Toggle for demo

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return userRole === "student" ? <Dashboard /> : <RecruiterDashboard />;
      case "jobs":
        return <JobsPage />;
      case "students":
        return <StudentsPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;