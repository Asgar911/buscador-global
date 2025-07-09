import { useState } from 'react';

export default function FlightSearch() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    return (
        <div className="p-4 bg-white rounded shadow max-w-md mx-auto mt-8">
            <h2 className="text-xl font-bold mb-4">Buscar vuelos business</h2>
            <form className="space-y-3">
                <input
                    type="text"
                    placeholder="Origen"
                    className="w-full border p-2 rounded"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Destino"
                    className="w-full border p-2 rounded"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
                <input
                    type="date"
                    className="w-full border p-2 rounded"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Buscar
                </button>
            </form>
        </div>
    );
}
