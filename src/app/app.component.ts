import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen = false;

  profile = {
    name: 'Krishna Pada Kar',
    email: 'krishnapadakarkarrah@gmail.com',
    phone: '8016199839',
    location: 'WhiteField, Bengaluru, 560066',
    role: 'Full-stack Java Software Engineer',
    linkedin: 'https://www.linkedin.com/in/krishna-pada-kar-647223195/',
    github: 'https://github.com/kpk2714',
    resume: 'https://drive.google.com/file/d/1CD9lCHgTeRPDRvygsuMvGENzQjVIIenl/view?usp=sharing',
    image: 'kk.jpg'
  };

  skillGroups = [
    { name: 'Languages', icon: '01', skills: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
    { name: 'Frameworks', icon: '02', skills: ['Spring Boot', 'Angular', 'Tailwind CSS'] },
    { name: 'Architecture', icon: '03', skills: ['Microservices'] },
    { name: 'Tools', icon: '04', skills: [] },
    { name: 'Testing Tool', icon: '05', skills: ['Junit5', 'Mockito'] },
    { name: 'CI/CD Tool', icon: '05', skills: ['GitHub Actions'] },
    { name: 'Deployment AWS Services', icon: '06', skills: ['AWS'] },
    { name: 'Messaging System', icon: '07', skills: ['Apache Kafka'] }
  ];

  awsServices = ['IAM', 'EC2', 'EBS', 'S3', 'RDS', 'Lambda Function', 'CloudWatch', 'SQS', 'SNS', 'Route53'];

  projects = [
    { number: '01', title: 'Multi Step Form', subtitle: 'Angular Template-Driven Form with Query Management', description: 'A full-stack student portal that brings personal, educational, image, and document forms together with secure query management.', stack: 'Angular / Spring Boot / MySQL / STS / VS Code', link: 'https://drive.google.com/file/d/1CczV4u5vpE-EqRrKERlb34cU9MIz6ObL/view', github: 'https://github.com/kpk2714/multi-step-form', secondaryLink: 'https://github.com/kpk2714/multi-step-form-backend', image: 'multi-step-form.png', tone: 'mint', details: ['Template-driven student forms for personal and educational data', 'Email notifications for query submissions and replies', 'Token service, route guards, and 30-minute auto logout'] },
    { number: '02', title: 'SYN Portal', subtitle: 'Professional Registration and Login System', description: 'A responsive registration and authentication platform with guided validation, secure account recovery, and dependent dropdown workflows.', stack: 'Angular / Tailwind CSS / Spring Boot / MySQL', link: 'https://65d81cb2f98ebb898c584470--portal-syn.netlify.app/home', github: 'https://github.com/kpk2714', image: 'syn-portal.png', tone: 'peach', details: ['Email verification with Java Mail Sender and mobile OTP with Twilio', 'Dependent dropdowns, custom tooltips, and robust form validation', 'BCrypt password encoding, search, contact, and password recovery flows'] },
    { number: '03', title: 'India State & University API', subtitle: 'Reusable REST API for dependent dropdowns', description: 'A REST API that exposes India states, districts, post offices, universities, institutions, degrees, and departments for frontend integrations.', stack: 'Spring Boot / REST API / Java', link: 'https://github.com/kpk2714/state-district-api', github: 'https://github.com/kpk2714/state-district-api', image: '', tone: 'blue', details: ['State, district, post office, and PIN code endpoints', 'University, institution, degree, and department lookups', 'Designed for dependent-dropdown integrations in frontend projects'] }
  ];

  hideMissingImage(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
