import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Edit, 
  Camera,
  MapPin, 
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  ExternalLink,
  Plus,
  X,
  Save,
  Upload,
  Star,
  TrendingUp
} from "lucide-react";

export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    location: "Boston, MA",
    university: "Massachusetts Institute of Technology",
    degree: "Master of Science in Computer Science",
    graduationYear: "2024",
    gpa: "3.8",
    bio: "Passionate computer science student with expertise in machine learning and full-stack development. Seeking opportunities in AI/ML and fintech to leverage my technical skills and contribute to innovative solutions.",
    skills: ["React", "Python", "Machine Learning", "Node.js", "AWS", "TypeScript", "Docker", "MongoDB"],
    interests: ["Artificial Intelligence", "FinTech", "Cloud Computing", "Data Science"],
    portfolioLink: "https://alexjohnson.dev",
    education: [
      {
        degree: "Master of Science in Computer Science", 
        university: "Massachusetts Institute of Technology",
        startYear: "2022",
        endYear: "2024",
        gpa: "3.8",
        coursework: ["Machine Learning", "Distributed Systems", "Computer Vision", "Natural Language Processing"]
      },
      {
        degree: "Bachelor of Science in Computer Science",
        university: "University of California, Berkeley", 
        startYear: "2018",
        endYear: "2022",
        gpa: "3.7",
        coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"]
      }
    ],
    experience: [
      {
        title: "Software Engineering Intern",
        company: "TechCorp Inc",
        duration: "Summer 2023",
        description: "Developed and maintained React-based web applications, improving user engagement by 25%"
      },
      {
        title: "Research Assistant",
        company: "MIT AI Lab",
        duration: "Jan 2023 - Present",
        description: "Working on natural language processing research, published 2 papers in ML conferences"
      }
    ],
    projects: [
      {
        name: "AI-Powered Trading Bot",
        description: "Built a machine learning model for stock price prediction using LSTM networks with 85% accuracy on historical data",
        technologies: ["Python", "TensorFlow", "pandas", "React", "AWS Lambda"],
        link: "https://github.com/alexj/trading-bot",
        image: "/project-trading.jpg",
        status: "Completed",
        duration: "3 months"
      },
      {
        name: "Campus Event Management System", 
        description: "Full-stack web application for managing university events with real-time notifications and user authentication",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Docker"],
        link: "https://github.com/alexj/campus-events",
        image: "/project-events.jpg", 
        status: "In Progress",
        duration: "4 months"
      },
      {
        name: "Smart Resume Parser",
        description: "NLP-powered tool to extract and categorize information from resumes with 92% accuracy",
        technologies: ["Python", "spaCy", "FastAPI", "React", "PostgreSQL"],
        link: "https://github.com/alexj/resume-parser",
        image: "/project-parser.jpg",
        status: "Completed", 
        duration: "2 months"
      }
    ],
    certifications: [
      {
        name: "AWS Solutions Architect Associate",
        issuer: "Amazon Web Services",
        date: "March 2024",
        verified: true,
        credentialId: "AWS-SA-2024-001"
      },
      {
        name: "Google Cloud Professional Machine Learning Engineer", 
        issuer: "Google Cloud",
        date: "January 2024",
        verified: true,
        credentialId: "GCP-ML-2024-002"
      },
      {
        name: "MongoDB Certified Developer",
        issuer: "MongoDB Inc.",
        date: "November 2023", 
        verified: true,
        credentialId: "MDB-DEV-2023-003"
      }
    ]
  });

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const getProfileCompletion = () => {
    let score = 0;
    if (profile.bio) score += 15;
    if (profile.skills.length >= 5) score += 20;
    if (profile.education.length > 0) score += 15;
    if (profile.experience.length > 0) score += 15;
    if (profile.projects.length > 0) score += 10;
    if (profile.certifications.length > 0) score += 10;
    if (profile.interests.length > 0) score += 5;
    if (profile.portfolioLink) score += 10;
    return score;
  };
  
  const profileCompletion = getProfileCompletion();
  
  const getMissingItems = () => {
    const missing = [];
    if (!profile.portfolioLink) missing.push("Portfolio Link");
    if (profile.certifications.length === 0) missing.push("Certifications");
    if (profile.interests.length < 3) missing.push("Career Interests");
    if (profile.projects.length < 2) missing.push("Projects");
    return missing;
  };
  const profileViews = 47;
  const profileRanking = 95;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Profile Header */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-muted-foreground">{profile.degree}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <GraduationCap className="h-3 w-3" />
                  <span>{profile.university}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Stats */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-card rounded-lg text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Profile Strength</span>
                </div>
                <p className="text-2xl font-bold">{profileCompletion}%</p>
                <Progress value={profileCompletion} className="mt-2" />
                {getMissingItems().length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs text-orange-600">Missing: {getMissingItems().join(", ")}</p>
                  </div>
                )}
              </div>
              <div className="p-4 bg-gradient-card rounded-lg text-center">
                <div className="flex items-center justify-center mb-2">
                  <User className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Profile Views</span>
                </div>
                <p className="text-2xl font-bold">{profileViews}</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <div className="p-4 bg-gradient-card rounded-lg text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Match Score</span>
                </div>
                <p className="text-2xl font-bold">{profileRanking}%</p>
                <p className="text-xs text-muted-foreground">Top 5% of students</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Button 
                variant={isEditing ? "default" : "hero"} 
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
              <Button variant="outline">
                <Upload className="h-4 w-4" />
                Upload Resume
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* About */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  rows={4}
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-muted-foreground">{profile.bio}</p>
              )}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>
                Add your technical skills and expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="relative group"
                  >
                    <Code className="h-3 w-3 mr-1" />
                    {skill}
                    {isEditing && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeSkill(skill)}
                      >
                        <X className="h-2 w-2" />
                      </Button>
                    )}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button onClick={addSkill}>
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Education Timeline */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Education Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {profile.education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-primary-light rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.university}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>GPA: {edu.gpa}/4.0</span>
                        <span>{edu.startYear} - {edu.endYear}</span>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-1">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-1">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge key={courseIndex} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Career Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Work Experience</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4" />
                  Add Experience
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="p-2 bg-primary-light rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Certifications</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4" />
                  Add Certification
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    </div>
                    <Badge variant={cert.verified ? "default" : "secondary"}>
                      {cert.verified ? "Verified" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Projects</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4" />
                  Add Project
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {profile.projects.map((project, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3 hover:shadow-card transition-smooth">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.duration}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input value={profile.email} disabled />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input value={profile.phone} />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input value={profile.location} />
                </div>
                <div>
                  <label className="text-sm font-medium">Graduation Year</label>
                  <Input value={profile.graduationYear} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};