"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { isMobile } from "react-device-detect"

import { Sidebar } from "@/components/shared/Sidebar"
import WorkspaceChatContainer from "@/components/shared/WorkspaceChatContainer"

export default function WorkspaceChat() {
  const { slug } = useParams()

  const [workspace, setWorkspace] = useState(null)
  const [loading, setLoading] = useState(true)

  return (
    <div className="w-screen h-screen overflow-hidden bg-sidebar flex">
      {!isMobile && <Sidebar />}
      <WorkspaceChatContainer loading={loading} workspace={workspace} />
    </div>
  )
}
