import React from "react";
import "./ToggleSwitch.css";
  
const ToggleSwitch =({ theme, setTheme }) => {
	
	const themeToggler = () => {
		theme == 'light' ? setTheme('dark') : setTheme('light');
	};

  return (
		<React.Fragment>
			<p className="theme-description">Dark mode</p>
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