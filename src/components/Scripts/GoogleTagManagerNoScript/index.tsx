import React from "react";

function GoogleTagManagerNoScript() {
    return (
        <>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-5CPQ6NJ"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
        </>
    )
};

export default GoogleTagManagerNoScript;