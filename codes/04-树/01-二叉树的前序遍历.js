// var preorderTraversal = function (root) {
//   // 用于存储结果
//   const res = [];
//   // 设置函数用于递归
//   const preorder = (root) => {
//     // 当前节点为空
//     if (!root) return;

//     // 记录根节点值
//     res.push(root.val);
//     //前序遍历左子树
//     preorder(root.left);
//     // 前序遍历右子树
//     preorder(root.right);
//   };

//   preorder(root);

//   return res;
// };

const preorderTraversal = function (root) {
  const res = [];
  const stk = [];

  while (root || stk.length) {
    while (root) {
      // 右子节点入栈
      stk.push(root.right);
      // 记录根节点
      res.push(root.val);
      // 下一步处理左子节点
      root = root.left;
    }
    // 左子节点处理完毕，将 stk 出栈，处理右子树
    root = stk.pop();
  }

  return res;
};
