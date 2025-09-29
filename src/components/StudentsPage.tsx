import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Star,
  GraduationCap,
  MessageCircle,
  Mail,
  ExternalLink,
  Code,
  Award
} from "lucide-react";

export const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const students = [
    {
      id: 1,
      name: "Sarah Chen",
      university: "MIT",
      degree: "Computer Science",
      year: "Senior",
      location: "Boston, MA",
      gpa: 3.9,
      profileMatch: 95,
      skills: ["React", "Python", "Machine Learning", "AWS"],
      projects: ["AI Chess Engine", "Social Media Analytics", "E-commerce Platform"],
      certifications: ["AWS Solutions Architect", "Google Cloud Professional"],
      interests: ["AI/ML", "FinTech", "Cloud Computing"],
      avatar: "",
      status: "Available",
      seeking: "Full-time"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      university: "Stanford University",
      degree: "Data Science",
      year: "Junior",
      location: "Palo Alto, CA",
      gpa: 3.8,
      profileMatch: 88,
      skills: ["Python", "TensorFlow", "SQL", "Tableau"],
      projects: ["Stock Price Predictor", "Customer Churn Analysis", "NLP Chatbot"],
      certifications: ["Tableau Desktop Certified", "IBM Data Science"],
      interests: ["Data Science", "Finance", "Startups"],
      avatar: "",
      status: "Available",
      seeking: "Internship"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      university: "UC Berkeley",
      degree: "Information Systems",
      year: "Graduate",
      location: "Berkeley, CA",
      gpa: 3.7,
      profileMatch: 82,
      skills: ["JavaScript", "Node.js", "MongoDB", "Docker"],
      projects: ["Task Management App", "API Gateway", "Microservices Architecture"],
      certifications: ["Docker Certified Associate", "MongoDB Developer"],
      interests: ["Backend Development", "DevOps", "System Design"],
      avatar: "",
      status: "Open to offers",
      seeking: "Full-time"
    },
    {
      id: 4,
      name: "David Kim",
      university: "Carnegie Mellon",
      degree: "Software Engineering",
      year: "Sophomore",
      location: "Pittsburgh, PA",
      gpa: 3.9,
      profileMatch: 79,
      skills: ["Java", "Spring Boot", "React", "PostgreSQL"],
      projects: ["Banking System", "Event Management Platform", "Mobile Game"],
      certifications: ["Oracle Java Certified", "Spring Professional"],
      interests: ["Full-stack Development", "Gaming", "Mobile Apps"],
      avatar: "",
      status: "Looking",
      seeking: "Internship"
    },
    {
      id: 5,
      name: "Priya Patel",
      university: "University of Washington",
      degree: "Cybersecurity",
      year: "Senior",
      location: "Seattle, WA",
      gpa: 3.8,
      profileMatch: 76,
      skills: ["Cybersecurity", "Penetration Testing", "Python", "Network Security"],
      projects: ["Security Audit Tool", "Vulnerability Scanner", "Incident Response System"],
      certifications: ["CISSP", "CEH", "Security+"],
      interests: ["Cybersecurity", "Ethical Hacking", "Financial Security"],
      avatar: "",
      status: "Available",
      seeking: "Full-time"
    }
  ];

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    student.degree.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-500";
      case "Open to offers": return "bg-blue-500";
      case "Looking": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Search & Filters */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students by name, university, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline">
                <GraduationCap className="h-4 w-4" />
                University
              </Button>
              <Button variant="outline">
                <Star className="h-4 w-4" />
                Top Matches
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Talented Students</h2>
          <p className="text-muted-foreground">
            {filteredStudents.length} students found • Ranked by AI Match Score
          </p>
        </div>
        <Button variant="hero">
          <MessageCircle className="h-4 w-4" />
          Bulk Message
        </Button>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStudents.map((student, index) => (
          <Card key={student.id} className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-3 w-3" />
                      <span>{student.year} • {student.degree}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{student.university} • {student.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={student.profileMatch >= 90 ? "default" : "secondary"}
                    className={student.profileMatch >= 90 ? "bg-green-500" : ""}
                  >
                    {student.profileMatch}% Match
                  </Badge>
                  <div className="flex items-center gap-1 mt-1">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(student.status)}`}></div>
                    <span className="text-xs text-muted-foreground">{student.status}</span>
                  </div>
                </div>
              </div>

              {/* Academic Info */}
              <div className="flex items-center justify-between mb-4 p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">GPA</p>
                    <p className="font-semibold">{student.gpa}/4.0</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Seeking</p>
                    <Badge variant="outline">{student.seeking}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Profile Strength</p>
                  <Progress value={student.profileMatch} className="w-20" />
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Core Skills</p>
                <div className="flex flex-wrap gap-1">
                  {student.skills.slice(0, 6).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {student.skills.length > 6 && (
                    <Badge variant="outline" className="text-xs">
                      +{student.skills.length - 6} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Recent Projects</p>
                <div className="space-y-1">
                  {student.projects.slice(0, 2).map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Code className="h-3 w-3" />
                      <span>{project}</span>
                    </div>
                  ))}
                  {student.projects.length > 2 && (
                    <p className="text-xs text-muted-foreground">+{student.projects.length - 2} more projects</p>
                  )}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Certifications</p>
                <div className="flex flex-wrap gap-1">
                  {student.certifications.slice(0, 2).map((cert, certIndex) => (
                    <Badge key={certIndex} variant="outline" className="text-xs">
                      <Award className="h-2 w-2 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                  {student.certifications.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{student.certifications.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                <Button variant="hero" size="sm" className="flex-1">
                  <MessageCircle className="h-4 w-4" />
                  Message
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                  Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Students
        </Button>
      </div>
    </div>
  );
};