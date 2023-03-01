import Script from 'next/script'
import React from 'react'

export default function GoogleAnalyticsScript() {
    return (
        <>
            <Script
                id="googleAnalytics"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-PHN9ZVZ042`}
            />
            <Script id="due_analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-PHN9ZVZ042');
                    `,
                }}
            />
        </>
    )
}