
export default function DashboardCard({ cardFront }) {
    return (
        <div className="basis-1/4 justify-item-center text-white">
            <div className="box-border h-64 w-56 p-4 bg-gradient-to-t from-dod-900 via-dod-500 to-dod-300 print:hidden rounded-md">
                {cardFront.img}
                <p>{cardFront.text}</p>
            </div>
        </div>
    );
}
