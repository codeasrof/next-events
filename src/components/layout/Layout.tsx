import React from "react"

interface IProps{
    children: React.ReactNode
}

export default function Layout({children} : IProps) {
  return (
    <>
        <main>
            {children}
        </main>
    </>
  )
}
