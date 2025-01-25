import { motion } from 'framer-motion'
import Image from 'next/image'

interface TimelineEvent {
  date: string
  title: string
  subtitle: string
  description: string
  logo: string
  category: 'work' | 'education' | 'achievement'
}

const timelineEvents = {
  work: [
    {
      date: "Sep 2023 - Present",
      title: "One Inside",
      subtitle: "Software Engineer",
      description: `• Migrating our front-end setup to Solid.js, harnessing its flexibility and speed to create a better user experience.

• Working closely with a diverse team spread across different countries focusing on clear communication and understanding of each other's cultures to make sure our projects run smoothly.

• Mastering TypeScript, Handlebars, and SCSS to ensure our code is strong, flexible, and easy to maintain.`,
      logo: "/images/companies/vass.jpg",
      category: 'work' as const
    },
    {
      date: "Jul 2023 - Sep 2023",
      title: "One Inside",
      subtitle: "Front-End Developer Internship",
      description: "Gained practical experience in front-end development",
      logo: "/images/companies/vass.jpg",
      category: 'work' as const
    }
  ],
  education: [
    {
      date: "Feb 2024 - Present",
      title: "Zero To Mastery Academy",
      subtitle: "Software Engineer",
      description: "Advancing software engineering skills through comprehensive training",
      logo: "/images/companies/ztm.jpg",
      category: 'education' as const
    },
    {
      date: "Oct 2019 - Present",
      title: "Faculty of Computer Science and Engineering",
      subtitle: "Bachelor of Engineering",
      description: "Studying Information Sciences and Computer Engineering",
      logo: "/images/companies/finki.jpg",
      category: 'education' as const
    }
  ],
  achievements: [
    {
      date: "Oct 2023",
      title: "Hacktoberfest 2023",
      subtitle: "Open Source Contribution",
      description: `• Participated in 2023 hactoberfest and succeeded to create 4 pull request to complete this event
• A tree was planted with my name and also i get rewarded with a digital kit`,
      logo: "/images/companies/hacktoberfest.png",
      category: 'achievement' as const
    },
    {
      date: "Mar 2023 - Present",
      title: "Chingu",
      subtitle: "Web Developer",
      description: `• Applying agile methodologies to manage the project and ensure timely delivery.
• Regularly communicating with team members to discuss progress, identify issues, and brainstorm solutions.
• Participating in regular code reviews with which we are ensuring that our code base is up to day without errors`,
      logo: "/images/companies/chingu.jpg",
      category: 'achievement' as const
    },
    {
      date: "Feb 2023",
      title: "Learn It Global Hackathon",
      subtitle: "Software Engineer, Team Lead",
      description: `• We had challenges with integrating authentication and authorization system using spring security but at the end we successfully managed to do that
• We overcame the problem we had with hosting the application online(establishing the connection between back-end and database)
• Did code reviews to the code from the other team members ensuring good and consistent code
• Was leading a team of three other team members, was creating and managing tickets in Jira for staying up to date with our process`,
      logo: "/images/companies/learn-it.png",
      category: 'achievement' as const
    },
    {
      date: "Apr 2023",
      title: "Mega Hackathon 2023",
      subtitle: "Software Engineer, Team Lead",
      description: `• Overcame the challenge of integrating the front-end with the back-end by working collaboratively with my team members to connect React.js to Spring Boot
• Overcame the additional challenge of coordinating tasks and communications across different time zones through clear and proactive communication channels, ensuring efficient progress throughout the project
• Enhanced application performance by 10% through proactive module updates and consistent optimization`,
      logo: "/images/companies/mega-hackathon.png",
      category: 'achievement' as const
    }
  ]
}

const TimelineSection = ({ title, events }: { title: string, events: TimelineEvent[] }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">{title}</h3>
    <div className="relative">
      {events.map((event, index, array) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative flex gap-8 mb-8"
        >
          {index < array.length - 1 && (
            <div className="absolute left-[1.45rem] top-12 h-[calc(100%+2rem)] w-0.5 bg-gray-200 dark:bg-gray-700" />
          )}
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 overflow-hidden flex items-center justify-center
              ${event.category === 'work' ? 'border-blue-500' :
                event.category === 'education' ? 'border-green-500' :
                'border-yellow-500'
              }`}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={event.logo}
                alt={`${event.title} logo`}
                fill
                className="object-cover"
                sizes="32px"
                unoptimized
              />
            </div>
          </motion.div>

          <div className="flex-grow pb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
            <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
            <p className="text-indigo-600 dark:text-indigo-400">{event.subtitle}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-line">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)

export default function Timeline() {
  return (
    <div className="mt-8">      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="md:pr-4">
          <TimelineSection title="Work Experience" events={timelineEvents.work} />
        </div>
        <div className="md:pl-4">
          <TimelineSection title="Education" events={timelineEvents.education} />
        </div>
      </div>

      <div>
        <TimelineSection title="Additional Activities" events={timelineEvents.achievements} />
      </div>
    </div>
  )
} 