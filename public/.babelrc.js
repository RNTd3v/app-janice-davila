const env = require('./env-config.js')

module.exports = {
    presets: [
        "next/babel"
    ],
    plugins: [
        ["babel-plugin-styled-components", {
            "ssr": true,
            "displayName": true,
            "preprocess": false
        }],
        [
            "babel-plugin-root-import", {
                "rootPathSuffix": "src"
            }
        ],
        ["transform-define", env],
        "emotion"
    ]
}