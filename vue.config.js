const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    configureWebpack: {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: undefined,
                        warnings: false,
                        parse: {},
                        compress: {},
                        mangle: true, // Note `mangle.properties` is `false` by default.
                        module: false,
                        output: null,
                        toplevel: false,
                        nameCache: null,
                        ie8: false,
                        keep_classnames: undefined,
                        keep_fnames: false,
                        safari10: false,
                    },
                }),
            ],
        },
    },
    chainWebpack: config => {
        // 添加规则来处理 PDF 文件
        config.module
            .rule('pdf')
            .test(/\.pdf$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/pdfs/[name].[hash:8].[ext]'
            });

        // 其他可能的配置调整...
    },
};
