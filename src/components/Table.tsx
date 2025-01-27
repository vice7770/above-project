import React, { useMemo } from 'react';
import { flexRender, getCoreRowModel, useReactTable, createColumnHelper, type CellContext, type SortingState, getSortedRowModel, type SortingFn } from "@tanstack/react-table";
import { useNavigate } from 'react-router';

interface TVSeries {
    id: string;
    series: string;
    title: string;
    description: string;
    seasonNumber: number;
    episodeNumber: number;
    releaseDate: string;
    imdbId: string;
};

interface TableProps {
    data: TVSeries[];
    
}

const Table: React.FC<TableProps> = ({ data }) => {
    const columnHelper = createColumnHelper<TVSeries>()
    const navigate = useNavigate();
    const columns = useMemo(() => {
        return [
        columnHelper.accessor('id', {
            cell: info => info.getValue(),
            header: () => <span>Id</span>,
        }),
        columnHelper.accessor('series', {
            cell: info => info.getValue(),
            header: () => <span>Series</span>,
        }),
        columnHelper.accessor('title', {
            cell: info => info.getValue(),
            header: () => <span>Title</span>,
        }),
        columnHelper.accessor('seasonNumber', {
            cell: info => info.getValue(),
            header: () => <span>Season</span>,
        }),
        columnHelper.accessor('episodeNumber', {
            cell: info => info.getValue(),
            header: () => <span>Episode</span>,
        }),
      ]
    }, [data]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    
    })
    return (
        <div className="flex w-full h-full overflow-auto rounded-3xl border-4">
            <table className="w-full bg-gray-800 border-separate border-spacing-0 p-4">
            <thead className="justify-center">
                {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className="space-y-2">
                    {headerGroup.headers.map(header => (
                    <th className={`p-2 text-white text-center `}  key={header.id}>
                        {header.isPlaceholder ? null : (
                            <div
                                className={
                                header.column.getCanSort()
                                    ? 'cursor-pointer select-none'
                                    : ''
                                }
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                                {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                                }[header.column.getIsSorted() as string] ?? null}
                            </div>
                        )}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-cyan-400 space-y-2" onClick={() => navigate(`/details/${row.original.id}` as string)}>
                    {row.getVisibleCells().map(cell => (
                    <td className={`p-2 text-white text-center`} key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default Table;