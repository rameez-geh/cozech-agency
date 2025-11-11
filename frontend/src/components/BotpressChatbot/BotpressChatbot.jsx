"use client";

import { useEffect } from "react";

const BotpressChatbot = () => {
    useEffect(() => {
        // Check if scripts already exist
        if (document.querySelector('script[src*="botpress"]')) {
            return;
        }

        // Load first script
        const script1 = document.createElement("script");
        script1.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
        script1.async = true;

        // Load second script only after first one loads
        script1.onload = () => {
            const script2 = document.createElement("script");
            script2.src = "https://files.bpcontent.cloud/2025/11/04/06/20251104063226-A5ENSWZX.js";
            script2.async = true;

            script2.onload = () => {
                if (window.botpress) {
                    window.botpress.on("webchat:initialized", () => {
                        window.botpress.config({
                            configuration: {
                                fontFamily: "Sora",
                            },
                        });
                    });
                }
            };

            document.body.appendChild(script2);
        };

        document.body.appendChild(script1);


        return () => {
            const scripts = document.querySelectorAll('script[src*="botpress"], script[src*="bpcontent"]');
            scripts.forEach((script) => script.remove());

            const botpressRoot = document.getElementById("bp-web-widget-container");
            if (botpressRoot) {
                botpressRoot.remove();
            }
        };
    }, []);

    return null;
};

export default BotpressChatbot;