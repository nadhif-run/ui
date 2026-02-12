async function getData() {
    try {
        const response = await fetch('https://semioratorical-unbreakably-dacia.ngrok-free.dev/');
        
        if (!response.ok) {
            throw new Error("Sistem sedang dalam pemeliharaan");
        }

        // window.location.href = "https://semioratorical-unbreakably-dacia.ngrok-free.dev/";
        window.location.href = "./dashboard.html";

    } catch (error) {
        console.error('Error:', error);
        window.location.href = "./gangguan.html";
    }
}

setTimeout(() => {
    getData();
}, 2000);