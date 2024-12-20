import { motion } from 'framer-motion'
import { FiBriefcase, FiBook, FiAward, FiCode } from 'react-icons/fi'

interface TimelineEvent {
  date: string
  title: string
  subtitle: string
  description: string
  icon: typeof FiBriefcase | typeof FiBook | typeof FiAward | typeof FiCode
  category: 'work' | 'education' | 'achievement'
}

const timelineEvents = {
  work: [
    {
      date: "Sep 2023 - Present",
      title: "One Inside",
      subtitle: "Software Engineer",
      description: "Working on Solid.js migration, TypeScript development, and international team collaboration",
      icon: FiBriefcase,
      category: 'work' as const
    },
    {
      date: "Jul 2023 - Sep 2023",
      title: "One Inside",
      subtitle: "Front-End Developer Internship",
      description: "Gained practical experience in front-end development",
      icon: FiBriefcase,
      category: 'work' as const
    }
  ],
  education: [
    {
      date: "Feb 2024 - Present",
      title: "Zero To Mastery Academy",
      subtitle: "Software Engineer",
      description: "Advancing software engineering skills through comprehensive training",
      icon: FiBook,
      category: 'education' as const
    },
    {
      date: "Oct 2019 - Present",
      title: "Faculty of Computer Science and Engineering",
      subtitle: "Bachelor of Engineering",
      description: "Studying Information Sciences and Computer Engineering",
      icon: FiBook,
      category: 'education' as const
    }
  ],
  achievements: [
    {
      date: "Oct 2023",
      title: "Hacktoberfest 2023",
      subtitle: "Open Source Contribution",
      description: "Successfully completed 4 pull requests and earned digital recognition",
      icon: FiCode,
      category: 'achievement' as const
    },
    {
      date: "Apr 2023",
      title: "Mega Hackathon 2023",
      subtitle: "NextBook Project",
      description: "Led team development of NextBook, improving application performance by 10%",
      icon: FiAward,
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
            whileHover={{ scale: 1.2 }}
            className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 flex items-center justify-center
              ${event.category === 'work' ? 'border-blue-500' :
                event.category === 'education' ? 'border-green-500' :
                'border-yellow-500'
              }`}
          >
            <event.icon className={`text-xl
              ${event.category === 'work' ? 'text-blue-500' :
                event.category === 'education' ? 'text-green-500' :
                'text-yellow-500'
              }`}
            />
          </motion.div>

          <div className="flex-grow pb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
            <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
            <p className="text-indigo-600 dark:text-indigo-400">{event.subtitle}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
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