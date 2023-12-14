import React from 'react'

function TestimonialCard({ children, className = '', ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg p-8 pt-6 shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.25)] ${className}`} {...props}>
      {children}
    </div>
  )
}

function Header({
  title,
  subtitle,
  className = '',
  children,
  ...props
}: {
  title: string
  subtitle: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`} {...props}>
      {children}
      <div className="">
        <div className="text-[0.8125rem] font-medium leading-[0.8125rem]">{title}</div>
        <div className="text-[0.6875rem] font-medium leading-[0.6875rem] opacity-50">{subtitle}</div>
      </div>
    </div>
  )
}

function Icon({ src, alt, className = '', ...props }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt="" className={`h-7 w-7 rounded-full ${className}`} {...props} />
}

function Body({ children, className = '', ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mt-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

function Title({ children, className = '', ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-xl font-bold leading-normal ${className}`} {...props}>
      {children}
    </div>
  )
}

function Text({ children, className = '', ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-[0.8125rem] font-medium leading-[1.125rem] opacity-70 ${className}`} {...props}>
      {children}
    </div>
  )
}

TestimonialCard.Header = Header
TestimonialCard.Body = Body
TestimonialCard.Icon = Icon
TestimonialCard.Title = Title
TestimonialCard.Text = Text

export default TestimonialCard
