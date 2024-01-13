import { type FC, type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = PropsWithChildren & {
    element?: HTMLElement
}

export const Portal: FC<PortalProps> = ({
    children,
    element = document.body
}) => {
    return createPortal(children, element)
}
