import React, { useMemo } from "react";

/**
 * BackgroundPathsFixed — A fixed, full-viewport animated SVG path background.
 * White background with animated black curved lines that flow infinitely downward.
 * Uses dangerouslySetInnerHTML to bypass React's span-wrapping issue with SVG paths.
 */
export function BackgroundPathsFixed() {
    const svgContent = useMemo(() => {
        const pathsHtmlMobile: string[] = [];
        const pathsHtmlDesktop: string[] = [];
        const pathLength = 5000; // increased path length to cover entire viewport depth
        const segmentLength = 1000; // longer flowing segment
        const gapLength = 5000;
        
        // Generate Mobile Paths
        for (let i = 0; i < 25; i++) {
            const pos = 1;
            // Single, perfectly smooth S-curve
            const d = `M-${650 - i * 10 * pos} -${300 + i * 8} C-${200 - i * 12 * pos} 600, ${400 - i * 12 * pos} 1400, ${700 - i * 10 * pos} ${3000}`;
            const w = 0.5 + i * 0.04;
            const o = 0.1 + i * 0.04;
            const dur = 8 + (i * 3) % 7;
            const delay = -(i * 1.2);
            pathsHtmlMobile.push(`<path d="${d}" stroke="black" stroke-width="${w}" stroke-opacity="${o}" fill="none" class="bg-path-flow" style="animation-duration:${dur}s;animation-delay:${delay}s;stroke-dasharray:${segmentLength} ${gapLength}"/>`);
        }
        for (let i = 0; i < 25; i++) {
            const pos = -1;
            const d = `M-${650 - i * 10 * pos} -${300 + i * 8} C-${200 - i * 12 * pos} 600, ${400 - i * 12 * pos} 1400, ${700 - i * 10 * pos} ${3000}`;
            const w = 0.5 + i * 0.04;
            const o = 0.1 + i * 0.04;
            const dur = 8 + (i * 3) % 7;
            const delay = -(i * 1.2);
            pathsHtmlMobile.push(`<path d="${d}" stroke="black" stroke-width="${w}" stroke-opacity="${o}" fill="none" class="bg-path-flow" style="animation-duration:${dur}s;animation-delay:${delay}s;stroke-dasharray:${segmentLength} ${gapLength}"/>`);
        }

        // Generate Desktop Paths
        for (let i = 0; i < 25; i++) {
            const pos = 1;
            // Single, perfectly smooth S-curve
            const d = `M-${380 - i * 12 * pos} -${189 + i * 8} C-${100 - i * 12 * pos} 400, ${300 - i * 12 * pos} 900, ${600 - i * 12 * pos} ${1800}`;
            const w = 0.5 + i * 0.04;
            const o = 0.1 + i * 0.04;
            const dur = 8 + (i * 3) % 7;
            const delay = -(i * 1.2);
            pathsHtmlDesktop.push(`<path d="${d}" stroke="black" stroke-width="${w}" stroke-opacity="${o}" fill="none" class="bg-path-flow" style="animation-duration:${dur}s;animation-delay:${delay}s;stroke-dasharray:${segmentLength} ${gapLength}"/>`);
        }
        for (let i = 0; i < 25; i++) {
            const pos = -1;
            const d = `M-${380 - i * 12 * pos} -${189 + i * 8} C-${100 - i * 12 * pos} 400, ${300 - i * 12 * pos} 900, ${600 - i * 12 * pos} ${1800}`;
            const w = 0.5 + i * 0.04;
            const o = 0.1 + i * 0.04;
            const dur = 8 + (i * 3) % 7;
            const delay = -(i * 1.2);
            pathsHtmlDesktop.push(`<path d="${d}" stroke="black" stroke-width="${w}" stroke-opacity="${o}" fill="none" class="bg-path-flow" style="animation-duration:${dur}s;animation-delay:${delay}s;stroke-dasharray:${segmentLength} ${gapLength}"/>`);
        }
        
        const svgMobile = `<svg class="block sm:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="-400 -300 1400 3000" fill="none" style="position:absolute;top:0;left:0;width:100%;height:100%;mask-image:linear-gradient(to bottom, black 50%, transparent 100%);-webkit-mask-image:linear-gradient(to bottom, black 50%, transparent 100%);will-change:transform;transform:translateZ(0);backface-visibility:hidden;"><title>Background Paths Mobile</title>${pathsHtmlMobile.join("")}</svg>`;
        const svgDesktop = `<svg class="hidden sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="-400 -300 1400 1400" fill="none" style="position:absolute;top:0;left:0;width:100%;height:100%;mask-image:linear-gradient(to bottom, black 50%, transparent 100%);-webkit-mask-image:linear-gradient(to bottom, black 50%, transparent 100%);will-change:transform;transform:translateZ(0);backface-visibility:hidden;"><title>Background Paths Desktop</title>${pathsHtmlDesktop.join("")}</svg>`;

        return svgMobile + svgDesktop;
    }, []);

    return (
        <>
            <style>{`
                .bg-path-flow {
                    animation-name: bgPathInfinite;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    will-change: stroke-dashoffset;
                    transform: translateZ(0);
                    backface-visibility: hidden;
                }
                @keyframes bgPathInfinite {
                    0% {
                        stroke-dashoffset: 6000;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
            <div
                className="bg-gradient-to-b from-blue-50/60 via-white to-white dark:from-blue-900/10 dark:via-[#0a0a0a] dark:to-[#0a0a0a]"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                    contain: "strict",
                    willChange: "transform",
                    transform: "translateZ(0)",
                }}
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        </>
    );
}
