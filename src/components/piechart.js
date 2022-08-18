import { useState, useEffect } from "react";
import CanvasJSReact from '../assets/js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function PieChart(props) {
    const [loaded, changeLoaded] = useState(false);

    const {dataPoints, mainTitle} = props;

    const options = {
        theme: "light2",
        animationEnabled: true,
        // exportFileName: "New Year Resolutions",
        exportEnabled: false,
        // title:{
        //      text: mainTitle
        // },
        // titleFontSize: 12,
        data: [{
            type: "pie",
            radius: 150,
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            indexLabelFontSize: 20,
            indexLabelFontWeight: "bold",
            indexLabelFontColor: "#FFFFFF",
            dataPoints: dataPoints,
        }]
    }

    useEffect(() => {
        changeLoaded(true);
    }, []) 

	return (
		<div className="relative">
            <div className="absolute z-10 w-20 h-3  bg-white" />
            <div className="absolute z-10 w-full text-center mt-2 text-sm">
                <h2>{mainTitle}</h2>
            </div>
            {
            loaded && <CanvasJSChart options = {options}/>
            }            
		</div>
	);
}