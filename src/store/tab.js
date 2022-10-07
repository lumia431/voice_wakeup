
export default {
    state: {
        isCollapse: false,
        editableTabsValue: '1',
        editableTabs: [
            {
                title: '首页',
                name: '1',
                content: 'home'
            }
        ],
        tabIndex: 1
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        addTab(state, targetName) {
            var filter = state.editableTabs.filter((p) => {
                return p.content == targetName.content;
            });
            //已经存在tab
            if (filter != 0) {
                state.editableTabsValue = filter[0].name
                return
            }
            let newTabName = ++state.tabIndex + '';
            state.editableTabs.push({
                title: targetName.title,
                name: newTabName,
                content: targetName.content
            });
            state.editableTabsValue = newTabName;
        },
        removeTab(state, targetName) {
            --state.tabIndex
            let tabs = state.editableTabs;
            let activeName = state.editableTabsValue;
            //如果要删的元素在当前元素之前，当前位置向前移动一格
            if (targetName <= activeName) {
                let newIndex = new Number(activeName) - 1
                state.editableTabsValue = newIndex + ''
            }
            state.editableTabs = tabs.filter(tab => tab.name !== targetName);
            tabs.forEach((tab,index)=>{
                if(index + '' >= targetName){
                    tab.name = index + ''
                }
            })
        }
    }
}