import React, { type PropsWithChildren, type ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

type ErrorBoundaryProps = PropsWithChildren

type ErrorBoundaryState = {
    hasError: boolean
}

export class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error: Error) {
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    render () {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError/>
                </Suspense>
            )
        }

        return children
    }
}