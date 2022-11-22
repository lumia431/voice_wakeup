/** 
 * api接口的统一出口
 */
// 文章模块接口
import user from './user';
import file from './file';
import task from './task';
import voice from './voice';
import progress from './progress';
// 其他模块的接口……

// 导出接口
export default {
    user,
    file,
    task,
    voice,
    progress
    // ……
}