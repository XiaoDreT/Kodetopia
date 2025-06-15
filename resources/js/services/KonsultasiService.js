const API_BASE_URL = 'http://localhost:8000/api'; // Ganti jika base URL Laravel berbeda

const KonsultasiService = {
    store: async (data) => {
        try {
            const response = await fetch(`${API_BASE_URL}/store-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw result; // Lempar error yang bisa ditangani di UI
            }

            return result;
        } catch (error) {
            // Tangani kesalahan jaringan atau validasi
            throw error;
        }
    }
};

export default KonsultasiService;
