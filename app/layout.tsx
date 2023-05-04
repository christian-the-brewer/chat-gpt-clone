import Sidebar from "@component/components/SideBar"
import { Html } from "next/document"

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-scroll
          md:min-w-[20rem]">
            <Sidebar />
          </div>
          {/* Sidebar */}
          
        <div className="bg-[#343541] flex-1" >
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}
