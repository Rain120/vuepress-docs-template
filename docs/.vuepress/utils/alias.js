/*
 * @Author: Rainy
 * @Date: 2020-02-27 16:38:27
 * @LastEditors: Rainy
 * @LastEditTime: 2020-06-25 17:51:44
 */

/**
 * @description 特殊处理文档顺序
 * alias 的顺序决定了文档菜单的目录顺序，子菜单亦可
 * Eg:
 * p2: p2
 * p1: p1
 * p1-c2: p1-c2
 * p1-c1: p1-c1
 * -> 菜单顺序是
 * p2
 * p1
 *   c2
 *   c1
 */
const alias = {
  'guide': '介绍',
  'how-to-config-docs': '如何配置文档? ',
  'how-to-write-docs': '如何写文档? ',
};

module.exports = {
  alias,
}
