import { isMobile } from "react-device-detect"

import DefaultChatContainer from "@/components/shared/DefaultChatContainer"
import { Sidebar } from "@/components/shared/Sidebar"

export default function IndexPage() {
  return (
    <>
      <div className=" mx-auto h-[calc(100vh-50px-1rem)] py-4">
        <section className="grid mx-4 h-full grid-cols-12 gap-5">
          <div className="col-span-2  h-full">
            <Sidebar />
          </div>
          <div className="col-span-10 h-full">
            <DefaultChatContainer />
          </div>
        </section>
      </div>
    </>
  )
}
