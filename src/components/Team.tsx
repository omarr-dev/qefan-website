'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TeamMember {
  name: string;
  roles: string[];
}

interface TeamProps {
  translations: {
    team: {
      title: string;
      subtitle: string;
      member1: TeamMember;
      member2: TeamMember;
      member3: TeamMember;
      member4: TeamMember;
      member5: TeamMember;
      member6: TeamMember;
      member7: TeamMember;
      member8: TeamMember;
    };
  };
}

// Get initials from name
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function Team({ translations }: TeamProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const members = [
    translations.team.member1,
    translations.team.member2,
    translations.team.member3,
    translations.team.member4,
    translations.team.member5,
    translations.team.member6,
    translations.team.member7,
    translations.team.member8,
  ];

  return (
    <section id="team" className="relative py-20 md:py-32 bg-[var(--background-secondary)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
      <div className="absolute -top-32 left-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            {translations.team.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/30 mx-auto mb-4 rounded-full"
          />
          <p className="text-lg text-[var(--foreground-muted)]">
            {translations.team.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group"
            >
              <div className="card rounded-2xl p-6 text-center h-full relative overflow-hidden">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/0 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Professional avatar with initials */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute inset-1 rounded-full bg-[var(--card)] border-2 border-[var(--accent)]/20 group-hover:border-[var(--accent)]/40 transition-colors flex items-center justify-center">
                      <span className="text-xl font-bold text-[var(--accent)]">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {member.name}
                  </h3>

                  <div className="space-y-1">
                    {member.roles.map((role, roleIndex) => (
                      <p
                        key={roleIndex}
                        className="text-sm text-[var(--foreground-muted)]"
                      >
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

