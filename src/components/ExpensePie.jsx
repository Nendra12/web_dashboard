import React, { useMemo } from "react";
import "./expensePie.css";

const NS = "http://www.w3.org/2000/svg";

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = toRad(angleDeg);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeWedge(cx, cy, r, startDeg, endDeg) {
  const start = polarToCartesian(cx, cy, r, startDeg);
  const end = polarToCartesian(cx, cy, r, endDeg);

  let delta = endDeg - startDeg;
  while (delta < 0) delta += 360;

  const largeArcFlag = delta > 180 ? 1 : 0;
  const sweepFlag = 1; // clockwise

  return [
    `M ${cx} ${cy}`,
    `L ${start.x.toFixed(2)} ${start.y.toFixed(2)}`,
    `A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${end.x.toFixed(2)} ${end.y.toFixed(2)}`,
    "Z",
  ].join(" ");
}

export default function ExpensePie({
  labels = [ "Others", "Bill Expense", "Entertainment", "Investment"],
  sizes = [20, 15, 30, 35],
  colors = ["#1814F3", "#FC7900", "#343C6A", "#FA00FF"],
  radii = [1.15, 1.26, 1.15, 1.05], 
  startAngle = 90,
  baseR = 120, 
  gap = 8, 
  pctDistance = 0.58, 
}) {
  const cx = 150;
  const cy = 150;
  const total = useMemo(() => sizes.reduce((a, b) => a + b, 0), [sizes]);

  const slices = useMemo(() => {

    const cumsum = [0];
    for (let i = 0; i < sizes.length; i++) cumsum.push(cumsum[i] + sizes[i]);

    const theta = cumsum.map((v) => startAngle - (v / total) * 360);

    return sizes.map((val, i) => {
      const r = baseR * radii[i];

      const theta1 = theta[i + 1];
      const theta2 = theta[i];

      const d = describeWedge(cx, cy, r, theta1, theta2);

      const ang = (theta2 + theta1) / 2;
      const tx = cx + pctDistance * r * Math.cos(toRad(ang));
      const ty = cy + pctDistance * r * Math.sin(toRad(ang));

      return {
        key: `${labels[i]}-${i}`,
        d,
        fill: colors[i],
        pct: `${val}%`,
        label: labels[i],
        tx,
        ty,
      };
    });
  }, [sizes, labels, colors, radii, startAngle, baseR, total, pctDistance]);

  return (
    <>
        <svg className="pieSvg" viewBox="0 0 300 300" role="img" aria-label="Expense Pie">
          {slices.map((s) => (
            <g className="slice" key={s.key}>
              <path
                className="arc"
                d={s.d}
                fill={s.fill}
                stroke="#fff"
                strokeWidth={gap}
                strokeLinejoin="round"
              />
              <text className="label" x={s.tx} y={s.ty}>
                <tspan className="pct" x={s.tx} dy="0">
                  {s.pct}
                </tspan>
                <tspan className="name" x={s.tx} dy="22">
                  {s.label}
                </tspan>
              </text>
            </g>
          ))}
        </svg>
    
    
    </>
  );
}
