import { Suspense } from 'react';
import "./styles/index.scss";
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/about">About</Link>
            <Link to="/">Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;