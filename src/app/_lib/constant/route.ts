import { Route } from "../types/Route.type";

export enum NavRoutes {
    HOME = '/',
    LOGIN = "/login",
    DASHBOARD = "/dashboard",
    USERS = "/user",
    RESPONDER = "/responder",
    ADMIN = "/admin"
}


export const Routes: Route[] = [
    {
        name: "Dashboard",
        routes: NavRoutes.DASHBOARD
    },
    {
        name: "User",
        routes: NavRoutes.USERS
    },
    {
        name: "Responder",
        routes: NavRoutes.RESPONDER
    }
]
