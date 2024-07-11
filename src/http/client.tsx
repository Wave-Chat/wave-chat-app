"use client";

import apolloClient from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";


export function ApolloWrapper({ children }: Readonly<React.PropsWithChildren>) {
  return  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}