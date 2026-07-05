import Link from 'next/link'
import React, { Suspense } from 'react'
{
  /* 
  🐶 Ajoute les 2 props supplémentaires necessaires pour 
  faire fonctionner nos routes parrallèles  
  */
}


export default async function Layout({ children, editor, admin }:
  { children: React.ReactNode, editor: React.ReactNode, admin: React.ReactNode }) {

  const role = Math.random() > 0.5 ? 'admin' : 'editor'
  

  return (
    <>

      <h2>Gestion Admin / Editor Layout</h2>
      <div className="m-6 flex flex-col">
        {/* ⛏️ supprime ces 2 liens car ils ne seront pas utilisés */}
        <Link href="/parallel/admin">admin</Link>
        <Link href="/parallel/editor">editor</Link>
        {children}
        {editor}
        <Suspense fallback={<div>Loading...</div>}>
          {role === 'admin' && admin}
        </Suspense>


        {/* 🐶 pense à bonus-1. 🚀 rendu conditionel  */}
        {/* 🐶 pense à bonus-2. 🚀 Loading  */}
      </div>
    </>
  )
}
