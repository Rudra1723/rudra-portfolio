'use client'

import { useState, useEffect } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Download, Send, Code, Database, Cloud, Wrench, Globe, Layers, CheckCircle, ArrowRight, Moon, Sun, Terminal, Zap, Filter, Eye, Star, GitBranch, Users, TrendingUp, Award, Coffee } from 'lucide-react'
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [typewriterText, setTypewriterText] = useState('')
  const [skillFilter, setSkillFilter] = useState('all')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const roles = [
    'Full Stack Developer',
    'Java Developer', 
    'MERN Stack Developer',
    'Spring Boot Developer',
    'Software Engineer'
  ]

  // Typewriter effect
  useEffect(() => {
    let currentRole = 0
    let currentChar = 0
    let isDeleting = false
    
    const typeWriter = () => {
      const current = roles[currentRole]
      
      if (isDeleting) {
        setTypewriterText(current.substring(0, currentChar - 1))
        currentChar--
      } else {
        setTypewriterText(current.substring(0, currentChar + 1))
        currentChar++
      }
      
      if (!isDeleting && currentChar === current.length) {
        setTimeout(() => isDeleting = true, 2000)
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false
        currentRole = (currentRole + 1) % roles.length
      }
      
      setTimeout(typeWriter, isDeleting ? 50 : 100)
    }
    
    typeWriter()
  }, [])

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Java", level: 90, color: "bg-orange-500" },
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "TypeScript", level: 82, color: "bg-blue-600" },
        { name: "C++", level: 75, color: "bg-purple-500" }
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "React", level: 90, color: "bg-cyan-500" },
        { name: "Angular", level: 80, color: "bg-red-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Bootstrap", level: 85, color: "bg-purple-600" }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Spring Boot", level: 88, color: "bg-green-500" },
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express", level: 82, color: "bg-gray-600" },
        { name: "Hibernate", level: 80, color: "bg-brown-500" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "AWS", level: 78, color: "bg-orange-600" },
        { name: "Docker", level: 75, color: "bg-blue-600" },
        { name: "Kubernetes", level: 70, color: "bg-blue-700" },
        { name: "CI/CD", level: 72, color: "bg-green-600" }
      ]
    }
  ]

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Atmiya Developers",
      location: "India",
      duration: "May 2024 - Dec 2024",
      type: "current",
      achievements: [
        { text: "Developed GPS-based check-in feature with Google Maps SDK", impact: "100% location accuracy" },
        { text: "Built offline-first caching mechanism with SQLite", impact: "99.9% uptime" },
        { text: "Integrated biometric authentication", impact: "60% faster login" },
        { text: "Implemented real-time notifications with FCM", impact: "95% delivery rate" }
      ],
      technologies: ["React", "Node.js", "SQLite", "Firebase", "Google Maps API"]
    },
    {
      title: "Software Development Intern",
      company: "Dyulabs Pvt. Ltd.",
      location: "India", 
      duration: "Dec 2023 - Apr 2024",
      type: "past",
      achievements: [
        { text: "Designed employee time tracking module", impact: "200+ employees" },
        { text: "Built dynamic billing system with PDF export", impact: "10% efficiency gain" },
        { text: "Refactored legacy JDBC to Hibernate ORM", impact: "Zero SQL injections" },
        { text: "Achieved comprehensive test coverage", impact: "95% code coverage" }
      ],
      technologies: ["Spring Boot", "Hibernate", "JUnit", "Bootstrap", "MySQL"]
    }
  ]

  const projects = [
    {
      title: "GreenHarvest: Digital Bridge for Farmers",
      description: "Role-based desktop application streamlining organic farming operations with crop certification and B2C sales",
      technologies: ["Java", "Swing GUI", "MySQL", "SQL"],
      github: "https://github.com/Rudra1723",
      category: "desktop",
      status: "completed",
      features: [
        "Multi-role user management system",
        "Real-time crop certification tracking", 
        "Integrated B2C marketplace",
        "Advanced reporting dashboard"
      ],
      metrics: {
        users: "500+",
        transactions: "1000+",
        uptime: "99.8%"
      }
    },
    {
      title: "Weather Forecasting Web Application",
      description: "Full-stack MERN application with JWT authentication delivering real-time weather data",
      technologies: ["React.js", "Node.js", "MongoDB", "Bootstrap", "Redis"],
      github: "https://github.com/Rudra1723",
      demo: "#",
      category: "web",
      status: "completed",
      features: [
        "OpenWeatherMap API integration",
        "Redis caching for performance",
        "Responsive Chart.js visualizations",
        "JWT-based authentication"
      ],
      metrics: {
        cities: "500+",
        requests: "10K+",
        response: "<200ms"
      }
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat platform with WebSocket integration and message encryption",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com/Rudra1723",
      demo: "#",
      category: "web",
      status: "in-progress",
      features: [
        "Real-time messaging with Socket.io",
        "End-to-end message encryption",
        "File sharing capabilities",
        "Group chat functionality"
      ],
      metrics: {
        users: "100+",
        messages: "5K+",
        latency: "<50ms"
      }
    }
  ]

  const filteredProjects = skillFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === skillFilter)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-50 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Terminal className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Rudra.dev</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-blue-600"
                />
                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 text-center lg:text-left">
              {/* Availability Status */}
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Open to Full-time Opportunities | Dec 2026
              </div>

              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Rudra Patel</span>
                </h1>
                
                <div className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium h-12 flex items-center">
                  <span className="mr-2">I'm a</span>
                  <span className="text-blue-600 dark:text-blue-400 font-mono">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                  Transforming ideas into <span className="font-semibold text-blue-600 dark:text-blue-400">scalable, secure applications</span> with modern technologies and best practices.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 p-3 transition-all duration-300"
                    asChild
                  >
                    <a href="https://linkedin.com/in/rudrapatel369" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 hover:border-gray-900 hover:text-gray-900 dark:hover:border-white dark:hover:text-white p-3 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/Rudra1723" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Code Coverage</div>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-10 animate-pulse"></div>
                <Image
                  src="/profile.jpg"
                  alt="Rudra Patel - Full Stack Developer"
                  width={350}
                  height={350}
                  className="relative rounded-full border-4 border-white dark:border-slate-700 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                  <Coffee className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> currently pursuing my Master's in Information Systems at Northeastern University. With hands-on experience in building scalable web applications and mobile solutions, I specialize in modern technologies like React, Spring Boot, and cloud platforms.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey in software development has been driven by a desire to create innovative, impactful solutions that solve real-world problems. I'm particularly interested in building secure, high-performance applications and am actively seeking opportunities at top tech companies like <span className="font-semibold text-green-600 dark:text-green-400">Amazon</span>, <span className="font-semibold text-red-600 dark:text-red-400">Google</span>, and other industry leaders.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                    Problem Solver
                  </Badge>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50">
                    Team Player
                  </Badge>
                  <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50">
                    Quick Learner
                  </Badge>
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50">
                    Innovation Focused
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <Code className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Full Stack Development</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">End-to-end application development</p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <Cloud className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud & DevOps</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Scalable cloud solutions</p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
                  <Database className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Database Design</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Efficient data modeling</p>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                  <Zap className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Optimized applications</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A comprehensive toolkit of modern technologies and frameworks I use to build exceptional software solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 overflow-hidden group">
                  <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 group-hover:from-blue-100 group-hover:to-cyan-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-cyan-900/30 transition-all duration-300">
                    <CardTitle className="flex items-center gap-3 text-lg text-gray-900 dark:text-white">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                      exp.type === 'current' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                    }`}>
                      {exp.type === 'current' ? (
                        <Zap className="h-8 w-8 text-white" />
                      ) : (
                        <Award className="h-8 w-8 text-white" />
                      )}
                    </div>
                    
                    <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-700">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                              {exp.company} • {exp.location}
                            </CardDescription>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`self-start sm:self-center ${
                              exp.type === 'current' 
                                ? 'border-green-200 text-green-700 dark:border-green-700 dark:text-green-400' 
                                : 'border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-400'
                            }`}
                          >
                            {exp.duration}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                              <div className="flex-1">
                                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement.text}</span>
                                <div className="mt-1">
                                  <Badge variant="secondary" className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    {achievement.impact}
                                  </Badge>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A showcase of my recent work, demonstrating expertise in full-stack development and modern technologies.
              </p>
            </div>

            {/* Project Filter */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2 p-1 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                <Button
                  variant={skillFilter === 'all' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSkillFilter('all')}
                  className={skillFilter === 'all' ? 'bg-blue-600 text-white' : ''}
                >
                  All Projects
                </Button>
                <Button
                  variant={skillFilter === 'web' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSkillFilter('web')}
                  className={skillFilter === 'web' ? 'bg-blue-600 text-white' : ''}
                >
                  Web Apps
                </Button>
                <Button
                  variant={skillFilter === 'desktop' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSkillFilter('desktop')}
                  className={skillFilter === 'desktop' ? 'bg-blue-600 text-white' : ''}
                >
                  Desktop Apps
                </Button>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group bg-white dark:bg-slate-800 hover:-translate-y-2">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {project.category === 'web' ? <Globe /> : <Code />}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={`${
                        project.status === 'completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {project.status === 'completed' ? 'Completed' : 'In Progress'}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Project Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white group-hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button 
                          size="sm" 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white group-hover:scale-105 transition-all duration-300" 
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Eye className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Build Something Amazing</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Ready to discuss your next project or explore opportunities? I'm always excited to connect with fellow developers, recruiters, and innovators.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                        <p className="text-gray-600 dark:text-gray-400">patel.rudraa@northeastern.edu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">(617) 238-8377</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                        <p className="text-gray-600 dark:text-gray-400">Boston, MA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Connect on Social</h4>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href="https://linkedin.com/in/rudrapatel369" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a href="https://github.com/Rudra1723" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="shadow-xl border-0 bg-white dark:bg-slate-700 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Send a Message</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Rudra.dev</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Full Stack Developer passionate about creating innovative solutions and building the future of technology.
            </p>
            <Separator className="my-8 bg-gray-700" />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Rudra Patel. Crafted with ❤️ and lots of ☕
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/rudrapatel369" 
                  className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Rudra1723" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:patel.rudraa@northeastern.edu" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
