var detecCycle = function (head) {
  if (head === null || head.next === null) return null;

  // 声明快慢指针
  let slow = head;
  let fast = head;

  while (fast !== null) {
    // 慢指针移动一位
    slow = slow.next;
    // 如果满足条件，说明 fast 为尾部节点，不存在环
    if (fast.next === null) return null;

    // 快指针每次移动两位
    fast = fast.next.next;

    // 检测是否有环
    if (fast === slow) {
      // 找到环的起点
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }

      return ptr;
    }
  }

  // while 结束，说明 fast 为 null，说明链表没有环
  return null;
};
