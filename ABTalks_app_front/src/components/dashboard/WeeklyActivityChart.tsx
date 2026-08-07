import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { ChevronDown } from 'lucide-react';

Chart.register(...registerables);

export const WeeklyActivityChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue('--color-primary').trim() || '#ff5a36';
    const borderColor = computedStyle.getPropertyValue('--color-border').trim() || '#1e2330';
    const mutedColor = computedStyle.getPropertyValue('--color-muted').trim() || '#475569';

    const gradientPrimary = ctx.createLinearGradient(0, 0, 0, 200);
    gradientPrimary.addColorStop(0, primaryColor);
    gradientPrimary.addColorStop(1, 'rgba(255, 90, 54, 0.1)');

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [80, 65, 90, 100, 40, 0, 0],
          backgroundColor: (context) => {
            const index = context.dataIndex;
            if (index === 4) return gradientPrimary;
            if (index > 4) return 'rgba(128, 128, 128, 0.1)';
            return borderColor;
          },
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { display: false, max: 100, beginAtZero: true },
          x: {
            grid: { display: false },
            ticks: {
              color: (context) => context.index === 4 ? primaryColor : mutedColor,
              font: { family: 'system-ui', size: 12, weight: 500 }
            }
          }
        }
      }
    });

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  return (
    <div className="panel-card flex flex-col h-70">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-header">Study Process</h3>
        <div className="text-[11px] font-semibold text-muted uppercase tracking-widest flex items-center gap-1 cursor-pointer hover:text-header transition-colors">
          This Week <ChevronDown className="w-3 h-3" />
        </div>
      </div>
      <div className="grow relative w-full h-full">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};