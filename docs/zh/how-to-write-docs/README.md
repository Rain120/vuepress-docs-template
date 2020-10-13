## 如何写文档? <Badge text='Important' type='warning'/>

::: tip
文档的规范, 以及如何方便快捷的书写 ✍️ 文档
:::

## 新建文件

在`docs/zh`中新建一个文件, 并新建一个 `README.md`的文件

::: danger
请保证每一个文件夹都有一个 `README.md`文件
:::

**手动创建**

```sh
touch docs/zh/test/README.md
```

**自动生成 `docs model`**
```sh
npm run docs
```

```sh
? please input the docs model name:  model
? please input the docs model alias name (default same as model name)? 
? generator model path (etc: docs/zh/model) ? docs/zh
```

`Eg: File Path`

```sh
├── guide
│   └── README.md
├── how-to-config-docs
│   └── README.md
└── how-to-write-docs
    └── README.md
```

## 配置别名

### 简约配置方式

::: tip
通过使用 [新建文件](#新建文件) 的脚本来动态配置 `alias`, 妈妈再也不用担心我找不到配置了。
:::

我们不支持中文名文件夹, 所以你需要给文件名配置别名, 只需要在 `docs/.vuepress/utils/alias.js` 中配置 `key-value`值即可

::: tip
`alias` 的顺序就是文档的顺序
```
Eg:
  p2: p2
  p1: p1
  p1-c2: p1-c2
  p1-c1: p1-c1
  -> 菜单顺序是
  p2
  p1
    c2
    c1
```
:::

<<< @/docs/.vuepress/utils/alias.json

## 图片

`~@images`路径 `->` 根路径

```md
![images.png](~@images/src/xxx)
```

`Eg:`

```md
![wechat-zhifubao-pay.png](~@images/wechat-zhifubao-pay.png)
```

![wechat-zhifubao-pay.png](~@images/wechat-zhifubao-pay.png)

## 导入代码块

你可以在文档中展示你的代码, 只需要使用下面方式即可

```md {highlight number}
<<< @/filepath
```

**Note:** `filepath`是你文档的路径

`Eg:`

```md {1}
<<< @/scripts/deploy.sh
```

<<< @/scripts/deploy.sh {13}

## 数学公式

你可以在文档中使用 **`markdown`** 来书写一下数学公式

```md
$$
y=\begin{cases}
-x,\quad x\leq 0 \\\\
x,\quad x>0
\end{cases}
$$
```

$$
y=\begin{cases}
-x,\quad x\leq 0 \\\\
x,\quad x>0
\end{cases}
$$

## Badge 徽章

- **Props:**

  - `text - string`

  - `type - string`, 可选值: `'tip' | 'warning' | 'error'`, 默认值是: `'tip'`

  - `vertical - string`, 可选值: `'top' | 'middle'`, 默认值是: `'top'`

- **Usage:**

你可以在标题中, 使用这个组件来为某些 API 添加一些状态：

```md
Badge <Badge text='默认主题' /> <Badge text='warning' type='warning'/> <Badge text='error' type='error'/>
```

Badge <Badge text='默认主题' /> <Badge text='warning' type='warning'/> <Badge text='error' type='error'/>

## 自定义容器

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

:::theorem 换个名字
自定义的容器哦~, [Here](../../.vuepress/utils/plugins.js)

:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

:::theorem 换个名字
自定义的容器哦~, [Here](../../.vuepress/utils/plugins.js)
:::

<<< @/docs/.vuepress/utils/plugins.js{3}

## Math Latex

### 行内语法
使用单个 `$` 围绕一段 `latex` 语法进行内联渲染。

输入:

```md
$e^{i\pi}+1=0$
```

输出:

$e^{i\pi}+1=0$

### 块语法

块语法使用两个符号 `$$`，它将会带来更大的符号和居中显示。

输入:

```md
$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
```
输出:

$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$

## Emoji

```md
:tada: :100:
```

:tada: :100:

## GitHub Action 配置

首先, 先在 [Here](https://github.com/settings/tokens) 生成 `personal access token`, 然后在你的项目中设置 `secrets` 即可, 地址是 `https://github.com/Rain120/` **your-project-name** `/settings/secrets`

![personal-access-token.png](~@images/docs/zh/how-to-write-docs/images/personal-access-token.png)

![new-secrects.png](~@images/docs/zh/how-to-write-docs/images/new-secrects.png)
