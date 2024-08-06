"use client"
import React from "react";
import { Link } from "@nextui-org/react";
import {Image} from "@nextui-org/react";


import { title } from "@/components/primitives";

export default function ProyectosPage() {
  return (
    <> 
    <div className="flex gap-2">
      <Link isBlock showAnchorIcon href="https://ivanojedaojeda.github.io/Proyecto-Ivan/" color="foreground">
        Landing Negocio
      </Link>
      <Link isBlock showAnchorIcon href="https://ivanojedaojeda.github.io/Proyecto_2/" color="primary">
        Aplicación CRUD
      </Link>
      <Link isBlock showAnchorIcon href="#" color="secondary">
        Tablero de Datos
      </Link>
      <Link isBlock showAnchorIcon href="#" color="success">
        Success
      </Link>
      <Link isBlock showAnchorIcon href="#" color="warning">
        Warning
      </Link>
      <Link isBlock showAnchorIcon href="#" color="danger">
        Danger
      </Link>      
    </div>
    <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '20px',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <Image
    width={300}
    alt="Proyecto1"
    src="proyecto1.png"
    style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}
  />

  <Image
    width={300}
    alt="Ferreteria don Chuma"
    src="proyecto_2_ferreteria.png"
    style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}
  />

  <Image
    width={300}
    alt="NextUI hero Image"
    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }}
  />

  <Image
    width={600}
    alt="NextUI hero Image"
    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    style={{ gridColumn: '1 / 3', gridRow: '2 / 3' }}
  />

  <Image
    width={300}
    alt="NextUI hero Image"
    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}
  />
</div>
   
    </>
  );
}

   
           
          
        
    