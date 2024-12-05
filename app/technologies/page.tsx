import { Code2, Database, Cloud, Globe, Shield, Cpu } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your specific business needs."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure designed for optimal performance and reliability."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics solutions."
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications that deliver exceptional user experiences."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure."
  },
  {
    icon: Cpu,
    title: "IT Consulting",
    description: "Strategic technology consulting to help you make informed decisions and optimize operations."
  }
];

const testimonials = [
  {
    content: "Qualitude Technologies transformed our digital infrastructure, delivering a solution that exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Inc."
  },
  {
    content: "Their expertise in cloud solutions helped us scale our operations efficiently while reducing costs.",
    author: "Michael Chen",
    role: "Director of Operations",
    company: "CloudScale Solutions"
  },
  {
    content: "The cybersecurity implementation by Qualitude has given us peace of mind in protecting our sensitive data.",
    author: "Emma Rodriguez",
    role: "Security Manager",
    company: "SecureNet Systems"
  }
];

export default function TechnologiesPage() {
  return (
    <div className="pt-16">
      <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Technology Solutions"
            description="Empowering businesses with innovative technology solutions that drive growth and efficiency."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Client Success Stories"
            description="Hear from our clients about their experience working with Qualitude Technologies."
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}