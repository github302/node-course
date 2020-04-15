const fs = require('fs-extra');
const path = require('path');
const glob = require('fast-glob');
const { isObject } = require('lodash');

function buildEntries() {
    const output = path.resolve(__dirname, 'dist/main.js');
    const template = getTemplate();
    fs.writeFileSync(output, template, 'utf-8');
}

function getTemplate() {
    const components = glob.sync(path.resolve(__dirname, './study/**/index.js'));
    const vueComponents = glob.sync(path.resolve(__dirname, './study/**/App.vue'));
    const importComp = transformToImport(vueComponents);

    // console.log('getTemplate', components, vueComponents);
    console.log(importComp);
    return `import index from './index'`;
}

function transformToImport(items) {
    return items.map((item) => {
        const filePath = item.toString();
        const importPath = path.relative(path.resolve('node_modules/.mall-cloud-temp'), filePath).split(path.sep).join("/");
        console.log('relative=', path.relative(path.resolve('node_modules/.mall-cloud-temp'), filePath));
        console.log('importPath=', importPath);
        const dirPathArr = filePath.split('/');
        const fileName = dirPathArr.pop();
        const compName = dirPathArr.pop();
        dirPathArr.pop();
        const pageName = dirPathArr.pop();
        const name = fileName.split(".").pop() === 'vue' ? `${pageName}${compName}` : fileName.replace(/\.(vue|js)$/, '');
        const importName = name.replace(/[^\w]+(\w)/g, (input, arg1) => arg1.toUpperCase());
        return `import ${importName} from '${importPath}}';`
    })
}

async function globFiles() {
    let dirList = [
        path.resolve(__dirname, 'middleware'),
        path.resolve(__dirname, 'routes'),
        path.resolve(__dirname, 'study'),
    ]
    for (let dir of dirList) {
        let jsFileList = await glob(['**/*.js'], {
            cwd: dir,
        });
        console.log(jsFileList);
        for (let jsFile of jsFileList) {
            console.log(path.join(dir, jsFile));
            let obj = require(path.join(dir, jsFile));
            if (!isObject(obj) || !isObject(obj.defaule)) {
                console.log(jsFile, 'is not Object');
            } else {
                console.log(jsFile, 'is Object');
            }
        }
    }
    await fs.ensureDir(userhome('jsworkspace/node-course/data')); // 确保目录存在，若不存在则创建一个
    const config = await fs.readJSON(userhome('jsworkspace/node-course/config.json'));
    console.log(config);
}
globFiles();

function userhome(relativePath) {
    const home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']; // /Users/xiaoying
    console.log(home); 
    const userPath = path.resolve(home, relativePath); // /Users/xiaoying/.xiaoshuai/log
    console.log(userPath);
    return userPath;
}
// userhome('.xiaoshuai/log');