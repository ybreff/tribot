import { useState, useEffect } from "react";
import Layout from "../components/layout/main";
import Button from "../components/button";
import Table from "../components/table";
import Datepicker from "../components/datepicker";
import Dropdown from "../components/dropdown";
import erroricon from "../assets/images/icons/dialogerror.svg";
import dynamic from 'next/dynamic'
import { DATEPICKER } from "../constants/ConstantsComponents"
import {
  FilterIcon,
  XIcon,
} from "@heroicons/react/solid";

const PieChart = dynamic(() => import("../components/piechart"),  { ssr: false })
const BarChart = dynamic(() => import("../components/barchart"),  { ssr: false })

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [date, changeDate] = useState(false);

  const columns = [
    { field: 'tipo_rol', headerName: 'Tipo Rol', width: 70 },
    { field: 'monto', headerName: 'Monto', width: 130, type: "number"},
  ];
  
  const rows = [
    { id: 1, tipo_rol: "Contribuyente", monto: 150 },
    { id: 2, tipo_rol: "Supervisor", monto: 4 },
    { id: 3, tipo_rol: "Tipeador", monto: 26 },
  ];

  const dataPoints = [
    { y: 45, label: "Inactivos" },
    { y: 55, label: "Activos" }
  ]

  const items = DATEPICKER.MONTH.map((month, index) => ({ id: 1, name: month }));

  return (
    <Layout className="">     
      <div className="max-w-6xl mt-4">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Relacion de usuarios registrados
        </h2>
        <div className="mt-2 grid grid-cols-3 gap-0 sm:grid-cols-1 lg:grid-cols-3">
          <div className="grid grid-cols-7 col-span-2 gap-2 justify-items-end">
            <div className="col-span-2 col-start-3">
              <Dropdown
                    items={items}
                    className="max-w-6xl -mt-1"
                />              
            </div> 
            <div className="col-span-2">
              <Datepicker
                    value={date}
                    onChange={(event) => changeDate(event)}
                    heading=""
                    id="filter_date"
                    name="filter_date"
                    className="max-w-6xl -mt-1"
                />              
            </div>
            <div className="col-span-1 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                {/* <div data-bs-toggle="tooltip" data-bs-placement="top" title="Limpiar" className="float-left col-span-1 transition duration-150 ease-in-out">
                  <XIcon 
                    className="text-gray-800 hover:text-gray-900 flex-shrink-0 h-9 w-8 mr-0"
                    aria-hidden="true" 
                    />
                </div>
                <div data-bs-toggle="tooltip" data-bs-placement="top" title="Filtrar" className="float-left col-span-1 ransition duration-150 ease-in-out">
                  <FilterIcon 
                    className="text-pink-800 hover:text-pink-900 flex-shrink-0 h-9 w-8 mr-0"
                    aria-hidden="true" 
                    />
                </div> */}
                <Button primary >
                  <FilterIcon 
                    className="text-white hover:text-white flex-shrink-0 h-5 w-5 mr-2"
                    aria-hidden="true" 
                    />
                  Filtrar
                </Button>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-0 sm:grid-cols-1 lg:grid-cols-3">
            <div className="bg-white overflow-hidden drop-shadow-md rounded-lg col-span-2" >
              <Table rows={rows} columns={columns}/>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-7">
          <div className="mt-2">
              <div className="bg-white overflow-hidden drop-shadow-md rounded-lg max-w-xs" >
                <PieChart dataPoints={dataPoints} mainTitle="Porcentaje Usuarios Activos - Inactivos"/>                
              </div>
          </div>
          <div className="mt-2 col-span-3">
              <div className="bg-white overflow-hidden drop-shadow-md rounded-lg" >
                <BarChart mainTitle="Registro de usuarios por mes"/>
              </div>
          </div>
        </div>
      </div>
      {/* <Modal   
        label="Open Modal"
        setOpen={() => setShowModal(false)}
        open={showModal}  
        size="sm:max-w-5xl"                
        >
          <div className="sm:flex sm:items-start my-10">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-32 rounded-full sm:mx-0 sm:h-10 sm:w-32">
                <img src={erroricon.src} className="mt-5"/>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900  text-center">Titulo</h3>
                <div className="mt-2  text-center">
                  <p className="text-sm text-gray-500">21241231231231231231x dasdasdqweqweqwe</p>
                </div>
              </div>
          </div>

        </Modal> */}
    </Layout>
  );
}
