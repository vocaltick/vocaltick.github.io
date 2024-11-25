import winston, {
  LoggerOptions,
  transports,
  createLogger,
  format,
} from "winston";
import morgan from "morgan";

const logFormat = format.combine(
  format.timestamp(),
  format.errors({ stack: true }),
  format.splat(),
  format.json()
);

const loggerOptions: LoggerOptions = {
  level: process.env.NODE_ENV == "production" ? "info" : "debug",
  format: logFormat,
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.File({ filename: "server.log" }),
  ],
};

export const logger = createLogger(loggerOptions);

export const morganLogger = morgan(
  (tokens, req, res) => {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: tokens.status(req, res),
      responsetime: `${tokens["response-time"](req, res)}ms`,
    });
  },
  {
    stream: {
      write: (message: string) => logger.debug(message.trim()),
    },
  }
);
