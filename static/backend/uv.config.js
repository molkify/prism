self.__uv$config = {
    prefix: '/go/',
    bare:'https://bare.benrogo.net/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/backend/uv.handler.js',
    bundle: '/static/backend/uv.bundle.js',
    config: '/static/backend/uv.config.js',
    sw: '/static/backend/uv.sw.js',
};
