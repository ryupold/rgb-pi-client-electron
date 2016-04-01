import ioc from "../ioc";

export default class CommunicationService implements ICommunicationService {

    constructor(com: ICommunicationService = ioc.resolve<ICommunicationService>("ICommunicationService")) {

    }

    public send(request: any): any {
        //TODO: do request
    }
}