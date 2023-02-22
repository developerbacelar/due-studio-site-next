import React from 'react'
import Script from 'next/script'

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                id="googleAnalytics"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-V13SF9CK3X`}
            />
            <Script
                id="analyticsGoogle"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-V13SF9CK3X');
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics
