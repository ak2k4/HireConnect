import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, BellOff, X, Check, Clock, Mail, UserPlus, Briefcase, Calendar } from "lucide-react";

interface Notification {
  id: number;
  type: "application" | "interview" | "message" | "match" | "deadline";
  title: string;
  description: string;
  time: string;
  read: boolean;
  priority: "high" | "medium" | "low";
}

export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "interview",
      title: "Interview Scheduled",
      description: "CitiBank has scheduled an interview for Software Engineer position",
      time: "2 hours ago",
      read: false,
      priority: "high"
    },
    {
      id: 2,
      type: "match",
      title: "New Job Match",
      description: "95% match found for Data Scientist role at Goldman Sachs",
      time: "4 hours ago",
      read: false,
      priority: "medium"
    },
    {
      id: 3,
      type: "application",
      title: "Application Update",
      description: "Your application for Frontend Developer has been reviewed",
      time: "1 day ago",
      read: true,
      priority: "medium"
    },
    {
      id: 4,
      type: "deadline",
      title: "Application Deadline",
      description: "ML Engineer position at Microsoft closes in 2 days",
      time: "1 day ago",
      read: false,
      priority: "high"
    },
    {
      id: 5,
      type: "message",
      title: "New Message",
      description: "Recruiter from Amazon sent you a message",
      time: "2 days ago",
      read: true,
      priority: "low"
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "interview": return Calendar;
      case "match": return UserPlus;
      case "application": return Briefcase;
      case "deadline": return Clock;
      case "message": return Mail;
      default: return Bell;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-500";
      case "medium": return "text-orange-500";
      case "low": return "text-blue-500";
      default: return "text-muted-foreground";
    }
  };

  if (!isOpen) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative"
        onClick={() => setIsOpen(true)}
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center bg-red-500">
            {unreadCount}
          </Badge>
        )}
      </Button>
    );
  }

  return (
    <div className="fixed top-16 right-4 z-50 w-80 md:w-96">
      <Card className="shadow-elegant border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Notifications</CardTitle>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                  <Check className="h-4 w-4" />
                  Mark all read
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-96">
            <div className="space-y-1 p-4">
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <BellOff className="h-8 w-8 mx-auto mb-2" />
                  <p>No notifications</p>
                </div>
              ) : (
                notifications.map((notification) => {
                  const Icon = getIcon(notification.type);
                  return (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-smooth hover:shadow-card ${
                        !notification.read ? 'bg-primary/5 border-primary/20' : 'bg-background'
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${!notification.read ? 'bg-primary/10' : 'bg-secondary'}`}>
                          <Icon className={`h-4 w-4 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h4 className={`text-sm font-medium ${!notification.read ? 'text-primary' : ''}`}>
                              {notification.title}
                            </h4>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.description}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getPriorityColor(notification.priority)}`}
                            >
                              {notification.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};