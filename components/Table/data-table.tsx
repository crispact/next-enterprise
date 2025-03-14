"use client"

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import React, { memo } from "react"
import { useShallow } from "zustand/react/shallow"
import { Button } from "@components/components/ui/button"
import { Input } from "@components/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/components/ui/table"
import { PokemonResult } from "@components/Table/columns"
import useAppStore from "../../store/app.store"

interface DataTableProps {
  columns: ColumnDef<PokemonResult>[]
  data: PokemonResult[]
  rowCount: number | undefined
}

const DataTable = memo(function DataTable({ columns, data, rowCount }: DataTableProps) {
  const { pagination, setPagination, searchText, setSearchText, setSearch } = useAppStore(
    useShallow((state) => ({
      pagination: state.pagination,
      setPagination: state.setPagination,
      searchText: state.searchText,
      setSearchText: state.setSearchText,
      setSearch: state.setSearch,
    }))
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount,
    // pageCount: pageIndex,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (updater) => {
      const newValue = updater instanceof Function ? updater(pagination) : updater
      setPagination(newValue)
    },
    state: {
      pagination,
    },
  })

  return (
    <div>
      <div className="flex items-center p-4">
        <Input
          placeholder="Search pokemon..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="max-w-sm border-2 bg-cyan-200"
        />
        <Button
          className="ml-3 cursor-pointer border-1 border-cyan-950 bg-cyan-600 text-blue-100 hover:bg-cyan-900 hover:text-white"
          onClick={() => setSearch(searchText)}
        >
          Buscar
        </Button>
      </div>
      <div className="bac bfg rounded-md border-4 bg-emerald-200">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="flex justify-center border-t-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-evenly space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!(table.getCanPreviousPage() && table.getRowCount() > 1)}
            className="ml-3 w-[100px] cursor-pointer bg-cyan-600 p-[25px] text-blue-100 hover:bg-cyan-900 hover:text-white"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="mr-3 ml-3 w-[100px] cursor-pointer bg-cyan-600 p-[25px] text-blue-100 hover:bg-cyan-900 hover:text-white"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
})

export default DataTable
