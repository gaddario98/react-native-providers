import {
  DefaultTheme as NavLightTheme,
  ThemeProvider,
} from "@react-navigation/native";
import {
  MaterialNotificationContainer,
  useThemeColors,
} from "@gaddario98/react-native-ui";
import { AppProviders as BaseAppProvider } from "@gaddario98/react-providers";
import { PropsWithChildren } from "react";

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useThemeColors();

  return (
    <BaseAppProvider>
      <ThemeProvider
        value={{
          fonts: NavLightTheme.fonts,
          colors: {
            background: theme.background,
            border: theme.primary,
            primary: theme.primary,
            text: theme.onBackground,
            card: theme.background,
            notification: theme.primary,
          },
          dark: true,
        }}
      >
        <MaterialNotificationContainer />
        {children}
      </ThemeProvider>
    </BaseAppProvider>
  );
};
