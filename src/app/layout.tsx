"use client"

import {Provider} from "react-redux";
import store from '../redux/store'
import style from './layout.module.css';
import './globals.css';
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";

export default function RootLayout({
    children,
 }: {
    children: React.ReactNode
}) {

    return (
        <html lang="es">
            <body>
                <Provider store={store}>
                    <Header/>
                    <SideMenu/>
                    <main className={style.main}>
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )

}