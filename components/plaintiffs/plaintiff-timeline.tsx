interface PlaintiffTimelineProps {
  plaintiffId: string
  timeline: any[]
}

export function PlaintiffTimeline({ plaintiffId, timeline }: PlaintiffTimelineProps) {
  return (
    <div className="space-y-4">
      {timeline.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="relative flex flex-col items-center">
            <div className="absolute h-full w-px bg-muted-foreground/20 left-1/2 -translate-x-1/2 top-6"></div>
            <div className="rounded-full h-5 w-5 bg-primary flex items-center justify-center z-10">
              <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
            </div>
          </div>
          <div className="flex-1 pb-4">
            <div className="text-sm font-medium">{item.date}</div>
            <p className="mt-1">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

