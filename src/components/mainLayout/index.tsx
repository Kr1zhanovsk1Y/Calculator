import { Box, useTheme, useMediaQuery } from "@mui/material";
import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "98vw",
        height: "100%",
        overflow: "hidden",
        px: { xs: 1.5, sm: 2 },
        py: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
      <Box
        sx={{
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "150%",
          height: "100%",
          backgroundColor: "#818cf8",
          filter: isMobile ? "blur(250px)" : "blur(550px)",
          zIndex: -10,
        }}
      />
      <Box
        sx={{
          pointerEvents: "none",
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          backgroundColor: "#f78c8cff",
          filter: isMobile ? "blur(250px)" : "blur(550px)",
          zIndex: -10,
        }}
      />
    </Box>
  );
};
