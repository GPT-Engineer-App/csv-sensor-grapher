import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  primary: {
    100: "#E3F2FD",
    200: "#BBDEFB",
    300: "#90CAF9",
    400: "#64B5F6",
    500: "#42A5F5",
    600: "#2196F3",
    700: "#1E88E5",
    800: "#1976D2",
    900: "#1565C0",
  },
  secondary: {
    100: "#FCE4EC",
    200: "#F8BBD0",
    300: "#F48FB1",
    400: "#F06292",
    500: "#EC407A",
    600: "#E91E63",
    700: "#D81B60",
    800: "#C2185B",
    900: "#AD1457",
  },
  accent: {
    100: "#FFF8E1",
    200: "#FFECB3",
    300: "#FFE082",
    400: "#FFD54F",
    500: "#FFCA28",
    600: "#FFC107",
    700: "#FFB300",
    800: "#FFA000",
    900: "#FF8F00",
  },
  neutral: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};

const theme = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        md: {
          h: "48px",
          fontSize: "lg",
          px: "24px",
        },
      },
      variants: {
        solid: {
          bg: "primary.600",
          color: "white",
          _hover: {
            bg: "primary.700",
          },
        },
        outline: {
          borderColor: "primary.600",
          color: "primary.600",
          _hover: {
            bg: "primary.100",
          },
        },
      },
    },
    Input: {
      sizes: {
        md: {
          field: {
            h: "48px",
            fontSize: "lg",
            px: "24px",
          },
        },
      },
      variants: {
        outline: {
          field: {
            borderColor: "primary.600",
            _hover: {
              borderColor: "primary.700",
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
