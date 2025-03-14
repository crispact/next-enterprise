import { Dialog, DialogPanel } from "@headlessui/react"
import Image from "next/image"
import React from "react"
import { Badge } from "@components//components/ui/badge"
import useAppStore from "../../store/app.store"
import { Pokemon } from "../../types/pokemon"

interface PokemonModalProps {
  pokemon: Pokemon
}

export default function Modal({ pokemon }: PokemonModalProps) {
  const { selectedPokemonId, setSelectedPokemonId } = useAppStore()
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  return (
    <Dialog
      open={selectedPokemonId !== ""}
      onClose={() => setSelectedPokemonId("")}
      transition
      className="fixed inset-0 flex w-screen items-center justify-center bg-black/75 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
    >
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="relative flex w-full max-w-lg flex-col items-center space-y-4 rounded-lg border-3 border-stone-500 bg-fuchsia-200 p-12 shadow-sm">
            <div className="absolute top-0 right-0 p-4">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset"
                onClick={() => setSelectedPokemonId("")}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 18L18 6M6 6l12 12" className="stroke-2" />
                </svg>
              </button>
            </div>
            <div className="px-3 pb-3 text-center">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
            </div>
            <Image src={imageUrl} alt={pokemon.name} width={250} height={350} className="rounded-t-lg" />
            <div>
              <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-900">Pokemon Information</h3>
              </div>
              <div className="mt-6 border-t-2 border-white">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Abilities</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <div className="flex flex-wrap items-center gap-x-2">
                        {pokemon.abilities.map((a) => (
                          <Badge key={a.ability.name} className="mb-2 bg-amber-600">
                            {a.ability.name}
                          </Badge>
                        ))}
                      </div>
                    </dd>
                  </div>
                  <div className="border-t-2 border-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Moves</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <div className="flex flex-wrap items-center gap-x-2">
                        {pokemon.moves.map((m) => (
                          <Badge key={m.move.name} className="mb-2 bg-indigo-600">
                            {m.move.name}
                          </Badge>
                        ))}
                      </div>
                    </dd>
                  </div>
                  <div className="border-t-2 border-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Forms</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <div className="flex flex-wrap items-center gap-x-2">
                        {pokemon.forms.map((f) => (
                          <Badge key={f.name} className="mb-2 bg-red-700">
                            {f.name}
                          </Badge>
                        ))}
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
