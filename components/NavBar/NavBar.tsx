import { HStack, Spacer } from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import styles from "../../styles/Home.module.css";

function NavBar() {
  if (typeof window === "undefined") return null;

  return (
    <HStack width="full" padding={4}>
      <Spacer />

      <WalletMultiButton className={styles["wallet-adapter-button-trigger"]} />
    </HStack>
  );
}

export { NavBar };
export default NavBar;
