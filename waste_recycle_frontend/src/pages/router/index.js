import commonConfig from "../../wxcomponents/config/commonConfig";

uni.addInterceptor('request',{
    invoke(args){
        args.url = commonConfig.baseUrl + args.url;
    },
    success(args) {

    },
    fail(err) {
        console.log('interceptor-fail',err)
    },
    complete(res) {
        console.log('interceptor-complete',res)
    }
})

uni.addInterceptor('uploadFile',{
    invoke(args){
        args.url = commonConfig.baseUrl + args.url;
    },
    success(args) {

    },
    fail(err) {
        console.log('interceptor-fail',err)
    },
    complete(res) {
        console.log('interceptor-complete',res)
    }
})