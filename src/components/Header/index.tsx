import ToggleTheme from "../ToggleTheme";

const Header = () => {
    return (
        <header className="py-8 px-6 shadow-lg bg-dark_text_and_light_elements dark:bg-dark_elements">
            <div className="flex items-center justify-between max-w-[1400px] m-auto">
                <h1 className="font-800 text-2xl text-light_text dark:text-bg_light_mode">Where in the world?</h1>
                <ToggleTheme />
            </div>
        </header>
    )
};
export default Header;