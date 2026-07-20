export const getApiBaseUrl = (req) => {
    const codespaceName = process.env.CODESPACE_NAME;
    if (codespaceName) {
        return `https://${codespaceName}-8000.app.github.dev`;
    }
    if (req?.headers.host) {
        return `http://${req.headers.host}`;
    }
    return 'http://localhost:8000';
};
