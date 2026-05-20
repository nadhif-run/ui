async function getData() {
    try {
        // const response = await fetch('http://192.168.1.4/thorix/');
        
        // if (!response.ok) {
        //     throw new Error("Sistem sedang dalam pemeliharaan");
        // }

        // window.location.href = "https://semioratorical-unbreakably-dacia.ngrok-free.dev/";
        window.location.replace("http://192.168.1.4/storage/");

    } catch (error) {
        console.error('Error:', error);
        window.location.href = "./gangguan.html";
    }
}

setTimeout(() => {
    getData();
}, 2000);
