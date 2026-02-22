'use client';

interface StatusColorProps {
    children: string;
}

const STATUS_CLASSES: Record<string, string> = {
    "Released": "px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20",
    "Update": "px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20",
    "Other": "px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20",
    "Soon": "px-3 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20",
};

export default function StatusColor({ children }: StatusColorProps) {
    if (!children) return null;

    const className = STATUS_CLASSES[children] || "";

    return <span className={className}>{children}</span>;
}
