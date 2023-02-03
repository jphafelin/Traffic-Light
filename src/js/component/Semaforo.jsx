import React, { useState } from "react";


import rigoImage from "../../img/rigo-baby.jpg";


const Semaforo = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	

	
	return (
	
		< div className = "traffic-light" >

			<div
			onClick={() => setSelectedColor("red")}
			className={"light red"+((selectedColor === "red") ? " glow-red": "")}></div>
			<div
			onClick={() => setSelectedColor("yellow")}
			className={"light yellow"+((selectedColor === "yellow") ? " glow-yellow": "")}></div>
			<div 
			onClick={() => setSelectedColor("green")}
			className={"light green"+((selectedColor === "green") ? " glow-green": "")}></div>
		</div >
	)
};

export default Semaforo;
