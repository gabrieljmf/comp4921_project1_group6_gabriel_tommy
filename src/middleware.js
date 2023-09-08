// this applies next-auth to entire project
export { default } from "next-auth/middleware";

// this applies next-auth only to matching routes
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

export const config = { matcher: ["/landing"] };
