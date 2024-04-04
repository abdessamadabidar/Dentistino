"use client"
import {
	CheckCircledIcon,
	StopwatchIcon,
} from "@radix-ui/react-icons"

import {
	ColumnDef, ColumnFiltersState,
	flexRender,
	getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState,
	useReactTable,
} from "@tanstack/react-table"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import React from "react";
import {DataTablePagination} from "@/components/data-table-pagination.tsx";
import {DataTableViewOptions} from "@/components/data-table-view-options.tsx";
import {DataTableFacetedFilter} from "@/components/data-table-faceted-filter.tsx";
import Search from "@/components/search.tsx";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export function DataTable<TData, TValue>({columns, data,}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([])
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
	const [globalFilter, setGlobalFilter] = React.useState('')
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
			globalFilter,
		}
	})

	const handleTableSearchInputChange = (query: string) => {
		setGlobalFilter(query)
	}

	return (
		<div>
			<div className="flex items-center justify-between flex-nowrap py-4">
				<Search
					placeholder="Recherche..."
					value={globalFilter ?? ""}
					className="max-w-md"
					onChange={handleTableSearchInputChange}
				/>
				<div className="flex flex-nowrap items-center gap-x-2">
					{table.getColumn("status") && (
						<DataTableFacetedFilter
							column={table.getColumn("status")}
							title="Status"
							options={[
								{
									label: "servi",
									value: "servi",
									icon: CheckCircledIcon
								},
								{
									label: "en cours",
									value: "en cours",
									icon: StopwatchIcon
								}
							]}
						/>
					)}
					<DataTableViewOptions table={table} />

				</div>
			</div>
			<div className="rounded-md border mb-4">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									Aucun résultat.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<DataTablePagination table={table} />
		</div>
	)
}
