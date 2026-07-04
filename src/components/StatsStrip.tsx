import { STATS_DATA } from "../lib/constants";
import { useCountUp } from "../hooks/useCountUp";

const StatItem = ({
	label,
	value,
	prefix,
	suffix,
}: {
	label: string;
	value: number;
	prefix: string;
	suffix: string;
}) => {
	const { value: animated, ref } = useCountUp(value);
	return (
		<div ref={ref} className="flex flex-col gap-1 min-w-30">
			<span className="font-mono text-2xl sm:text-3xl font-semibold text-primary">
				{prefix}
				{animated}
				{suffix}
			</span>
			<span className="text-[12px] uppercase tracking-wide text-muted font-mono">
				{label}
			</span>
		</div>
	);
};

const StatsStrip = () => {
	return (
		<div className="flex flex-wrap gap-x-8 gap-y-4 py-5 border-y border-border">
			{STATS_DATA.map((stat) => (
				<StatItem key={stat.label} {...stat} />
			))}
		</div>
	);
};

export default StatsStrip;