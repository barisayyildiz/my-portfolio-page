import { useState } from "react"
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";
import {
  Github,
  Linkedin,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  FileText,
} from "lucide-react";
import { workExperiences, education, skills, certificates } from "@/constants/index";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-center px-4 mx-auto max-w-6xl">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors hover:text-foreground/80 ${
                activeSection === "about"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`transition-colors hover:text-foreground/80 ${
                activeSection === "experience"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`transition-colors hover:text-foreground/80 ${
                activeSection === "skills"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className={`transition-colors hover:text-foreground/80 ${
                activeSection === "certificates"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              Certificates
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <h1 className="text-5xl">Hello</h1>
                <span className="text-5xl">👋</span>
              </div>
              <p className="text-2xl mb-4">
                My name is <strong>Baris Ayyildiz</strong>
              </p>
              <p className="text-xl text-muted-foreground mb-4">
                I am an enthusiastic software engineer living in Cottbus, Germany.
                <br/>
                Currently, I am studying Cyber Security.
              </p>
              <p className="text-lg text-muted-foreground">
                Feel free to contact with me
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/barisayyildiz/", "_blank")
                }
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2"
                onClick={() =>
                  window.open("https://github.com/barisayyildiz", "_blank")
                }
              >
                <Github className="h-5 w-5" />
                GitHub
              </Button>
              <Button
                size="lg"
                className="flex items-center gap-2"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Baris_Ayyildiz_CV.pdf";
                  link.download = "/Baris_Ayyildiz_CV.pdf";
                  link.click();
                }}
              >
                <FileText className="h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Work Experience Column */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="h-5 w-5" />
                <h2>Work Experience</h2>
              </div>
              <div className="space-y-8">
                {workExperiences.map((exp, index) => (
                  <div key={index} className="border-b border-border/30 pb-6 last:border-b-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-medium">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                      </div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="h-5 w-5" />
                <h2>Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-b border-border/30 pb-6 last:border-b-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-medium">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.school} • {edu.location}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                          {edu.period}
                        </div>
                        {edu.gpa && (
                          <div className="text-xs text-muted-foreground">
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6" />
            <h2>Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1.5 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Certificates Section */}
        <section id="certificates" className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6" />
            <h2>Certifications</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 cursor-pointer">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link} // link to certificate
                target="_blank"
                rel="noopener noreferrer"
                className="hover:shadow-lg transition-shadow rounded-md"
              >
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
