import { combineReducers } from 'redux';
import { Switch } from 'antd';

function test1(prevState: any, action: any): any {
    switch (action.type) {
        case 'test':
            return prevState + +action.value
        default:
            return 'test1'
    }
}
function test2(prevState: any, action: any): any {
    switch (action.type) {
        case 'test':
            return prevState + +action.value
        default:
            return 'test2'
    }

}

export default combineReducers({
    test1, test2
})