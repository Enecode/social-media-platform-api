import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 }); // Example port, adjust as needed

export function sendNotification(userId: string, notification: Notification): void {
  wss.clients.forEach(client => {
    if (client.userId === userId && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(notification));
    }
  });
}
