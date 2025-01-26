  export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-[#171717]">
        <div 
          className="absolute inset-0 opacity-50 dark:opacity-30"
          style={{ filter: 'blur(100px)' }}
        >
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-purple-100 dark:bg-purple-900/30" />
          <div className="absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-blue-100 dark:bg-blue-900/30" />
        </div>
        <div className="absolute inset-0 bg-white/90 dark:bg-[#171717]/90" />
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, gray 1px, transparent 1px),
                             linear-gradient(to bottom, gray 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </div>
  )
}