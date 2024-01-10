import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import { createRoot } from 'react-dom/client'

import 'shared/config/i18n/i18n'
import 'app/styles/index.scss'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>
)
