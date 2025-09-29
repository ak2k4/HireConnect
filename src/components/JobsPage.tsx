import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Building, 
  Star,
  Bookmark,
  TrendingUp,
  Users,
  ChevronRight
} from "lucide-react";

export const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "CitiBank",
      location: "New York, NY",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$120k - $160k",
      posted: "2 days ago",
      applicants: 47,
      match: 95,
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      description: "Join our digital transformation team to build next-generation banking solutions...",
      featured: true
    },
    {
      id: 2,
      title: "Data Scientist - ML Engineer",
      company: "CitiBank",
      location: "London, UK",
      type: "Full-time",
      experience: "2-4 years", 
      salary: "£80k - £110k",
      posted: "1 week ago",
      applicants: 23,
      match: 88,
      skills: ["Python", "TensorFlow", "SQL", "Apache Spark"],
      description: "Develop AI/ML models for risk assessment and customer insights...",
      featured: true
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      company: "Tech Innovators Inc",
      location: "Remote",
      type: "Contract",
      experience: "5+ years",
      salary: "$150k - $200k",
      posted: "3 days ago",
      applicants: 31,
      match: 82,
      skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
      description: "Design and implement scalable cloud infrastructure solutions...",
      featured: false
    },
    {
      id: 4,
      title: "Product Manager - FinTech",
      company: "StartupFlow",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3-6 years",
      salary: "$130k - $170k",
      posted: "5 days ago",
      applicants: 19,
      match: 76,
      skills: ["Product Strategy", "Agile", "Data Analysis", "Fintech"],
      description: "Lead product development for innovative financial technology solutions...",
      featured: false
    },
    {
      id: 5,
      title: "Backend Developer Intern",
      company: "CitiBank",
      location: "Singapore",
      type: "Internship",
      experience: "0-1 years",
      salary: "$4k - $6k/month",
      posted: "1 day ago",
      applicants: 89,
      match: 71,
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      description: "Summer internship program focused on backend system development...",
      featured: true
    }
  ];

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Search & Filters */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Job Opportunities</h2>
          <p className="text-muted-foreground">
            {filteredJobs.length} jobs found • Sorted by AI Match Score
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4" />
            Sort by Match
          </Button>
          <Button variant="outline" size="sm">
            <Clock className="h-4 w-4" />
            Recent First
          </Button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job, index) => (
          <Card 
            key={job.id} 
            className={`shadow-card hover:shadow-elegant transition-smooth ${
              job.featured ? 'border-primary/20 bg-gradient-card' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    {job.featured && (
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="outline">{job.experience}</Badge>
                    <Badge variant="outline">{job.salary}</Badge>
                  </div>
                </div>

                <div className="text-right space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={job.match >= 90 ? "default" : job.match >= 80 ? "secondary" : "outline"}
                      className={job.match >= 90 ? "bg-green-500" : ""}
                    >
                      {job.match}% Match
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{job.applicants} applicants</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="hero" size="sm">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Save Job
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Jobs
        </Button>
      </div>
    </div>
  );
};