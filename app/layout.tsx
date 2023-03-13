import './globals.css'
import React, { ReactNode } from 'react'
import { HeaderComponent } from '@/src/components/header/HeaderComponent'
import { FooterComponent } from '@/src/components/footer/FooterComponent'
import ReactQueryWrapper from '@/app/ReactQueryWrapper'

export const metadata = {
    title: 'Maroon shop',
    description: 'Тестовое задание',
}

// Интерфейс пропсов компонента
export interface IRootLayout {
    children: ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }: IRootLayout) => {
    return (
        <html>
            <ReactQueryWrapper>
                <body>
                    <HeaderComponent />
                    <main>{children}</main>
                    <FooterComponent />
                </body>
            </ReactQueryWrapper>
        </html>
    )
}

export default RootLayout
