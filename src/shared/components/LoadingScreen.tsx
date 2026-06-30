import Logo from '../../assets/operators-Logo.png'


const LoadingScreen = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-linear-to-r from-yellow-500 to-indigo-600">
            <div className="flex flex-col items-center justify-center">
                <img src={Logo} alt="Logo" className="h-40 w-40 animate-pulse" />
            </div>
        </div>
    )
}

export default LoadingScreen
