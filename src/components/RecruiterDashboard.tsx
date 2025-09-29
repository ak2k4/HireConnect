import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  Clock, 
  Target,
  Plus,
  Eye,
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  MessageSquare,
  UserCheck,
  UserX,
  DollarSign,
  Award
} from "lucide-react";

export const RecruiterDashboard = () => {
  const [activeView, setActiveView] = useState("overview");

  const stats = [
    { label: "Active Jobs", value: "12", trend: "+2 this week", icon: Briefcase, color: "text-blue-500" },
    { label: "Total Applications", value: "347", trend: "+23% this month", icon: Users, color: "text-green-500" },
    { label: "Interviews Scheduled", value: "28", trend: "+15% this week", icon: Calendar, color: "text-purple-500" },
    { label: "Avg. Time to Hire", value: "21 days", trend: "-3 days", icon: Clock, color: "text-orange-500" }
  ];

  const jobPerformance = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      posted: "5 days ago",
      applications: 89,
      qualified: 23,
      interviewed: 8,
      offers: 2,
      views: 234,
      conversion: 38
    },
    {
      id: 2,
      title: "Data Scientist - ML",
      posted: "2 weeks ago",
      applications: 156,
      qualified: 41,
      interviewed: 15,
      offers: 3,
      views: 445,
      conversion: 35
    },
    {
      id: 3,
      title: "Product Manager",
      posted: "1 week ago",
      applications: 67,
      qualified: 18,
      interviewed: 6,
      offers: 1,
      views: 189,
      conversion: 35
    }
  ];

  const topCandidates = [
    {
      id: 1,
      name: "Sarah Chen",
      score: 95,
      university: "MIT",
      skills: ["React", "Python", "ML"],
      status: "Interview Scheduled",
      appliedFor: "Senior Frontend Engineer"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      score: 88,
      university: "Stanford",
      skills: ["Python", "TensorFlow", "SQL"],
      status: "Under Review",
      appliedFor: "Data Scientist - ML"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      score: 82,
      university: "UC Berkeley",
      skills: ["JavaScript", "Node.js", "Docker"],
      status: "New Application",
      appliedFor: "Senior Frontend Engineer"
    }
  ];

  const skillDemand = [
    { skill: "React", demand: 85, change: "+12%" },
    { skill: "Python", demand: 92, change: "+8%" },
    { skill: "Machine Learning", demand: 78, change: "+25%" },
    { skill: "AWS", demand: 73, change: "+15%" },
    { skill: "TypeScript", demand: 69, change: "+18%" }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
          <p className="text-muted-foreground">Manage your recruitment pipeline and analytics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button variant="hero">
            <Plus className="h-4 w-4" />
            Post New Job
          </Button>
        </div>
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
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs value={activeView} onValueChange={setActiveView} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="jobs">Job Management</TabsTrigger>
          <TabsTrigger value="candidates">Top Candidates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recruitment Funnel */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Recruitment Funnel (This Month)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Applications Received</span>
                    <span className="font-semibold">347</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Qualified Candidates</span>
                    <span className="font-semibold">82 (24%)</span>
                  </div>
                  <Progress value={24} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Interviews Conducted</span>
                    <span className="font-semibold">29 (8%)</span>
                  </div>
                  <Progress value={8} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Offers Extended</span>
                    <span className="font-semibold">6 (2%)</span>
                  </div>
                  <Progress value={2} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Hires Made</span>
                    <span className="font-semibold">4 (1%)</span>
                  </div>
                  <Progress value={1} className="h-2" />
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
                  <UserCheck className="h-4 w-4" />
                  Review Applications (23 pending)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4" />
                  Schedule Interviews (8 ready)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4" />
                  Send Messages (5 candidates)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="h-4 w-4" />
                  Extend Offers (2 approved)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4" />
                  View Analytics Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Job Performance</CardTitle>
              <CardDescription>Track how your job postings are performing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobPerformance.map((job) => (
                  <div key={job.id} className="p-4 border rounded-lg hover:shadow-card transition-smooth">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Activity className="h-4 w-4" />
                          Analytics
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{job.views}</p>
                        <p className="text-xs text-muted-foreground">Views</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{job.applications}</p>
                        <p className="text-xs text-muted-foreground">Applications</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-600">{job.qualified}</p>
                        <p className="text-xs text-muted-foreground">Qualified</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">{job.interviewed}</p>
                        <p className="text-xs text-muted-foreground">Interviewed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{job.offers}</p>
                        <p className="text-xs text-muted-foreground">Offers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant={job.conversion > 40 ? "default" : "secondary"}>
                        {job.conversion}% Conversion Rate
                      </Badge>
                      <Button variant="ghost" size="sm">
                        View Candidates
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="candidates" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Top-Ranked Candidates</CardTitle>
              <CardDescription>AI-ranked candidates based on job requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCandidates.map((candidate, index) => (
                  <div key={candidate.id} className="p-4 border rounded-lg hover:shadow-card transition-smooth">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.university}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={candidate.score >= 90 ? "default" : "secondary"}>
                          {candidate.score}% Match
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{candidate.status}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Applied for: {candidate.appliedFor}</p>
                        <div className="flex gap-1">
                          {candidate.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="hero" size="sm">
                          <UserCheck className="h-4 w-4" />
                          Shortlist
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Skill Demand Analytics */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Skill Demand Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillDemand.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.skill}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-green-600">{skill.change}</span>
                          <span className="text-sm font-semibold">{skill.demand}%</span>
                        </div>
                      </div>
                      <Progress value={skill.demand} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time to Hire Chart */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Time-to-Hire Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-card rounded-lg">
                      <p className="text-2xl font-bold text-primary">21</p>
                      <p className="text-sm text-muted-foreground">Avg. Days</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-card rounded-lg">
                      <p className="text-2xl font-bold text-green-600">15</p>
                      <p className="text-sm text-muted-foreground">Fastest Hire</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Application to Screen</span>
                      <span className="font-semibold">3 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Screen to Interview</span>
                      <span className="font-semibold">7 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Interview to Offer</span>
                      <span className="font-semibold">5 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Offer to Accept</span>
                      <span className="font-semibold">6 days</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};