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
          <Sidebar />
          {/* Sidebar */}
          
        <div className="bg-[#343541] flex-1" >
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}
