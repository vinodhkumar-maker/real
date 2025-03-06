import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useFetchCart } from "../../querys";
import { CartArray } from "../../apiType";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";



const ProductCart: React.FC = () => {
    const { data, isLoading } = useFetchCart();
    console.log('data', data);


    const columnHelper = createColumnHelper<CartArray>();
    const columns = [
        columnHelper.accessor('id', {
            header: 'ID',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('date', {
            header: 'Date',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('products', {
            header: 'Product',
            cell: (info) => {
                const productsData = info.getValue() as { productId: string | number; quantity: string | number; }[];
                return (
                    <ul>

                        {productsData.map((product: { productId: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; quantity: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                            <li key={index}>
                                Product ID: {product.productId}, Quantity: {product.quantity}
                            </li>
                        ))}
                    </ul>
                );
            },
        }),];

    const table = useReactTable({
        data: data ? [data] : [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            ProductCart
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductCart;
