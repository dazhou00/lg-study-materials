/**
 * @param {ListNode} head
 * @return {LsitNode}
 */

var reverseList = function (head) {
  // 声明变量记录 prev、cur
  let prev = null;
  let cur = head;
  while (cur) {
    // 先保存当前节点的下一个节点
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};
