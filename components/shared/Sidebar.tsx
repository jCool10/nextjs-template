import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"
import { Plus } from "lucide-react"

import { Button } from "../ui/button"
import { Card, CardHeader } from "../ui/card"
import ActiveWorkspaces from "../workspaces/ActiveWorkspaces"

export function Sidebar() {
  return (
    <div className="col-span-2 border h-full p-2 rounded-2xl ">
      <div className="flex flex-col gap-2 h-full">
        <div className="flex gap-x-2 items-center justify-between">
          {/* {(!user || user?.role !== "default") && ( */}
          <Button
            // onClick={showNewWsModal}
            className="m-auto w-full h-11 gap-x-2 py-1 px-2.5 rounded-xl bg-secondary text-primary justify-center items-center hover:bg-opacity-80 hover:text-secondary transition-all duration-300"
          >
            <Plus size={18} weight="bold" />
            <p className="text-sidebar text-sm font-semibold">New Workspace</p>
          </Button>
          {/* )} */}
        </div>

        <ActiveWorkspaces />
      </div>
    </div>
  )
}

export function SidebarMobileHeader() {
  return <></>
}
