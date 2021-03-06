const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    size: state => state.app.size,
    device: state => state.app.device,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    muenroles:state=>state.user.muenroles,

    name: state => state.user.name,
    userInfo: state => state.user.userInfo,

    introduction: state => state.user.introduction,
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes,
    addRouters: state => state.permission.addRouters,
    errorLogs: state => state.errorLog.logs,
}
export default getters
