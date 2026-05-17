import identity from '../../data/identity.json';
import projects from '../../data/projects.json';
import skills from '../../data/skills.json';
import experience from '../../data/experience.json';
import education from '../../data/education.json';
import achievements from '../../data/achievements.json';

/**
 * Terminal Command Registry.
 */

const line = (text, type = 'output') => ({ text, type });
const header = (text) => ({ text, type: 'header' });
const muted = (text) => ({ text, type: 'muted' });
const error = (text) => ({ text, type: 'error' });
const success = (text) => ({ text, type: 'success' });
const empty = () => ({ text: '', type: 'empty' });
const link = (text) => ({ text, type: 'link' });

const username = identity.name.split(' ')[0].toLowerCase();

const COMMANDS = {
  help: {
    desc: 'Show available commands',
    handler: () => {
      const lines = [
        header('╭─ Available Commands ───────────────────────'),
        empty(),
      ];
      Object.entries(COMMANDS)
        .filter(([, cmd]) => !cmd.hidden)
        .forEach(([name, cmd]) => {
          lines.push(line(`│ ${name.padEnd(16)} ${cmd.desc}`));
        });
      lines.push(empty());
      lines.push(header('╰────────────────────────────────────────────'));
      lines.push(muted('  Tip: Use ↑↓ for history, Tab for autocomplete'));
      return lines;
    },
  },

  about: {
    desc: 'About me',
    handler: () => [
      header(`╭─ About ────────────────────────────────────`),
      empty(),
      line(`│ Name      ${identity.name}`),
      line(`│ Role      ${identity.title}`),
      line(`│ Location  ${identity.location}`),
      line(`│ Status    ${identity.available ? '🟢 Available for work' : '🔴 Not available'}`),
      line(`│ Open to   ${identity.openTo.join(', ')}`),
      empty(),
      line(`│ ${identity.bio}`),
      empty(),
      header('╰────────────────────────────────────────────'),
    ],
  },

  skills: {
    desc: 'My tech stack',
    handler: () => {
      const lines = [header('╭─ Tech Stack ───────────────────────────────'), empty()];
      Object.entries(skills).forEach(([category, items]) => {
        lines.push(success(`│ ▸ ${category}`));
        lines.push(line(`│   ${items.join('  ·  ')}`));
        lines.push(empty());
      });
      lines.push(header('╰────────────────────────────────────────────'));
      return lines;
    },
  },

  projects: {
    desc: 'View my projects',
    handler: () => {
      const lines = [header('╭─ Projects ─────────────────────────────────'), empty()];
      projects.forEach((p) => {
        lines.push(success(`│ ${p.featured ? '★' : '▸'} ${p.name}${p.featured ? '  [Featured]' : ''}`));
        lines.push(line(`│   ${p.tagline}`));
        lines.push(muted(`│   ${p.description}`));
        lines.push(line(`│   Stack: ${p.stack.join(', ')}`));
        if (p.github) lines.push(link(`│   GitHub: ${p.github}`));
        if (p.live) lines.push(link(`│   Live:   ${p.live}`));
        lines.push(empty());
      });
      lines.push(header('╰────────────────────────────────────────────'));
      return lines;
    },
  },

  experience: {
    desc: 'Work history',
    handler: () => {
      const lines = [header('╭─ Experience ───────────────────────────────'), empty()];
      experience.forEach((e) => {
        lines.push(success(`│ ▸ ${e.role} @ ${e.company}`));
        lines.push(muted(`│   ${e.duration}  ·  ${e.location || ''}`));
        e.bullets.forEach((b) => {
          lines.push(line(`│   • ${b}`));
        });
        lines.push(empty());
      });
      lines.push(header('╰────────────────────────────────────────────'));
      return lines;
    },
  },

  education: {
    desc: 'Academic background',
    handler: () => {
      const lines = [header('╭─ Education ────────────────────────────────'), empty()];
      education.forEach((e) => {
        lines.push(success(`│ ▸ ${e.degree}`));
        lines.push(line(`│   ${e.university}`));
        lines.push(muted(`│   ${e.years}${e.cgpa ? `  ·  CGPA: ${e.cgpa}` : ''}`));
        lines.push(empty());
      });
      lines.push(header('╰────────────────────────────────────────────'));
      return lines;
    },
  },

  achievements: {
    desc: 'Awards & honors',
    handler: () => {
      const lines = [header('╭─ Achievements ─────────────────────────────'), empty()];
      if (achievements.length) {
        achievements.forEach((a) => {
          lines.push(line(`│  🏆 ${a}`));
        });
        lines.push(empty());
      } else {
        lines.push(muted('│  No achievements listed.'));
        lines.push(empty());
      }
      lines.push(header('╰────────────────────────────────────────────'));
      return lines;
    },
  },

  contact: {
    desc: 'How to reach me',
    handler: () => {
      const lines = [header('╭─ Contact ──────────────────────────────────'), empty()];
      if (identity.email) lines.push(link(`│ ✉  ${identity.email}`));
      if (identity.github) lines.push(link(`│ ⌂  ${identity.github}`));
      if (identity.linkedin) lines.push(link(`│ in ${identity.linkedin}`));
      if (identity.website) lines.push(link(`│ ◎  ${identity.website}`));
      if (identity.calendar) lines.push(link(`│ 📅 ${identity.calendar}`));
      lines.push(empty());
      lines.push(header('╰────────────────────────────────────────────'));
      return lines;
    },
  },

  social: {
    desc: 'Social links',
    handler: () => {
      const lines = [header('╭─ Social ───────────────────────────────────'), empty()];
      if (identity.github) lines.push(link(`│ GitHub    ${identity.github}`));
      if (identity.linkedin) lines.push(link(`│ LinkedIn  ${identity.linkedin}`));
      if (identity.email) lines.push(link(`│ Email     ${identity.email}`));
      if (identity.website) lines.push(link(`│ Website   ${identity.website}`));
      if (identity.twitter) lines.push(link(`│ Twitter   ${identity.twitter}`));
      if (identity.blog) lines.push(link(`│ Blog      ${identity.blog}`));
      lines.push(empty());
      lines.push(header('╰────────────────────────────────────────────'));
      return lines;
    },
  },

  resume: {
    desc: 'Open my resume',
    handler: () => {
      if (identity.resume) {
        window.open(identity.resume, '_blank');
        return [success('  Opening resume in a new tab...')];
      }
      return [
        muted('  📄 Resume coming soon...'),
        muted('  In the meantime, check out my LinkedIn or email me!'),
      ];
    },
  },

  clear: {
    desc: 'Clear terminal',
    handler: () => 'CLEAR',
  },

  whoami: {
    desc: 'Who am I?',
    handler: () => [
      empty(),
      header(`  ┌──────────────────────────────────────────`),
      success(`  │  ${identity.name}`),
      line(`  │  ${identity.title}`),
      muted(`  │  ${identity.location}`),
      header(`  └──────────────────────────────────────────`),
      empty(),
    ],
  },

  date: {
    desc: 'Current date & time',
    handler: () => [line(`  ${new Date().toString()}`)],
  },

  echo: {
    desc: 'Echo text back',
    handler: (args) => {
      const text = args.join(' ');
      return text ? [line(`  ${text}`)] : [muted('  Usage: echo <text>')];
    },
  },

  cat: {
    desc: 'Read a file',
    handler: (args) => {
      const file = args[0];
      if (file === 'bio.txt') {
        return [
          header(`  ╭─ bio.txt ────────────────────────────────`),
          empty(),
          line(`  │  ${identity.bio}`),
          empty(),
          header(`  ╰──────────────────────────────────────────`),
        ];
      }
      if (!file) return [error('  Usage: cat <filename>')];
      return [error(`  cat: ${file}: No such file or directory`)];
    },
  },

  ls: {
    desc: 'List files',
    handler: () => [
      line('  about.txt     projects/     skills.txt'),
      line('  contact.txt   experience/   bio.txt'),
    ],
  },

  pwd: {
    desc: 'Print working directory',
    handler: () => [line(`  /home/${username}/portfolio`)],
  },

  sudo: {
    desc: '🤫',
    hidden: true,
    handler: (args) => {
      if (args.join(' ') === 'hire-me') {
        return [
          empty(),
          success('  ┌─ ACCESS GRANTED ─────────────────────────'),
          empty(),
          line(   '  │  Password accepted: ∞ passion + ☕ code'),
          line(   '  │'),
          header( '  │  > Deploying offer letter...'),
          header( '  │  > Target: ashreddy06b@gmail.com'),
          success('  │  > Status: Awaiting your email 😉'),
          line(   '  │'),
          success('  │  Let\'s build something extraordinary.'),
          empty(),
          success('  └──────────────────────────────────────────'),
          empty(),
        ];
      }
      return [error('  sudo: command not found. Try: sudo hire-me')];
    },
  },
};

export function executeCommand(input) {
  const trimmed = input.trim();
  if (!trimmed) return [];

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  const command = COMMANDS[cmd];
  if (command) {
    return command.handler(args);
  }

  return [
    error(`  command not found: ${cmd}`),
    muted(`  Type 'help' to see available commands.`),
  ];
}

export function getCommandNames() {
  return Object.keys(COMMANDS).filter((name) => !COMMANDS[name].hidden);
}

export function getAllCommandNames() {
  return Object.keys(COMMANDS);
}

export default COMMANDS;
