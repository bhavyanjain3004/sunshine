import HomeIcon from '@/icons/HomeIcon.png'
import LeadIcon from '@/icons/LeadIcon.png'
import SettingsIcon from '@/icons/SettingsIcon.png'
import { CallStatusEnum } from '@prisma/client'
import { Sparkle, Webcam } from 'lucide-react'
export const sidebarData = [
  {
    id: 1,
    title: 'Home',
    icon: HomeIcon,
    link: '/home',
  },
  {
    id: 2,
    title: 'Webinars',
    icon: Webcam,
    link: '/webinars',
  },
  {
    id: 3,
    title: 'Leads',
    icon: LeadIcon,
    link: '/lead',
  },
  {
    id: 4,
    title: 'Ai Agents',
    icon: Sparkle,
    link: '/ai-agents',
  },

  {
    id: 5,
    title: 'Settings',
    icon: SettingsIcon,
    link: '/settings',
  },
]
