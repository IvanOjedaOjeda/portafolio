"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
//import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { title } from "@/components/primitives";


export default function ProyectosPage() {
  const defaultContent1 =
    "Mi primera chamba";
    const defaultContent2 =
    "Mi segunda chamba";
    const defaultContent3=
    "Mi tercera chamba";

  return (
    <>
      <div>
        <h1 className={title()}>Estos son mis proyectos</h1>
      </div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Proyecto Pagina Web responsiva con HTML">
          {defaultContent1}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Proyecto Ferretería don Chuma">
          {defaultContent2}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Proyecto API">
          {defaultContent3}
        </AccordionItem>
      </Accordion>
    </>
  );
}
