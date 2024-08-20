import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Head from "next/head";
import { createStore, currentUserActions } from "../redux";
import { EnhancedStore } from "@reduxjs/toolkit";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { muiCustomTheme } from "../../theme";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [store, setStore] = useState<EnhancedStore | null>(null);
  React.useEffect(() => {
    const uri = "/graphql";
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri,
    });

    const store = createStore({ epicDependencies: { client } });
    setStore(store);
  }, []);

  React.useEffect(() => {
    if (!store) return;
    const state = store.getState();
    if (!state.currentUser.user) {
      store.dispatch(currentUserActions.fetch());
    }
  }, [store]);

  if (!store) return <>{"Loading..."}</>;

  return (
    <>
      <Head>
        <title>{"Coolmovies Frontend"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={muiCustomTheme}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
