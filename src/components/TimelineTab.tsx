import type { ComponentType } from "react";

interface TimelineItem {
	title: string;
	subtitle: string;
	description: string;
	date: string;
}
interface TimelineTabProps {
	items: TimelineItem[];
	icon: ComponentType<{ size?: number; strokeWidth?: number }>;
	title: string;
}

const TimelineTab = ({ items, icon: Icon, title }: TimelineTabProps) => {
	return (
		<div className="pt-2 p-4 sm:px-6">
			<h2 className="text-xl font-display font-bold mb-6 text-text">{title}</h2>
			<div className="space-y-0">
				{items.map((item, index) => (
					<div key={index} className="flex gap-4">
						{/* Timeline Column */}
						<div className="flex flex-col items-center">
							<div className="w-12 h-12 rounded-full border border-border bg-panel flex items-center justify-center shrink-0 z-10 text-primary">
								<Icon size={20} strokeWidth={1.5} />
							</div>
							{index !== items.length - 1 && (
								<div className="w-px h-full bg-border my-1"></div>
							)}
						</div>

						{/* Content Card */}
						<div className="pb-8 w-full">
							<div className="border border-border rounded-xl p-5 bg-panel">
								<div className="flex justify-between items-start mb-1 flex-col sm:flex-row gap-2 sm:gap-0">
									<h3 className="font-bold text-lg leading-tight text-text">
										{item.title}
									</h3>
									<span className="bg-bg text-muted text-[13px] px-2.5 py-1 rounded-md font-mono shrink-0 border border-border">
										{item.date}
									</span>
								</div>
								<div className="text-primary mb-3 text-sm">{item.subtitle}</div>
								<p className="text-[15px] text-muted leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TimelineTab;