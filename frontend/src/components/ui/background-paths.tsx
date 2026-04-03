import React, { useMemo } from "react";

/**
 * BackgroundPathsFixed — A fixed, full-viewport animated SVG path background.
 * White background with animated black curved lines that flow infinitely downward.
 * Uses dangerouslySetInnerHTML to bypass React's span-wrapping issue with SVG paths.
 */
export function BackgroundPathsFixed() {
    const svgContent = useMemo(() => {
        const pathsHtml: string[] = [];
        const pathLength = 1600; // approximate path length
        const segmentLength = 500; // visible segment length (shorter = more "trail" feel)
        const gapLength = pathLength; // gap between visible segments
        // dasharray = segment + gap. When we animate dashoffset over (segment + gap),
        // the visible segment travels the full path and seamlessly loops.
        const totalDash = segmentLength + gapLength;
        
        // Generate paths for position 1 (curves from upper-left)
        for (let i = 0; i < 25; i++) {
            const pos = 1;
            const d = `M-${380 - i * 7 * pos} -${189 + i * 8}C-${380 - i * 7 * pos} -${189 + i * 8} -${312 - i * 7 * pos} ${216 - i * 8} ${152 - i * 7 * pos} ${343 - i * 8}C${616 - i * 7 * pos} ${470 - i * 8} ${684 - i * 7 * pos} ${875 - i * 8} ${684 - i * 7 * pos} ${875 - i * 8}`;
            const w = 0.5 + i * 0.04;
            const o = 0.1 + i * 0.04;
            const dur = 8 + (i * 3) % 7; // faster, more dynamic
            const delay = -(i * 1.2);
            pathsHtml.push(`<path d="${d}" stroke="black" stroke-width="${w}" stroke-opacity="${o}" fill="none" class="bg-path-flow" style="animation-duration:${dur}s;animation-delay:${delay}s;stroke-dasharray:${segmentLength} ${gapLength}"/>`);
        }
        
        // Generate paths for position -1 (curves from upper-right, mirrored)
        for (let i = 0; i < 25; i++) {
            const pos = -1;
            const d = `M-${380 - i * 7 * pos} -${189 + i * 8}C-${380 - i * 7 * pos} -${189 + i * 8} -${312 - i * 7 * pos} ${216 - i * 8} ${152 - i * 7 * pos} ${343 - i * 8}C${616 - i * 7 * pos} ${470 - i * 8} ${684 - i * 7 * pos} ${875 - i * 8} ${684 - i * 7 * pos} ${875 - i * 8}`;
            const w = 0.5 + i * 0.04;
            const o = 0.1 + i * 0.04;
            const dur = 8 + (i * 3) % 7;
            const delay = -(i * 1.2);
            pathsHtml.push(`<path d="${d}" stroke="black" stroke-width="${w}" stroke-opacity="${o}" fill="none" class="bg-path-flow" style="animation-duration:${dur}s;animation-delay:${delay}s;stroke-dasharray:${segmentLength} ${gapLength}"/>`);
        }
        
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-400 -300 1400 1400" fill="none" style="position:absolute;top:0;left:0;width:100%;height:100%"><title>Background Paths</title>${pathsHtml.join("")}</svg>`;
    }, []);

    return (
        <>
            <style>{`
                .bg-path-flow {
                    animation-name: bgPathInfinite;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                @keyframes bgPathInfinite {
                    0% {
                        stroke-dashoffset: 2100;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                    backgroundColor: "white",
                }}
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        </>
    );
}
