
import { lazy } from "react";

const UserLayout = lazy(() => import('@afx/views/users/index.layout'))

export default function UserRoute() {
  return <UserLayout />
}
