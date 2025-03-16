'use client'
import { useLynxModel } from "@afx/models/engine/registry.model"
import BaseLayout from "./main.layout"
import React, { PropsWithChildren } from "react"

export default function IndexBaseLayout(props: PropsWithChildren): React.JSX.Element {
  return useLynxModel(() => <BaseLayout {...props} />, () => [])
}