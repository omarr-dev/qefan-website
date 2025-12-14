'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

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
    <section id="team" className="py-20 md:py-32 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="card rounded-2xl p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

