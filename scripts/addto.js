const cp = require("child_process");
const path = require("path");
const fs = require('fs');

function runProcess(server, params) {
    if (!server) return;
    let cpFun = cp.spawn;
    return cpFun(server, params || [], {
        shell: true,
        stdio: "inherit"
    });
}

async function initCreate() {
    let basepath = path.resolve(__dirname, "../");
    let componentName = process.argv[2];
    let componentPath = path.resolve(basepath, "./packages/", componentName);
    let readFiles = [path.resolve(basepath, "./packages/Demo/index.js"), path.resolve(basepath, "./packages/Demo/src/index.vue")]
    // 检查是否存在同名组件
    if (fs.existsSync(componentPath)) {
        console.log(`存在同名组件，不能创建`);
    } else {
        // 创建文件夹
        fs.mkdir(componentPath, (err) => {
            if (err) {
                console.log(`不能创建文件夹，错误原因:${err}`);
            }
        });
        fs.mkdir(componentPath + "/src", (err) => {
            if (err) {
                console.log(`${err}`);
            }
        });

        // 读取demo文件
        let file1 = fs.readFileSync(readFiles[0]).toString();
        fs.writeFileSync(`${componentPath}/index.js`, file1);
        let file2 = fs.readFileSync(readFiles[1]).toString();
        fs.writeFileSync(`${componentPath}/src/index.vue`, file2);
    }
}

initCreate();
