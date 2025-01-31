import React, { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
  type CellContext,
  type SortingState,
  getSortedRowModel,
  type SortingFn,
} from "@tanstack/react-table";
import { useNavigate } from "react-router";

type Episode = {
  __typename?: "Episode";
  id: string;
  series: string;
  title: string;
  description: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
};

type ListEpisodes = Episode;

type TableProps = {
  data: (Episode | null)[] | null | undefined;
  loading: boolean;
};

const Table: React.FC<TableProps> = ({ data, loading }) => {
  const columnHelper = createColumnHelper<ListEpisodes>();
  const navigate = useNavigate();
  const columns = useMemo(() => {
    return [
      columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: () => <span>Id</span>,
      }),
      columnHelper.accessor("series", {
        cell: (info) => info.getValue(),
        header: () => <span>Series</span>,
      }),
      columnHelper.accessor("title", {
        cell: (info) => info.getValue(),
        header: () => <span>Title</span>,
      }),
      columnHelper.accessor("seasonNumber", {
        cell: (info) => info.getValue(),
        header: () => <span>Season</span>,
      }),
      columnHelper.accessor("episodeNumber", {
        cell: (info) => info.getValue(),
        header: () => <span>Episode</span>,
      }),
    ];
  }, [data]);

  const validatedData = useMemo(() => {
    return (
      data?.filter(
        (episode): episode is NonNullable<typeof episode> => episode !== null
      ) || []
    );
  }, [data]);

  const table = useReactTable({
    data: validatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <span className="text-white text-lg">Loading...</span>
        </div>
      )}
      <table className={`w-full border-separate border-spacing-0 p-4 ${loading ? 'blur-sm' : ''}`}>
        <thead className="justify-center">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="space-y-2">
              {headerGroup.headers.map((header) => (
                <th className={`p-2 text-white text-center `} key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const original = row.original;
            const rowId = (original as unknown as { id: string } | null)?.id;
            const episodeName = (
              original as unknown as { title: string } | null
            )?.title;
            return (
              <tr
                key={rowId}
                className="hover:bg-cyan-400 space-y-2"
                onClick={() => navigate(`/details/${episodeName}`)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td className={`p-2 text-white text-center`} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
