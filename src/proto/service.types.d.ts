import * as $protobuf from "protobufjs";
/** Namespace service. */
export namespace service {

    /** Represents a Service */
    class Service extends $protobuf.rpc.Service {

        /**
         * Constructs a new Service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Service;

        /**
         * Calls searchCustomerAndStore.
         * @param request RequestData message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public searchCustomerAndStore(request: service.IRequestData, callback: service.Service.searchCustomerAndStoreCallback): void;

        /**
         * Calls searchCustomerAndStore.
         * @param request RequestData message or plain object
         * @returns Promise
         */
        public searchCustomerAndStore(request: service.IRequestData): Promise<service.Response>;
    }

    namespace Service {

        /**
         * Callback as used by {@link service.Service#searchCustomerAndStore}.
         * @param error Error, if any
         * @param [response] Response
         */
        type searchCustomerAndStoreCallback = (error: (Error|null), response?: service.Response) => void;
    }

    /** Properties of a RequestData. */
    interface IRequestData {

        /** RequestData id */
        id?: (string|null);
    }

    /** Represents a RequestData. */
    class RequestData implements IRequestData {

        /**
         * Constructs a new RequestData.
         * @param [properties] Properties to set
         */
        constructor(properties?: service.IRequestData);

        /** RequestData id. */
        public id: string;

        /**
         * Creates a new RequestData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestData instance
         */
        public static create(properties?: service.IRequestData): service.RequestData;

        /**
         * Encodes the specified RequestData message. Does not implicitly {@link service.RequestData.verify|verify} messages.
         * @param message RequestData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: service.IRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestData message, length delimited. Does not implicitly {@link service.RequestData.verify|verify} messages.
         * @param message RequestData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: service.IRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): service.RequestData;

        /**
         * Decodes a RequestData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): service.RequestData;

        /**
         * Verifies a RequestData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestData
         */
        public static fromObject(object: { [k: string]: any }): service.RequestData;

        /**
         * Creates a plain object from a RequestData message. Also converts values to other types if specified.
         * @param message RequestData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: service.RequestData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response responseCode */
        responseCode?: (number|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: service.IResponse);

        /** Response responseCode. */
        public responseCode: number;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: service.IResponse): service.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link service.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: service.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link service.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: service.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): service.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): service.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): service.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: service.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
