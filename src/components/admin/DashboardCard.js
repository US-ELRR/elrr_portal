import useStore from '@/store/store';

export default function DashboardCard({ importList }) {
    const userData = useStore((state) => state.userData);
    return (
        <div class="basis-1/4 justify-item-center text-white">
            <div class="box-border h-64 w-56 p-4 bg-gradient-to-t from-dod-900 via-dod-500 to-dod-300 print:hidden rounded-md">
                {importList.img}
                <p>{importList.text}</p>
            </div>
        </div>
    );
}
