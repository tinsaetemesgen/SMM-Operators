import { useMemo } from "react";
import Logo from "../../assets/operators-Logo.png";

const LoadingScreen = () => {
    const heroBackground = useMemo(() => {
        // Matches the dark hero styling used across pages (e.g., Contact)
        // and provides a deterministic backdrop even on route transitions.
        return "radial-gradient(1200px circle at 20% 0%, rgba(245, 158, 11, 0.22), rgba(2, 6, 23, 0) 55%), linear-gradient(to bottom, rgb(15 23 42), rgb(2 6 23))";
    }, []);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            style={{ background: heroBackground }}
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
