/**
 * Signal-grid background: radial teal/amber glows over a faint network grid,
 * masked to fade out toward the edges. Pure CSS (see .signal-bg in index.css) —
 * no canvas/WebGL, so it's cheap and works everywhere.
 */
const AnimatedBackground = () => {
	return <div className="signal-bg" aria-hidden="true" />;
};

export default AnimatedBackground;