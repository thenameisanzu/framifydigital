'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Play, Pause, ArrowRight, MessageCircle, Palette, Video, Image as ImageIcon, Layout } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MatrixNode {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseX: number;
    baseY: number;
    col: number;
    row: number;
    radius: number;
    label: string;
    tension: number;
    pulsePhase: number;
}

interface SynapticPulse {
    fromNode: number;
    toNode: number;
    progress: number;
    speed: number;
}

interface GravitationalShockwave {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    power: number;
}

export interface KineticMatrixProps {
    className?: string;
}

export function KineticMatrix({
    className = "",
}: KineticMatrixProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [isRunning, setIsRunning] = useState(true);

    // Pointer state with smooth inertia
    const pointerRef = useRef({
        x: -2000,
        y: -2000,
        prevX: -2000,
        prevY: -2000,
        vx: 0,
        vy: 0,
        radius: 240,
        isDown: false,
    });

    const nodesRef = useRef<MatrixNode[]>([]);
    const pulsesRef = useRef<SynapticPulse[]>([]);
    const shockwavesRef = useRef<GravitationalShockwave[]>([]);
    const dimensionsRef = useRef({ width: 0, height: 0, cols: 0, rows: 0, spacing: 54 });

    // Grid lattice initializer that guarantees full edge-to-edge coverage past bottom and right edges
    const buildLattice = useCallback((width: number, height: number) => {
        if (!width || !height) return;
        const isMobile = width < 640;
        const spacing = isMobile ? 60 : 52;
        
        // Add extra rows and cols to guarantee 100% full background coverage on all aspect ratios
        const cols = Math.ceil(width / spacing) + 3;
        const rows = Math.ceil(height / spacing) + 3;
        const nodes: MatrixNode[] = [];

        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                const x = c * spacing;
                const y = r * spacing;
                nodes.push({
                    x,
                    y,
                    vx: 0,
                    vy: 0,
                    baseX: x,
                    baseY: y,
                    col: c,
                    row: r,
                    radius: isMobile ? 1.0 : 1.35,
                    label: `0x${((c * 17 + r * 31) % 256).toString(16).padStart(2, '0').toUpperCase()}`,
                    tension: 0,
                    pulsePhase: Math.random() * Math.PI * 2,
                });
            }
        }

        dimensionsRef.current = { width, height, cols, rows, spacing };
        nodesRef.current = nodes;
        pulsesRef.current = [];
    }, []);

    // Canvas Resize Observer with exact container bounding
    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const resizeObserver = new ResizeObserver(() => {
            const width = container.offsetWidth || window.innerWidth;
            const height = container.offsetHeight || window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            buildLattice(width, height);
        });

        resizeObserver.observe(container);
        return () => resizeObserver.disconnect();
    }, [buildLattice]);

    // Main Simulation & Rendering Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let animId = 0;
        let lastTime = performance.now();

        const render = (now: number) => {
            const dt = Math.min((now - lastTime) / 1000, 0.033);
            lastTime = now;

            if (!isRunning) {
                animId = requestAnimationFrame(render);
                return;
            }

            const { width, height, cols, rows, spacing } = dimensionsRef.current;
            const nodes = nodesRef.current;
            const pulses = pulsesRef.current;
            const shockwaves = shockwavesRef.current;
            const pointer = pointerRef.current;

            const isMobile = width < 640;

            // Pointer velocity interpolation
            pointer.vx = (pointer.x - pointer.prevX) / (dt * 1000 || 1);
            pointer.vy = (pointer.y - pointer.prevY) / (dt * 1000 || 1);
            pointer.prevX = pointer.x;
            pointer.prevY = pointer.y;
            const mouseSpeed = Math.sqrt(pointer.vx * pointer.vx + pointer.vy * pointer.vy);

            // Framify Deep Navy Background & Subtle Ambience
            const bgColor = '#080e27';
            const nodeColor = '56, 189, 248';
            const accentGlow = '56, 189, 248';

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            // Subtle navy vignette gradient across canvas
            const grad = ctx.createRadialGradient(width / 2, height / 2, 40, width / 2, height / 2, Math.max(width, height) * 0.75);
            grad.addColorStop(0, 'rgba(12, 24, 68, 0.45)');
            grad.addColorStop(1, 'rgba(8, 14, 39, 0.98)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);

            // 1. Propagate Shockwaves
            for (let s = shockwaves.length - 1; s >= 0; s--) {
                const sw = shockwaves[s];
                sw.radius += 420 * dt;
                sw.power *= Math.pow(0.12, dt);
                if (sw.radius > sw.maxRadius || sw.power < 0.01) {
                    shockwaves.splice(s, 1);
                }
            }

            // 2. Physics Step (Hooke's Spring-Mass Lattice)
            const SPRING_K = 26;
            const DAMPING = 0.86;

            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                n.pulsePhase += dt * 3.2;

                const dx = pointer.x - n.x;
                const dy = pointer.y - n.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < pointer.radius && dist > 0) {
                    const ratio = 1 - dist / pointer.radius;
                    const force = ratio * (1600 + mouseSpeed * 180 + (pointer.isDown ? 2400 : 0));
                    const angle = Math.atan2(dy, dx);

                    n.vx -= Math.cos(angle) * force * dt;
                    n.vy -= Math.sin(angle) * force * dt;
                    n.tension = Math.min(1, n.tension + ratio * 0.5);
                }

                for (let s = 0; s < shockwaves.length; s++) {
                    const sw = shockwaves[s];
                    const swDx = n.x - sw.x;
                    const swDy = n.y - sw.y;
                    const swDist = Math.sqrt(swDx * swDx + swDy * swDy);
                    const delta = Math.abs(swDist - sw.radius);

                    if (delta < 55) {
                        const force = (1 - delta / 55) * sw.power * 2800;
                        const angle = Math.atan2(swDy, swDx);
                        n.vx += Math.cos(angle) * force * dt;
                        n.vy += Math.sin(angle) * force * dt;
                        n.tension = 1.0;
                    }
                }

                const hx = n.baseX - n.x;
                const hy = n.baseY - n.y;
                n.vx += hx * SPRING_K * dt;
                n.vy += hy * SPRING_K * dt;

                n.vx *= DAMPING;
                n.vy *= DAMPING;
                n.x += n.vx * dt * 60;
                n.y += n.vy * dt * 60;

                n.tension = Math.max(0, n.tension - dt * 0.9);
            }

            // 3. Spawn Random Synaptic Traveling Pulses
            const maxPulses = isMobile ? 18 : 35;
            if (Math.random() < (isMobile ? 0.15 : 0.28) && nodes.length > 0 && pulses.length < maxPulses) {
                const fromIdx = Math.floor(Math.random() * nodes.length);
                const fromNode = nodes[fromIdx];
                const possibleDirections = [
                    { dc: 1, dr: 0 },
                    { dc: -1, dr: 0 },
                    { dc: 0, dr: 1 },
                    { dc: 0, dr: -1 },
                ];
                const dir = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
                const targetCol = fromNode.col + dir.dc;
                const targetRow = fromNode.row + dir.dr;

                if (targetCol >= 0 && targetCol < cols && targetRow >= 0 && targetRow < rows) {
                    const toIdx = targetCol * rows + targetRow;
                    if (toIdx >= 0 && toIdx < nodes.length) {
                        pulses.push({
                            fromNode: fromIdx,
                            toNode: toIdx,
                            progress: 0,
                            speed: 1.4 + Math.random() * 2.0,
                        });
                    }
                }
            }

            // 4. Render Grid Tension Strands
            for (let c = 0; c < cols; c++) {
                for (let r = 0; r < rows; r++) {
                    const idx = c * rows + r;
                    const n = nodes[idx];
                    if (!n) continue;

                    if (c < cols - 1) {
                        const rightIdx = (c + 1) * rows + r;
                        const nr = nodes[rightIdx];
                        if (nr) drawLatticeLink(ctx, n, nr, spacing, isMobile);
                    }

                    if (r < rows - 1) {
                        const downIdx = c * rows + (r + 1);
                        const nd = nodes[downIdx];
                        if (nd) drawLatticeLink(ctx, n, nd, spacing, isMobile);
                    }
                }
            }

            // 5. Render Synaptic Data Pulses
            for (let p = pulses.length - 1; p >= 0; p--) {
                const pulse = pulses[p];
                pulse.progress += dt * pulse.speed;

                const n1 = nodes[pulse.fromNode];
                const n2 = nodes[pulse.toNode];

                if (!n1 || !n2 || pulse.progress >= 1) {
                    if (n2) n2.tension = Math.min(1, n2.tension + 0.35);
                    pulses.splice(p, 1);
                    continue;
                }

                const px = n1.x + (n2.x - n1.x) * pulse.progress;
                const py = n1.y + (n2.y - n1.y) * pulse.progress;

                ctx.fillStyle = isMobile ? 'rgba(56, 189, 248, 0.5)' : '#38bdf8';
                ctx.beginPath();
                ctx.arc(px, py, isMobile ? 1.4 : 2.0, 0, Math.PI * 2);
                ctx.fill();
            }

            // 6. Render Nodes
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const dx = pointer.x - n.x;
                const dy = pointer.y - n.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const isNear = dist < pointer.radius;

                const currentRadius = isNear
                    ? n.radius * 2.0 + n.tension * 1.2
                    : n.radius + Math.sin(n.pulsePhase) * 0.2;

                if (isNear || n.tension > 0.1) {
                    ctx.fillStyle = `rgba(${accentGlow}, ${Math.min(1, 0.25 + n.tension * 0.55)})`;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, currentRadius * 2.0, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.fillStyle = isNear || n.tension > 0.1
                    ? (isMobile ? 'rgba(255, 255, 255, 0.7)' : '#ffffff')
                    : (isMobile ? 'rgba(56, 189, 248, 0.18)' : 'rgba(56, 189, 248, 0.28)');

                ctx.beginPath();
                ctx.arc(n.x, n.y, Math.max(0.7, currentRadius), 0, Math.PI * 2);
                ctx.fill();

                if (dist < 80 && !isMobile) {
                    const radarRing = ((n.pulsePhase * 20) % 32) + 4;
                    const ringAlpha = (1 - radarRing / 36) * 0.35;

                    ctx.strokeStyle = `rgba(56, 189, 248, ${ringAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, radarRing, 0, Math.PI * 2);
                    ctx.stroke();

                    ctx.font = '8px ui-monospace, SFMono-Regular, Consolas, monospace';
                    ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
                    ctx.fillText(n.label, n.x + 9, n.y - 9);
                }
            }

            animId = requestAnimationFrame(render);
        };

        animId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animId);
    }, [isRunning]);

    const drawLatticeLink = (
        ctx: CanvasRenderingContext2D,
        n1: MatrixNode,
        n2: MatrixNode,
        restLen: number,
        isMobile: boolean
    ) => {
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const stretch = Math.abs(dist - restLen) / restLen;
        const isTensioned = n1.tension > 0.05 || n2.tension > 0.05 || stretch > 0.1;

        if (isTensioned) {
            const glow = Math.max(n1.tension, n2.tension, stretch * 2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${Math.min(0.65, (isMobile ? 0.2 : 0.28) + glow * 0.5)})`;
            ctx.lineWidth = isMobile ? 0.7 : (0.8 + glow * 1.2);
        } else {
            ctx.strokeStyle = isMobile ? 'rgba(56, 189, 248, 0.05)' : 'rgba(56, 189, 248, 0.08)';
            ctx.lineWidth = 0.5;
        }

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
    };

    const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        pointerRef.current.x = e.clientX - rect.left;
        pointerRef.current.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (!container || !e.touches[0]) return;

        const rect = container.getBoundingClientRect();
        pointerRef.current.x = e.touches[0].clientX - rect.left;
        pointerRef.current.y = e.touches[0].clientY - rect.top;
    };

    const handlePointerDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (!container) return;

        pointerRef.current.isDown = true;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        shockwavesRef.current.push({
            x,
            y,
            radius: 8,
            maxRadius: 360,
            power: 1.2,
        });
    };

    const handlePointerUp = () => {
        pointerRef.current.isDown = false;
    };

    const handlePointerLeave = () => {
        pointerRef.current.x = -2000;
        pointerRef.current.y = -2000;
        pointerRef.current.isDown = false;
    };

    const triggerCentralImpulse = () => {
        const { width, height } = dimensionsRef.current;
        shockwavesRef.current.push({
            x: width / 2,
            y: height / 2,
            radius: 10,
            maxRadius: Math.max(width, height) * 0.85,
            power: 1.5,
        });
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            onMouseMove={handlePointerMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handlePointerDown}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerLeave}
            className={cn(
                "relative min-h-screen w-full select-none overflow-hidden bg-[#080e27] pt-24 sm:pt-28 pb-12 flex flex-col justify-between border-b border-sky-500/15",
                className
            )}
        >
            {/* Absolute Edge-to-Edge Canvas covering entire hero area */}
            <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full cursor-crosshair z-0 opacity-60 sm:opacity-85" />

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080e27]/40 via-transparent to-[#080e27]/80 pointer-events-none z-10" />

            {/* Top Interactive Physics Controls Bar */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <div className="flex items-center justify-between gap-2">
                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-[#0c1844]/90 px-3 py-1 backdrop-blur-md text-[11px] font-mono text-cyan-300 shadow-sm">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
                        <span className="font-semibold">FRAMIFY</span>
                        <span className="text-slate-400 hidden sm:inline">| Kottayam, Karukachal 686540, Kerala</span>
                        <span className="text-slate-400 sm:hidden">| Kerala</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <button
                            type="button"
                            onClick={triggerCentralImpulse}
                            className="flex items-center gap-1 rounded-lg border border-sky-500/30 bg-[#0c1844]/90 px-2.5 py-1 text-[10px] sm:text-xs font-mono text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-[#152766] hover:text-white active:scale-95 shadow-md"
                            title="Trigger Kinetic Shockwave"
                        >
                            <Sparkles className="size-3 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                            <span>PULSE</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsRunning((prev) => !prev)}
                            className="flex items-center gap-1 rounded-lg border border-sky-500/30 bg-[#0c1844]/90 px-2.5 py-1 text-[10px] sm:text-xs font-mono text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-[#152766] hover:text-white active:scale-95 shadow-md"
                        >
                            {isRunning ? <Pause className="size-3 text-amber-400" /> : <Play className="size-3 text-emerald-400" />}
                            <span className="font-mono text-[10px]">{isRunning ? "FREEZE" : "RUN"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Center Content Deck with Clean Typography & Matched CTA Buttons */}
            <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 my-auto text-center py-6">
                <div className="rounded-3xl bg-[#080e27]/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-5 sm:p-0 border border-sky-500/15 sm:border-none shadow-2xl sm:shadow-none">
                    {/* Brand Tagline Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-[#0c1844]/90 px-3.5 py-1 mb-5 backdrop-blur-md shadow-md">
                        <span className="text-xs sm:text-sm">🎨</span>
                        <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-cyan-200">
                            Graphic Design & Branding – Kerala
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.15] mb-4 font-sans drop-shadow-md">
                        We Don’t Just Create Content,{" "}
                        <span className="gradient-text-brand block mt-1">
                            We Build Growth Systems.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-xl mx-auto text-xs sm:text-base text-slate-200 font-normal leading-relaxed mb-6">
                        Smart businesses create systems. We craft high-impact <strong className="text-white font-semibold">Logos</strong>, viral <strong className="text-white font-semibold">Reels</strong>, commercial <strong className="text-white font-semibold">Posters</strong>, and high-CTR <strong className="text-white font-semibold">Thumbnails</strong> designed to grow your brand.
                    </p>

                    {/* 4 Core Offerings Pill Strip */}
                    <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto mb-8">
                        <a href="#services" className="inline-flex items-center gap-1.5 rounded-lg bg-[#0c1844]/95 border border-sky-500/30 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-sm">
                            <Palette className="size-3 text-cyan-400" />
                            <span>Logos & Branding</span>
                        </a>
                        <a href="#services" className="inline-flex items-center gap-1.5 rounded-lg bg-[#0c1844]/95 border border-sky-500/30 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-sm">
                            <Video className="size-3 text-cyan-400" />
                            <span>Reels & Video</span>
                        </a>
                        <a href="#services" className="inline-flex items-center gap-1.5 rounded-lg bg-[#0c1844]/95 border border-sky-500/30 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-sm">
                            <Layout className="size-3 text-cyan-400" />
                            <span>Social Posters</span>
                        </a>
                        <a href="#services" className="inline-flex items-center gap-1.5 rounded-lg bg-[#0c1844]/95 border border-sky-500/30 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-sm">
                            <ImageIcon className="size-3 text-cyan-400" />
                            <span>Thumbnails</span>
                        </a>
                    </div>

                    {/* Aligned, Fixed-Height, Single-Line CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
                        <a
                            href="https://wa.me/919447520844?text=Hi%20Framify,%20I'd%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            <MessageCircle className="size-4 shrink-0" />
                            <span>WhatsApp: +91 94475 20844</span>
                        </a>

                        <a
                            href="#contact"
                            className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            <span>Request a Quote</span>
                            <ArrowRight className="size-4 shrink-0" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="relative z-20 text-center pointer-events-none mt-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-slate-400 bg-[#080e27]/90 px-3.5 py-1 rounded-full border border-sky-500/15">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Accepting Projects Across Kerala & Online</span>
                </span>
            </div>
        </section>
    );
}

export default KineticMatrix;
