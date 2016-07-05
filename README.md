## NCUHOME代码规范 

### 为什么要有团队代码规范？  
虽然这些细节是小事，不会有体验或者性能上的优化，但是却体现了一个coder和团队的专业程度。  
同时统一的代码规范，有利于后期的维护，增加阅读他人代码的便利性等。  

团队愿景：成为国内大学卓越的开发团队！  
所以不管团队有多少人，代码风格都应该师出同门！ 

### TODO

1. 修改部分不适合我们的/语义不明的规范
2. 加入Node.js与ES6规范（50%）
3. 配置lint文件, 已完成。使用Vue的代码规范。
4. 重写页面生成器，从Ruby搬迁至Node

## 使用：
下载本目录下的.eslintrc，放入项目根目录。  

## 配置eslint
电脑安装Node.js。
Sublime Text 安装 **Sublime​Linter** 插件,和 **Sublime​Linter-contrib-eslint** 。  

## 代码格式化（修改老代码）
Sublime Text 安装 **HTML-CSS-JS Prettify** 插件。  
然后进鼠标点击右键 > HTML/CSS/JS Prettify > Set Prettify Preferences  
将下面的代码粘贴进去  
```javascript
{
  // The plugin looks for a .jsbeautifyrc file in the same directory as the
  // source file you're prettifying (or any directory above if it doesn't exist,
  // or in your home folder if everything else fails) and uses those options
  // along the default ones.

  // Details: https://github.com/victorporof/Sublime-HTMLPrettify#using-your-own-jsbeautifyrc-options
  // Documentation: https://github.com/einars/js-beautify/
  "html": {
    "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg", "vue", "hbs"],
    "brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
    "end_with_newline": false, // End output with newline
    "indent_char": " ", // Indentation character
    "indent_handlebars": false, // e.g. {{#foo}}, {{/foo}}
    "indent_inner_html": false, // Indent <head> and <body> sections
    "indent_scripts": "keep", // [keep|separate|normal]
    "indent_size": 2, // Indentation size
    "max_preserve_newlines": 0, // Maximum number of line breaks to be preserved in one chunk (0 disables)
    "preserve_newlines": true, // Whether existing line breaks before elements should be preserved (only works before elements, not inside tags or for text)
    "unformatted": ["a", "span", "img", "code", "pre", "sub", "sup", "em", "strong", "b", "i", "u", "strike", "big", "small", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], // List of tags that should not be reformatted
    "wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
  },
  "css": {
    "allowed_file_extensions": ["css", "scss", "sass", "less"],
    "end_with_newline": false, // End output with newline
    "indent_char": " ", // Indentation character
    "indent_size": 2, // Indentation size
    "newline_between_rules": true, // Add a new line after every css rule
    "selector_separator": " ",
    "selector_separator_newline": true // Separate selectors with newline or not (e.g. "a,\nbr" or "a, br")
  },
  "js": {
    "allowed_file_extensions": ["js", "json", "jshintrc", "jsbeautifyrc"],

    // Set brace_style
    //  collapse: (old default) Put braces on the same line as control statements
    //  collapse-preserve-inline: (new default) Same as collapse but better support for ES6 destructuring and other features. https://github.com/victorporof/Sublime-HTMLPrettify/issues/231
    //  expand: Put braces on own line (Allman / ANSI style)
    //  end-expand: Put end braces on own line
    //  none: Keep them where they are
    "brace_style": "collapse-preserve-inline",

    "break_chained_methods": false, // Break chained method calls across subsequent lines
    "e4x": false, // Pass E4X xml literals through untouched
    "end_with_newline": false, // End output with newline
    "indent_char": " ", // Indentation character
    "indent_level": 0, // Initial indentation level
    "indent_size": 2, // Indentation size
    "indent_with_tabs": false, // Indent with tabs, overrides `indent_size` and `indent_char`
    "jslint_happy": false, // If true, then jslint-stricter mode is enforced
    "keep_array_indentation": false, // Preserve array indentation
    "keep_function_indentation": false, // Preserve function indentation
    "max_preserve_newlines": 0, // Maximum number of line breaks to be preserved in one chunk (0 disables)
    "preserve_newlines": true, // Whether existing line breaks should be preserved
    "space_after_anon_function": true, // Should the space before an anonymous function's parens be added, "function()" vs "function ()"
    "space_before_conditional": true, // Should the space before conditional statement be added, "if(true)" vs "if (true)"
    "space_in_empty_paren": false, // Add padding spaces within empty paren, "f()" vs "f( )"
    "space_in_paren": false, // Add padding spaces within paren, ie. f( a, b )
    "unescape_strings": false, // Should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"
    "wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
  }
}
```

最后鼠标点击右键 > HTML/CSS/JS Prettify > Prettify Code  

## 双引号转单引号
Sublime Text 安装 **String​Utilities** 插件。  
全选然后鼠标点击右键 > String​ Utilities > Convert Double Quotes To Single　　
最后根据eslint的提示，对修改不当的地方，进行修补。

##　注释后加空格
错误：　//这是注释
正确：　// 这是注释

修改方式：
Sublime Text选中　//，按 alt+f3选择所有//。移动光标，加入空格。　　
即完成了对文档中所有注释的修改。

### 运行
ubuntu安装ruby-dev

使用gem安装jekyll,rouge

命令行使用jekyll build即可生成html文件

或者修改后上传至git。也可以自动生成静态页面。

### 感谢
感谢腾讯[AlloyTeam](https://github.com/AlloyTeam/CodeGuide)的代码规范，对我们的帮助很大。    
规范根据团队实际情况，有所修改。

### License
The MIT License (MIT)

Copyright (c) 2016 NCUHOME

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
