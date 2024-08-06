"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";


import { title } from "@/components/primitives";


export default function ProyectosPage() {
  const defaultContent1 =
    "En este proyecto encontrarán: Mensaje del Negocio, un breve catalogo de los productos. La pagina es completamente responsiva. En este trabajo aprendí a ubicar distintos elementos como por ejemplo, header, jumbotron, footer. Los detalles puedes verlos en la seccion URL Proyectos";
  const defaultContent2 =
    "En este proyecto, encontrarán un CRUD que contiene una aplicación para crear productos, borrarlos, modificarlos y ver todo lo creado. En la sección URL Proyectos podrán ver mas detalles.";
  const defaultContent3 =
    "En este proyecto, utilizamos la librería de datos llamada 'Chart.js'. Adicional a lo anterior, hicimos una conexi+on a través de un API a una BBDD controlada por terceros. El ambiente de desarrollo utilizado fue 'Node.js'. Adicionalmente, usamos algunos elementos de JavaScript";

    const defaultContent4 =
    "Para este proyecto, fue necesario aprender a utilizar React y Firebase. Además, aplicamos herramientas como 'VITE', componentes 'Hooks', CSS"
    
const defaultContent5= "El objetivo de este proyecto fue desarrollar una aplicación FULLSTACK integrando MONGO, EXPRESS, REACT Y NODEJS, en el cual se comercializan cuadros vía pagos online. Se utilizó Mercado Libre para simular los pagos e incluí autenticación como parte del conjunto de características."

  return (
    <>
      <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Accordion 1" title="Proyecto 1: 'Landing de Negocio'">
          {defaultContent1}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Proyecto 2: Aplicación 'CRUD'">
          {defaultContent2}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Proyecto 3: Tablero de Datos (Dashboard)">
          {defaultContent3}
        </AccordionItem>
        <AccordionItem key="4" arial-label="Accordion 4" title="Proyecto 4: Aplicación 'Restaurante' ">
        {defaultContent4}          
        </AccordionItem>
        <AccordionItem key="5" arial-label="Accordion 5" title="Proyecto 5: Aplicación de Comercio Electrónico">
        {defaultContent5} 
        </AccordionItem>
      </Accordion>
    </>
  );
}
