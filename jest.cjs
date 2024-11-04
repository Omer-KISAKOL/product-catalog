module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Bu dosyada gerekli ayarları yapabilirsiniz
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    transformIgnorePatterns: ["/node_modules/"],
};
