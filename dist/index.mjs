import { jsx, jsxs } from 'react/jsx-runtime';
import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
import { useThemeColors, MaterialNotificationContainer } from '@gaddario98/react-native-ui';
import { AppProviders as AppProviders$1 } from '@gaddario98/react-providers';

const AppProviders = ({ children }) => {
    const theme = useThemeColors();
    return (jsx(AppProviders$1, { children: jsxs(ThemeProvider, { value: {
                fonts: DefaultTheme.fonts,
                colors: {
                    background: theme.background,
                    border: theme.primary,
                    primary: theme.primary,
                    text: theme.onBackground,
                    card: theme.background,
                    notification: theme.primary,
                },
                dark: true,
            }, children: [jsx(MaterialNotificationContainer, {}), children] }) }));
};

export { AppProviders };
//# sourceMappingURL=index.mjs.map
