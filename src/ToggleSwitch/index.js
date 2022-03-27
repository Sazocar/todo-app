import React from "react";
import "./ToggleSwitch.css";
  
const ToggleSwitch =({ theme, setTheme }) => {

	const lightMoon = 'https://img.icons8.com/ios-filled/32/000000/do-not-disturb-2.png';
	const darkMoon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgElEQVRIidWWS07DMBCGJxWIdgErWonSFeImvQEqx4A78LgH3KEcAEjLY9GC0hvAjhUtSDwW/VjElZIosR07UPFL3iTzzzeeKPaI/DcBd8DNMsAAuPprVRbjDQa2gYZvcmAVaNsGt4FPYAK0NHEhcK153wIi4APYsgHXlQET3ACdqBwRsOZiLNyVxh+aCs/9xkEQvIhIV0SGIvKcKegUeADe1RoDJxnAk/J2VS53AfvAjGLNgJ4XpAA610AXmlcGV+3V7TSrKdA05bU5QA5FZL1ErRsiclAiPl/AY4ndLjQ25a2p5GHGGCZidhzq3U0Unpu7qNXOh7+F3y438T/7O6026MKqwrT6Dp60KP87vQKb3mAF72F/gOxVAs3Ap4ad+kNVi4fAWeJZEzgGRsCbWiPgKNle4BwYUPZKJX0tXjoUfaW89vc50EhAqxoEzGMU8bz1rQy60eceuDXAI+CLEnNXB6gbYgD9eEs8RnWsoLayAeu0tLl6xcM7EP/L5O/1AzM0BnlHGDx/AAAAAElFTkSuQmCC';
	
	const themeToggler = () => {
		theme == 'light' ? setTheme('dark') : setTheme('light')
	};

  return (
		<React.Fragment>
			<img 
				className="themeMode-icon"
				src={theme == 'light' ? lightMoon : darkMoon}
			/>
			<label className="switch">
				<input type="checkbox"
					onClick={themeToggler}	
				/>
				<span className="slider round"></span>
			</label>
		</React.Fragment>

  );
};
  
export default ToggleSwitch;