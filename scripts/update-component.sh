#!/bin/bash

# 获取脚本所在目录的绝对路径
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# 获取项目根目录
PROJECT_ROOT="$SCRIPT_DIR/.."

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_message() {
    echo -e "${GREEN}[Update Component]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[Warning]${NC} $1"
}

# 检查参数
if [ -z "$1" ]; then
    print_warning "请提供目标项目路径"
    echo "使用方法: ./update-component.sh <目标项目路径>"
    exit 1
fi

TARGET_PROJECT_PATH="$1"

# 检查目标路径是否存在
if [ ! -d "$TARGET_PROJECT_PATH" ]; then
    print_warning "目标项目路径不存在: $TARGET_PROJECT_PATH"
    exit 1
fi

# 更新组件库
print_message "开始构建组件库..."
cd "$PROJECT_ROOT"
npm run build

print_message "发布到 yalc..."
yalc publish --push --replace

# 更新目标项目
print_message "更新目标项目..."
cd "$TARGET_PROJECT_PATH"
yalc update my-h5-components --update-package

print_message "安装依赖..."
npm install

print_message "更新完成! ✨" 