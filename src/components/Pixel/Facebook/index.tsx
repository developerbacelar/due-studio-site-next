import React from 'react'
import Script from 'next/script'

const FacebookPixel = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src="/facebook-pixel.js"
                onLoad={() => console.log('Facebook Pixel loaded!')}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    src="https://www.facebook.com/tr?id=979156676388455&ev=PageView&noscript=1"
                />
            </noscript>
        </>
    )
}

export default FacebookPixel
