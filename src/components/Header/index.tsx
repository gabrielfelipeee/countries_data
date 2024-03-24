import ToggleTheme from "../ToggleTheme";

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-dark_text_and_light_elements dark:bg-dark_elements py-8 px-6 shadow-lg">
            <h1 className="font-800 text-2xl text-light_text dark:text-bg_light_mode">Where in the world?</h1>
            <ToggleTheme />
        </header>
    )
};
export default Header;