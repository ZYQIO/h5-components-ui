# PowerShell 脚本
param(
    [Parameter(Mandatory=$true)]
    [string]$TargetProjectPath
)

# 获取脚本所在目录和项目根目录
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir

# 颜色定义
function Write-ColorMessage {
    param([string]$Message, [string]$Color = "Green")
    Write-Host "[Update Component] " -ForegroundColor $Color -NoNewline
    Write-Host $Message
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[Warning] " -ForegroundColor Yellow -NoNewline
    Write-Host $Message
}

# 检查目标路径是否存在
if (-not (Test-Path $TargetProjectPath)) {
    Write-Warning "目标项目路径不存在: $TargetProjectPath"
    exit 1
}

# 更新组件库
Write-ColorMessage "开始构建组件库..."
Set-Location $ProjectRoot
npm run build

Write-ColorMessage "发布到 yalc..."
yalc publish --push --replace

# 更新目标项目
Write-ColorMessage "更新目标项目..."
Set-Location $TargetProjectPath
yalc update my-h5-components --update-package

Write-ColorMessage "安装依赖..."
npm install

Write-ColorMessage "更新完成!" 