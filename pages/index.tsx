import React from "react";

import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

import styles from "../styles/Home.module.css";
import { Connected, Disconnected } from "../components";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../components/NavBar"), { ssr: false });

export default function Home() {
  const modalState = useWalletModal();
  const { wallet, connect, connected } = useWallet();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    React.useCallback(
      (event) => {
        if (event.defaultPrevented) return;

        if (!wallet) return modalState.setVisible(true);

        connect().catch(() => {});
      },
      [wallet, connect, modalState]
    );

  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="description" content="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />

          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
}
