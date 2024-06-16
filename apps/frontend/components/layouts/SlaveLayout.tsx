'use client';

import React from 'react'
import ReduxProvider from '../provider/redux-provider';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from '../provider/theme-provider';

function SlaveLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <ReduxProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextTopLoader
                        color='#1F6FEB'
                        initialPosition={0.08}
                        crawlSpeed={200}
                        height={3}
                        crawl={true}
                        showSpinner={false}
                        easing='ease'
                        speed={200}
                        shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                    />

                    {children}
                </ThemeProvider>
            </ReduxProvider>
        </>
    );
}

export default SlaveLayout
