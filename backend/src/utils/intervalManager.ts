import { Socket } from "socket.io";

type clientData = {
  intervalId: NodeJS.Timeout;
  messageIndex: number;
};

export default class IntervalManager {
  private static instance: IntervalManager;
  private clientData = new Map<Socket, clientData>();
  private constructor() {}

  public static getInstance(): IntervalManager {
    if (!IntervalManager.instance) {
      IntervalManager.instance = new IntervalManager();
    }
    return IntervalManager.instance;
  }

  public addClient(
    socket: Socket,
    intervalId: NodeJS.Timeout,
    messageIndex: number
  ) {
    this.clientData.set(socket, { intervalId, messageIndex });
  }

  public getClient(socket: Socket): clientData | undefined {
    return this.clientData.get(socket);
  }

  public updateMessageIndex(socket: Socket, messageIndex: number) {
    const client = this.getClient(socket);
    if (client) {
      client.messageIndex = messageIndex;
      this.clientData.set(socket, client);
    }
  }
  public clearInterval(socket: Socket) {
    const client = this.getClient(socket);
    if (client) {
      clearInterval(client.intervalId);
      this.clientData.delete(socket);
    }
  }
  public clearAllIntervals() {
    this.clientData.forEach(({ intervalId }) => clearInterval(intervalId));
    this.clientData.clear();
  }

  public restoreIntervals(
    sendMessageFn: (socket: Socket, messageIndex: number) => void,
    intervalTime: number
  ) {
    this.clientData.forEach((client, socket) => {
      const restoredInterval = setInterval(() => {
        sendMessageFn(socket, client.messageIndex);
      }, intervalTime);
      this.addClient(socket, restoredInterval, client.messageIndex);
    });
  }
}
