import { useEffect, useState } from "react";
import SocketApi from "../api/socket-api"


export const useConnectSocket = () => {

    const [data, setData] = useState('');
    
    const connectSocket = () => {
        SocketApi.createConnection();

        SocketApi.socket.on('', (info) => {
            setData(JSON.stringify(info));
        })
    }

    useEffect(() => {
        connectSocket();
    }, [])

    return {data};
}