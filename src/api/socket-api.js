import io, {Socket} from "socket.io-client";

class SocketApi {
    static socket = null;

    static createConnection() {
        this.socket = io("ws://localhost:8000/ws/game/?token=", {
            
        });

        this.socket.on("connect", () => {
            console.log('Connected SocketApi')
        })

        this.socket.on("disconnect", (e) => {
            console.log('Disconnected SocketApi')
        })
    }
}

export default SocketApi;