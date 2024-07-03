const ws = new WebSocket('ws://localhost:3000')


ws.onmessage = a;

async function a(message) {
    console.log(message.data)
}