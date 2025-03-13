import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import Card from "@components/Pokemon/Card"

export type PokemonResult = {
  name: string
  url: string
}

const columnHelper = createColumnHelper<PokemonResult>()

export const getColumnsDefinition = (handler: (id: string) => void): ColumnDef<PokemonResult>[] => [
  columnHelper.display({
    id: "name",
    cell: (props) => {
      const name = props.row.original.name as string
      const url = props.row.original.url as string
      const pokemonId = String(url.split("/")[url.split("/").length - 2])
      console.log("pokemonId", pokemonId)
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`

      return (
        <>
          <Card name={name} imageSource={imageUrl} id={pokemonId} key={pokemonId} handler={handler}></Card>
        </>
      )
    },
  }),
]
