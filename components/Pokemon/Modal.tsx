import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import Image from "next/image"
import React from "react"
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
          <DialogPanel className="flex w-full max-w-lg flex-col items-center space-y-4 rounded-lg border-3 border-stone-500 bg-fuchsia-200 p-12 shadow-sm">
            <div className="mt-[-20px] flex w-100 justify-end">
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
                      <ul>
                        {pokemon.abilities.map((a) => (
                          <li key={a.ability.name}>{a.ability.name}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="border-t-2 border-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Moves</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <ul>
                        {pokemon.moves.map((m) => (
                          <li>{m.move.name}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div className="border-t-2 border-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm/6 font-medium text-gray-900">Forms</dt>
                    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <ul>
                        {pokemon.forms.map((f) => (
                          <li>{f.name}</li>
                        ))}
                      </ul>
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
