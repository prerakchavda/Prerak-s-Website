import { Experience, Project, Skill, CertificationItem } from './types';

export const RESUME_CONTEXT = `
Prerak Chavda
Email: prerakchavda@gmail.com | Location: Chicago Area
Links: linkedin.com/in/prerak-chavda, github.com/prerakchavda

Summary: Cybersecurity Analyst and Systems Administrator.
Core Focus: Blue Team Operations, Cloud Infrastructure (Azure), and Identity Management.

Biography:
- Started journey at College of DuPage (COD). Highly socially involved: Activities Board Team, Student Life, Book Club, Phi Theta Kappa (PTK).
- Transferred to Western Governors University (WGU) for BS in Cybersecurity.
- Career Path: Started at Hospital Systems Health Systems (HSHS) as ServiceNow Admin, then moved to Realnets as Junior SysAdmin.
- Philosophy: Always looking to expand skill set and solve complex problems.

Experience:
1. IT Help Desk / Junior SysAdmin at Realnets (Feb 2025 - Present)
   - SentinelOne EDR Management.
   - Hybrid AD/Entra ID Administration.
   - Network Hardening (VLANs, Firewalls).
   - Veeam Backup & Recovery.

2. ServiceNow Admin at Hospital Systems Health Systems (Jan 2024 - July 2024)
   - Automating clinical workflows.
   - Supporting EPIC infrastructure.
   - RBAC implementation.

Projects:
- Azure Secure Infrastructure Lab: Defense-in-depth architecture with NSGs, Load Balancers, and NGINX.

Certifications (with Impact):
- SSCP: Technical application of security policies.
- Security+: Foundation of threat analysis and risk mitigation.
- CySA+: Threat hunting and behavioral analytics.
- PenTest+: Offensive mindset for better defense.
- Network+: Understanding packet flow and topology.
- AZ-900: Cloud governance fundamentals.
- ITIL 4: Service management best practices.
`;

export const SKILLS: Skill[] = [
  // Cloud (Canopy)
  { name: 'Azure', category: 'cloud', level: 3, description: 'Infrastructure & Networking' },
  { name: 'Entra ID', category: 'cloud', level: 3, description: 'Identity Management' },
  { name: 'Intune', category: 'cloud', level: 3, description: 'MDM & Compliance' },
  { name: 'Microsoft 365', category: 'cloud', level: 2, description: 'Admin Center' },
  
  // Security (Branches)
  { name: 'SentinelOne', category: 'security', level: 3, description: 'EDR & Threat Hunting' },
  { name: 'SIEM Tools', category: 'security', level: 2, description: 'Log Analysis' },
  { name: 'Vulnerability Mgmt', category: 'security', level: 2, description: 'Scanning & Remediation' },
  { name: 'WireGuard', category: 'security', level: 2, description: 'VPN Configuration' },

  // Network/Ops (Trunk)
  { name: 'ServiceNow', category: 'network', level: 3, description: 'ITSM & Workflows' },
  { name: 'Veeam', category: 'network', level: 2, description: 'Backup & Recovery' },
  { name: 'Firewalls', category: 'network', level: 3, description: 'Rule Management' },
  { name: 'Linux', category: 'general', level: 2, description: 'CLI & Hardening' },

  // General/Roots
  { name: 'Active Directory', category: 'general', level: 3, description: 'Hybrid Identity' },
  { name: 'PowerShell', category: 'general', level: 2, description: 'Automation Scripts' },
  { name: 'Python', category: 'general', level: 1, description: 'Basic Scripting' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Realnets',
    role: 'IT Help Desk / Junior SysAdmin',
    period: 'Feb 2025 – Present',
    description: [
      'Hardened endpoints using SentinelOne EDR & Intune policies.',
      'Managed Hybrid Identity: Active Directory GPOs & Entra ID Sync.',
      'Executed Incident Response protocols for malware alerts.',
      'Optimized Network Security via VLANs and Firewall rules.'
    ]
  },
  {
    company: 'Hospital Systems Health Systems',
    role: 'ServiceNow Admin',
    period: 'Jan 2024 – July 2024',
    description: [
      'Automated ITSM workflows to reduce ticket resolution time.',
      'Maintained uptime for critical EPIC/Clinical infrastructure.',
      'Enforced RBAC and Identity Governance standards.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Azure Secure Infra Lab',
    tech: ['Azure', 'NSG', 'Load Balancer', 'WAF'],
    description: 'Built a Defense-in-Depth cloud network. Implemented strict Network Security Groups (NSGs) to sanitize traffic reaching the NGINX backend, ensuring only legitimate requests pass through the Load Balancer.',
    link: 'https://github.com/prerakchavda/Azure-Cloud-Infra-Project'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { 
    name: "SSCP", 
    issuer: "ISC2",
    date: "2024",
    impact: "Validates technical ability to implement, monitor, and administer IT infrastructure using information security policies.",
    color: "bg-emerald-500"
  },
  { 
    name: "Security+", 
    issuer: "CompTIA",
    date: "2023",
    impact: "Established core knowledge in risk management and incident response, serving as the foundation for my security career.",
    color: "bg-rose-500"
  },
  { 
    name: "CySA+", 
    issuer: "CompTIA",
    date: "2024",
    impact: "Advanced skills in threat hunting, behavioral analytics, and using SIEM tools to detect anomalies.",
    color: "bg-indigo-500"
  },
  { 
    name: "PenTest+", 
    issuer: "CompTIA",
    date: "2024",
    impact: "Provided an offensive perspective ('Red Team') to better understand how to harden systems against attacks.",
    color: "bg-amber-500"
  },
  { 
    name: "Network+", 
    issuer: "CompTIA",
    date: "2023",
    impact: "Deep understanding of TCP/IP, subnets, and routing protocols essential for firewall configuration.",
    color: "bg-sky-500"
  },
  { 
    name: "AZ-900", 
    issuer: "Microsoft",
    date: "2023",
    impact: "Fundamental knowledge of Azure architectural components and cloud governance.",
    color: "bg-blue-600"
  },
  { 
    name: "ITIL 4", 
    issuer: "Axelos",
    date: "2023",
    impact: "Ensures my technical work aligns with business value and service management best practices.",
    color: "bg-purple-500"
  }
];