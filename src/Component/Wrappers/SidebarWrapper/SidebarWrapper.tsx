import * as React from 'react'
import { Col, Row } from 'react-bootstrap'

interface SidebarWrapperProps {
    children?: React.ReactNode
}

export function SidebarWrapper({ children }: SidebarWrapperProps) {
    return (
        <Row>
            {children}
        </Row>

    )
}
SidebarWrapper.SidebarCol = SidebarCol
SidebarWrapper.ContentCol = ContentCol


function SidebarCol({ children }: SidebarWrapperProps) {
    return (
        <Col md='12' lg="3" style={{ borderRight: 'solid 1px #ccc', maxWidth: 200 }}>
            {children}
        </Col>
    )
}
function ContentCol({ children }: SidebarWrapperProps) {
    return (
        <Col>
            {children}
        </Col>
    )
}
