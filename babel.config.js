
const defaultPresets = [
    '@babel/preset-react',
    [
        '@babel/preset-env',
        {
            modules: 'commonjs'
        }
    ]
];

const defaultPlugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-object-assign'
];

const productionPlugins = [
    [
        'transform-react-remove-prop-types',
        {
            mode: 'unsafe-wrap'
        }
    ],
    [
        '@babel/plugin-transform-react-inline-elements'
    ]
];

module.exports = {
    presets: defaultPresets,
    plugins: defaultPlugins,
    env: {
        production: {
            presets: [
                [
                    '@babel/preset-env'
                ]
            ],
            plugins: productionPlugins
        }
    }
};
