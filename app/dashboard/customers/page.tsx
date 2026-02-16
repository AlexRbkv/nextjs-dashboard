import { Metadata } from 'next';
import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import Table from "@/app/ui/customers/table";
import {Suspense} from "react";
import { fetchFilteredCustomers} from "@/app/lib/data";

export const metadata: Metadata = {
    title: 'Customers',
};

type InvoicesPageProps = PageProps<'/dashboard/customers'>;

export default async function Page(props: InvoicesPageProps) {
    const searchParams = await props.searchParams;
    const query = searchParams.query as string || '';
    const customers = await fetchFilteredCustomers(query);


    return (
        <Suspense fallback={<InvoicesTableSkeleton />}>
            <Table customers={customers} />
        </Suspense>
    )
}