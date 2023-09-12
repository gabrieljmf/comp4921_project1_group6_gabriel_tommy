// this applies next-auth to entire project
// import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
export { default } from "next-auth/middleware";

// this applies next-auth only to matching routes
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

// export default withAuth(
//   function middleware(request) {
//     // 'withAuth' augments your 'Request' with the user's token.
//     console.log(request.nextUrl.pathname);
//     console.log(request.nextauth.token);
//   },
// {
//   callbacks: {
//     authorized: ({ token }) => token?.role === "admin",
//   },
// }
// );

export const config = { matcher: ["/admin"] };
