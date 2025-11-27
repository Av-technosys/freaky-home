import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const ButtonBg = ({children, className }: {children: React.ReactNode, className?: string}) => {
  return (
    <Button  className={cn('bg-linear-to-r from-[#FFC107] to-[#FF5722] hover:opacity-90 rounded-full text-white ', className)}>{children}</Button>
  )
}

export default ButtonBg
