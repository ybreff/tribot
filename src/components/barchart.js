import { useState, useEffect } from "react";
import CanvasJSReact from '../assets/js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function BarChart(props) {
    const [loaded, changeLoaded] = useState(false);

    const {dataPoints, mainTitle} = props;

    const options = {
        animationEnabled: true,
        // zoomEnabled: true,
        height: 380,
        title:{
            // text: "Crude Oil Reserves vs Production, 2016"
        },	
        axisY: {
            // title: "Billions of Barrels",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            // title: "Millions of Barrels/day",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },	
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            // itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "Activos",
            legendText: "Usuarios Activos",
            showInLegend: true, 
            dataPoints:[
                { label: "Ene", y: 266.21 },
                { label: "Feb", y: 302.25 },
                { label: "Mar", y: 157.20 },
                { label: "Abr", y: 148.77 },
                { label: "May", y: 101.50 },
                { label: "Jun", y: 97.8 },
                { label: "Jul", y: 10.46 },
                { label: "Ago", y: 2.27 },
                { label: "Sep", y: 3.99 },
                { label: "Oct", y: 4.45 },
                { label: "Nov", y: 2.92 },
                { label: "Dic", y: 3.1 }
            ]
        },
        {
            type: "column",	
            name: "Inactivos",
            legendText: "Usuarios Inactivos",
            axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "Ene", y: 26.21 },
                { label: "Feb", y: 32.25 },
                { label: "Mar", y: 57.20 },
                { label: "Abr", y: 118.77 },
                { label: "May", y: 120.50 },
                { label: "Jun", y: 107.8 },
                { label: "Jul", y: 101.46 },
                { label: "Ago", y: 10.27 },
                { label: "Sep", y: 33.99 },
                { label: "Oct", y: 44.45 },
                { label: "Nov", y: 52.92 },
                { label: "Dic", y: 33.1 }
            ]
        }]
    }

    useEffect(() => {
        changeLoaded(true);
    }, []) 

	return (
		<div className="relative">
            <div className="absolute z-10 w-20 h-3  bg-white" />
            <div className="absolute z-10 text-left -mt-3 text-sm ml-4">
                <h2>{mainTitle}</h2>
            </div>
            <div className="mt-5">
                {
                loaded && <CanvasJSChart options = {options}/>
                }            
		    </div>
		</div>
	);
}