import Image from "next/image"
import React from "react"

export type PokemonCardProps = {
  name: string
  imageSource: string
  id: string
  handler: (id: string) => void
}

export default function Card({ name, imageSource, id, handler }: PokemonCardProps) {
  return (
    <div className="flex w-full max-w-sm flex-col rounded-lg border-3 border-stone-500 bg-yellow-300 shadow-sm">
      <button className="flex cursor-pointer flex-col items-center" onClick={() => handler(id)}>
        <Image src={imageSource} alt={name} width={250} height={350} className="rounded-t-lg p-8" />

        <div className="px-5 pb-5 text-center">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </div>
      </button>
    </div>
  )
}
