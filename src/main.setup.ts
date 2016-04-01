import ioc from "./ioc";
import CommunicationService from "./services/CommunicationService";

ioc.registerSingleton<ICommunicationService>("ICommunicationService", () => new CommunicationService());
