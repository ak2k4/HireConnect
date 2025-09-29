import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  Star, 
  MapPin, 
  Clock, 
  Target,
  Award,
  BookOpen,
  ArrowRight,
  Activity,
  BarChart3
} from "lucide-react";

export const Dashboard = () => {
  const matchingJobs = [
    {
      id: 1,
      title: "Software Engineer - Frontend",
      company: "CitiBank",
      location: "New York, NY",
      match: 95,
      type: "Full-time",
      skills: ["React", "TypeScript", "AWS"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "CitiBank",
      location: "London, UK",
      match: 88,
      type: "Internship",
      skills: ["Python", "ML", "SQL"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      company: "Tech Innovators",
      location: "Remote",
      match: 82,
      type: "Full-time",
      skills: ["AWS", "Docker", "Kubernetes"],
      posted: "3 days ago"
    }
  ];

  const stats = [
    { label: "Profile Views", value: "47", trend: "+12%", icon: Users },
    { label: "Job Matches", value: "23", trend: "+8%", icon: Target },
    { label: "Applications", value: "12", trend: "+15%", icon: Briefcase },
    { label: "Interviews", value: "3", trend: "+50%", icon: Star }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-hero p-6 text-primary-foreground shadow-glow">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Alex!</h2>
          <p className="text-primary-foreground/90 mb-4">
            You have 5 new job matches and 2 interview invitations waiting for you.
          </p>
          <div className="flex gap-3">
            <Button variant="accent" size="lg" className="shadow-elegant">
              <Award className="h-4 w-4" />
              View Opportunities
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Target className="h-4 w-4" />
              Career Insights
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-lg"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend}
                  </p>
                </div>
                <div className="p-3 bg-primary-light rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommended Jobs */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                AI-Powered Job Matches
              </CardTitle>
              <CardDescription>
                Jobs matched using semantic analysis and your interests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {matchingJobs.map((job, index) => (
                <div key={job.id} className="p-4 border rounded-lg hover:shadow-card transition-smooth">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <span className="font-medium">{job.company}</span>
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant={job.match >= 90 ? "default" : "secondary"}
                          className={job.match >= 90 ? "bg-green-500" : ""}
                        >
                          {job.match}% Match
                        </Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.posted}
                      </p>
                    </div>
                  </div>
                  
                  {/* Match Fit Explanation */}
                  <div className="mb-3 p-2 bg-primary/5 rounded border-l-2 border-primary">
                    <p className="text-xs text-primary font-medium mb-1">Why this matches you:</p>
                    <p className="text-xs text-muted-foreground">
                      {job.match >= 90 ? "Strong skills alignment with React, TypeScript, and AWS experience" :
                       job.match >= 80 ? "Good technical fit with some skill overlap in key areas" :
                       "Moderate match with potential for growth in required technologies"}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Progress value={job.match} className="mb-3" />
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="hero">Apply Now</Button>
                    <Button size="sm" variant="outline">Learn More</Button>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                View All Matches
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Skill Gap Analysis & Career Insights */}
        <div className="space-y-4">
          {/* Skill Gap Analysis */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Skill Gap Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Required for Dream Jobs</span>
                  <Badge variant="secondary">3 skills</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">• GraphQL</span>
                    <Badge variant="outline" className="text-xs">High Priority</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">• Microservices</span>
                    <Badge variant="outline" className="text-xs">Medium</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">• System Design</span>
                    <Badge variant="outline" className="text-xs">High Priority</Badge>
                  </div>
                </div>
                <Button variant="premium" size="sm" className="w-full">
                  Get Learning Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Application Status Tracker */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Application Tracker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                  <span className="text-sm">CitiBank - SWE</span>
                  <Badge className="bg-green-500">Interview</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                  <span className="text-sm">Goldman Sachs - DS</span>
                  <Badge variant="secondary">Under Review</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-secondary/50 rounded">
                  <span className="text-sm">Microsoft - PM</span>
                  <Badge variant="outline">Applied</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View All Applications
              </Button>
            </CardContent>
          </Card>

          {/* Career Market Position */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Market Position
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">Top 5%</p>
                  <p className="text-sm text-muted-foreground">Among CS students</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Skill Score</span>
                    <span className="font-medium">92/100</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Experience Level</span>
                    <span className="font-medium">Advanced</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Completion */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Profile Strength
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Profile Completion</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">✓ Basic Info</span>
                    <span className="text-green-600">Complete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">✓ Skills & Projects</span>
                    <span className="text-green-600">Complete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">• Portfolio</span>
                    <span className="text-orange-600">Missing</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">• Certifications</span>
                    <span className="text-orange-600">Incomplete</span>
                  </div>
                </div>
                <Button size="sm" variant="premium" className="w-full mt-3">
                  Complete Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4" />
                Network with Alumni
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Star className="h-4 w-4" />
                Skill Assessment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Award className="h-4 w-4" />
                View Certificates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};