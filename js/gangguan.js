function reloadPage() {
    window.location.href = "./index.html";
}

// Auto reload setelah 30 detik
setTimeout(() => {
    reloadPage();
}, 30000);