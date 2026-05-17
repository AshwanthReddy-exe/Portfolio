# Data Files — Schema Reference

All content is driven by JSON files in this folder. Edit them to update your portfolio — no code changes needed.

---

## identity.json
```json
{
  "name": "Your Full Name",
  "title": "Your Role/Title",
  "location": "City, Country",
  "bio": "2-3 sentence bio",
  "available": true,
  "openTo": ["Remote", "Freelance", "Full-time"],
  "email": "you@email.com",
  "github": "https://github.com/...",
  "linkedin": "https://linkedin.com/in/...",
  "website": "yourdomain.dev",
  "resume": "https://drive.google.com/... or null",
  "calendar": "https://cal.com/... or null",
  "twitter": "https://x.com/... or null",
  "blog": "https://yourblog.com or null"
}
```

---

## projects.json
Array of project objects. Add a new object to show a new project card.
```json
{
  "name": "Project Name",
  "tagline": "One-line description",
  "description": "2-3 sentence detailed description",
  "stack": ["Tech1", "Tech2", "Tech3"],
  "github": "https://github.com/...",
  "live": "https://demo-url.com or null",
  "featured": false
}
```

---

## experience.json
Array of role objects. Most recent first.
```json
{
  "company": "Company Name",
  "location": "Location (or Remote)",
  "role": "Your Title",
  "duration": "Start – End",
  "bullets": [
    "Achievement or responsibility #1",
    "Achievement or responsibility #2"
  ]
}
```

---

## skills.json
Object with category keys, each mapping to an array of skill strings.
```json
{
  "Languages": ["Java", "Python"],
  "Frontend": ["React", "Angular"],
  "Backend": ["Spring Boot"],
  "AI/ML": ["PyTorch"],
  "Databases": ["PostgreSQL"],
  "DevOps & Cloud": ["Docker", "AWS"]
}
```

---

## education.json
Array of education entries.
```json
{
  "degree": "B.E. Computer Science",
  "university": "University Name",
  "location": "City, Country",
  "cgpa": "9.0/10",
  "years": "2023 – 2027"
}
```

---

## certifications.json
Array of certification objects. Starts empty — add entries to show the section.
```json
{
  "title": "AWS Certified Solutions Architect",
  "issuer": "Amazon Web Services",
  "date": "Jan 2025",
  "link": "https://verify-link.com or null"
}
```

---

## achievements.json
Simple array of achievement strings.
```json
[
  "Winner — Some Hackathon",
  "Published research paper at XYZ"
]
```
