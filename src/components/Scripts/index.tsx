import Script from 'next/script'

export default function GoogleAnalyticsScript() {
    return (
        <>
            <Script id="due_analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                `,
                }}
            />
        </>
    )
}