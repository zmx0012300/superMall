module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',//@已经配置为src
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network'
            }
        }
    }
}