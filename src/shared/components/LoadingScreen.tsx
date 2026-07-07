import { useMemo } from "react";
import Logo from "../../assets/operators-Logo.png";
import { useTheme } from "../context/ThemeContext";

const LoadingScreen = () => {
    const { isDarkMode } = useTheme();
    const heroBackground = useMemo(() => {
        return isDarkMode
            ? "rgba(249, 115, 22, 0.24)"
            : "rgba(251, 191, 36, 0.16)";
    }, [isDarkMode]);

    return (
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none"
            style={{ backgroundColor: heroBackground }}
        >
            <div className="flex flex-col items-center justify-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-40 w-40 animate-pulse drop-shadow-sm"
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
