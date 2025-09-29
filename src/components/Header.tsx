import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NotificationCenter } from "./NotificationCenter";
import { Search, User, Bell, Briefcase, Users } from "lucide-react";

interface HeaderProps {
  activeTab: "dashboard" | "jobs" | "students" | "profile";
  onTabChange: (tab: "dashboard" | "jobs" | "students" | "profile") => void;
}

export const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">HC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">HireConnect</h1>
                <p className="text-xs text-muted-foreground">Smart Recruitment Platform</p>
              </div>
            </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange("dashboard")}
            className="transition-smooth"
          >
            <Briefcase className="h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "jobs" ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange("jobs")}
            className="transition-smooth"
          >
            <Search className="h-4 w-4" />
            Jobs
          </Button>
          <Button
            variant={activeTab === "students" ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange("students")}
            className="transition-smooth"
          >
            <Users className="h-4 w-4" />
            Students
          </Button>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <NotificationCenter />
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange("profile")}
            className="transition-smooth"
          >
            <User className="h-4 w-4" />
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
};