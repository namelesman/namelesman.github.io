'use client'; // Necessário se estiver usando o App Router (Next.js 13+)

import React, { useEffect, useRef } from 'react';
import styles from './MatrixBackground.module.css';

export default function MatrixBackground({ color = '#00ff41', speed = 1 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let columns = [];
        let tickInterval = Math.floor(40 / speed);
        let lastTick = 0;

        // Caracteres da Matrix
        const CHARS = '!"#$%&\'()*+,-./:;<=>?[\\]^_{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンゲ'.split('');
        const fontSize = 28;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initColumns();
        };

        const randInt = (n) => Math.floor(Math.random() * n);
        const randChar = () => CHARS[randInt(CHARS.length)];

        const createColumn = (spreadY = 0) => {
            const fs = Math.floor((0.7 * Math.random() + 0.5) * fontSize);
            const posX = randInt(canvas.width);
            const posY = -fs - spreadY;
            const stopY = Math.min(randInt(Math.floor(1.2 * canvas.height)), canvas.height) + fs;

            return {
                posX, posY, stopY, fontSize: fs,
                prev: { posX: 0, posY: 0, char: '' }
            };
        };

        const initColumns = () => {
            const numCols = Math.floor((1.2 * canvas.width) / fontSize);
            columns = [];
            for (let i = 0; i < numCols; i++) {
                columns.push(createColumn(2 * randInt(canvas.height)));
            }
        };

        const drawPrevChar = (col) => {
            ctx.font = `${col.fontSize}px monospace`;
            ctx.fillStyle = color;
            ctx.globalCompositeOperation = 'hard-light';
            ctx.fillText(col.prev.char, col.prev.posX, col.prev.posY);
        };

        const drawNewChar = (col) => {
            const ch = randChar();
            ctx.globalCompositeOperation = 'source-atop';
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            const q = Math.floor(0.25 * col.fontSize);
            ctx.fillRect(col.posX - q, col.posY - Math.floor(0.8 * col.fontSize), col.fontSize, col.fontSize);

            drawPrevChar(col);

            ctx.font = `${col.fontSize}px monospace`;
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = '#fff';
            ctx.fillText(ch, col.posX, col.posY);
            return ch;
        };

        const frame = (ts) => {
            if (!lastTick || ts >= lastTick + tickInterval) {
                lastTick = ts;

                // Fundo semi-transparente para criar o rastro
                ctx.fillStyle = 'rgba(0,0,0,0.09)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < columns.length; i++) {
                    const c = columns[i];
                    c.posY += c.fontSize;

                    if (c.posY < c.stopY) {
                        if (c.posY >= 0) c.prev.char = drawNewChar(c);
                        c.prev.posX = c.posX;
                        c.prev.posY = c.posY;
                    } else {
                        drawPrevChar(c);
                        columns[i] = createColumn();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(frame);
        };

        // Inicia e cuida do resize da janela
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animationFrameId = requestAnimationFrame(frame);

        // Cleanup quando o componente for desmontado (boa prática no React)
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, speed]);

    return (
        <div className={styles.matrixContainer}>
            <canvas ref={canvasRef} className={styles.matrixCanvas}></canvas>
        </div>
    );
}
