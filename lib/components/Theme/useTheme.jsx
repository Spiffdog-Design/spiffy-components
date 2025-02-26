import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useTheme = ({ theme }) => {
    const context = useContext(ThemeContext);
    const Provider = context.Provider;

    return { ...context, theme: theme || context.theme, Provider };
};

export default useTheme;
