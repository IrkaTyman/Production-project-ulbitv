import "./styles/index.scss";
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="contentPage">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;