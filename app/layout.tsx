import Sidebar from "@component/components/SideBar"
import { getServerSession } from 'next-auth'
import { SessionProvider } from '@component/components/SessionProvider'
import './globals.css'
import { authOptions } from '@component/pages/api/auth/[...nextauth]'
import Login from '@component/components/Login'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const session = await getServerSession(authOptions)
  
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            
          
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
        )}
        </SessionProvider>
        </body>
    </html>
  )
}
