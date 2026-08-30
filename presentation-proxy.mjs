import http from 'node:http';

const proxyRequest = (targetPort, request, response) => {
  const proxy = http.request({
    hostname: '127.0.0.1',
    port: targetPort,
    path: request.url,
    method: request.method,
    headers: { ...request.headers, host: `127.0.0.1:${targetPort}` },
  }, (upstream) => {
    response.writeHead(upstream.statusCode || 502, upstream.headers);
    upstream.pipe(response);
  });

  proxy.on('error', (error) => {
    response.writeHead(502, { 'content-type': 'text/plain' });
    response.end(`Presentation proxy error: ${error.message}`);
  });

  request.pipe(proxy);
};

http.createServer((request, response) => {
  const targetPort = request.url?.startsWith('/api') ? 5000 : 3001;
  proxyRequest(targetPort, request, response);
}).listen(8080, '127.0.0.1', () => {
  console.log('Presentation proxy listening on http://127.0.0.1:8080');
});
