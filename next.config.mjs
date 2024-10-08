/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'utfs.io' }],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                        },
                                    },
                                },
                            ],
                        },
                        svgProps: {
                            className: '',
                        },
                    },
                },
            ],
        });
        return config;
    },
};

export default nextConfig;
