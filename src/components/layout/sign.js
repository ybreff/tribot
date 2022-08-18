import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'

import bg_image from "../../assets/images/login_bg.png"
import pie_chart from "../../assets/images/icons/pie-chart.png"
import calendar from "../../assets/images/icons/calendar.png"
import bar_chart from "../../assets/images/icons/bars-graphic.png"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SignLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
          <div className="h-screen flex">
            <div className="hidden lg:block relative w-0 flex-1">
              <h2 className="m-32 text-7xl font-medium text-gray-900 uppercase absolute z-10 text-center">Sistema de gestión tributaria</h2>  
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={bg_image.src}
              />
              <div className="absolute inset-x-48 bottom-20 h-52 z-10 flex items-stretch w-full space-x-12">
              <img className="py-4" src={bar_chart.src} />    
              <img className="py-4" src={pie_chart.src} />    
              <img className="py-4" src={calendar.src} />    
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24  overflow-auto">
              {children}
            </div>
          </div>
        </>
      )
    }