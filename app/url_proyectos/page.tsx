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
      <Link isBlock showAnchorIcon href="https://ivanojedaojeda.github.io/Proyecto3/" color="secondary">
        Tablero de Datos
      </Link>
      <Link isBlock showAnchorIcon href="https://ivanojedaojeda.github.io/resto2.1/" color="success">
        Restorante
      </Link>
      <Link isBlock showAnchorIcon href="https://client-proyecto-5.vercel.app/" color="warning">
        Comercio Electrónico
      </Link>
          
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        width={300}
        alt="Proyecto1"
        src="proyecto1.png"
        style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}
      />

      <Image
        width={300}
        alt="Ferreteria don Chuma"
        src="proyecto_2_ferreteria.png"
        style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
      />

      <Image
        width={300}
        alt="API Paises"
        src="paises.png"
        style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
      />

      <Image
        width={300}
        alt="Restorante"
        src="restorante_proy4.png"
        style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
      />

      <Image
        width={300}
        alt="Comercio electronico"
        src="memeart.png"
        style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
      />

<Image
        width={300}
        alt="Comercio electronico"
        src="proy6.png"
        style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
      />
    </div>
   
    </>
  );
}

   
           
          
        
    