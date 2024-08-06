"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";


import { title } from "@/components/primitives";

export default function ProyectosPage() {
    const [isFollowed, setIsFollowed] = React.useState(false);
    const people = [
      {
        name: 'Iván Ojeda',
        role: 'FullStack Development',
        imageUrl:
          'perfil.jpg',
      },
      // More people...
    ]

    return (
        <>
           
            <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 justify-center">
        <div className="max-w-2xl justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Objetivos Profesionales</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
          Profesional con amplia experiencia liderando equipos comerciales y técnicos, responsable de la venta de productos 
y servicios a empresas públicas y privadas. Orientado a la formación de equipos de alto desempeño.
Full Stack Development - Scrum Master Certificado.

          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="float-right">
                <img alt="foto" src={person.imageUrl} className="h-48 w-48 rounded-full float" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 flex justify-center">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600 flex justify-center">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      </>

       
    );
}