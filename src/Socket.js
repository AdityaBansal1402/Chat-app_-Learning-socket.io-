import { io } from 'socket.io-client';


useEffect(() => {
    if (!socketRef.current) {
      const socket = io('http://localhost:5000');
      socketRef.current = socket;

      socket.on('connect', () => {
        console.log("Connected with ID:", socket.id);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, []);