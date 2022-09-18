# fe-theme

前端主题切换方案

## less 变量

- 定制主题

  > 采用 less 定义了一系列的全局组件样式变量，通过 less 提供的 modifyVars 的方式进行覆盖变量。

  - 定义 less 样式变量，使用颜色变量

  ```less
  // default.less
  @text-color: red;

  // index.less
  .content {
    color: @text-color;
  }
  ```

  - 在编译时覆盖定义的样式

  ```js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            "style-loader",
            "css-loader"
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  modifyVars: {
                    "text-color": "blue"
                  }
                }
              }
            }
          ]
        }
      ]
    }
  };
  ```

- 动态切换主题

  > 通过动态修改 CSS Variable 实现，但是因为兼容问题。无法在 IE 中使用。

  - 定制颜色变量

  ```less
  // default.less
  @text-color: red;
  // dark.less
  @dark-text-color: #ccc;
  // variable.less
  @import "./default.less";
  @import "./dark.less";

  :root {
    --text-color: @text-color;
  }

  [data-theme="dark"] {
    --text-color: @dark-text-color;
  }
  ```

  - 使用颜色变量

  ```less
  @import "./variable.less";
  .content {
    color: ~"var(--text-color)";
    font-size: 20px;
  }
  ```

  - 通过覆盖变量来达到主题切换

  ```js
  export default function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
  ```
