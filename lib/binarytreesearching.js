// This is not full source code.

// Node {
//   data: 20,
//   left:
//     Node: {
//       data: 10,
//       left: Node { data: 8, left: [Object], right: null},
//       right: Node { data: 12, left [Object], right: [Object]}
//     },
//   right:
//     Node: {
//       data: 30,
//       left: Node { data: 25, left [Object], right: null},
//       right: Node { data: 40, left: null, right: null}
//     }
//
// }



this.isPresent = function(root, val) {
  if (val === root.data) {
    return 1;
  } else if (val > root.data && root.right) {
    return this.isPresent(root.right, val);
  } else if (val < root.data && root.left) {
    return this.isPresent(root.left, val);
  } else {
    return 0
  }
};

this.isPresent = function(root, val) {
  var node = root
  while(node) {
    if (node.data === val) {
      return 1
    } else {
      if(val > node.data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
  }
  return 0;
};

// this.isPresent = function(root, val) {
//         while(root && root.data !== val) {
//             root.data < val ? root = root.right : root = root.left;
//         }
//         return root ? 1 : 0;
// };
