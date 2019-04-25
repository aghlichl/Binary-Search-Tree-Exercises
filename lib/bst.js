class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null;
    }


    insert(val, root=this.root){
        if(!this.root){
            this.root = new TreeNode(val)
        }
        else{
            if(val < root.val)
            {
                if(!root.left){
                     root.left = new TreeNode(val)
                }
                else{
                    this.insert(val, root.left)

                }

            }
            else if (val >= root.val)
            {
                if(!root.right){
                    root.right = new TreeNode(val)
                }
                else{
                    this.insert(val, root.right)

                }

            }
        }

    }


    searchRecur(val, root = this.root){
        if (!root) {
            return false;
        }
        if(val === root.val){
            return true;
        }
        else {
            if (val < root.val) {
                if (!root.left) {
                    return false;
                }
                else {
                    return this.searchRecur(val, root.left)
                }

            }
            else if (val >= root.val) {
                if (!root.right) {
                    return false;
                }
                else {
                    return this.searchRecur(val, root.right)
                }

            }
        }

    }

    searchIter(val){
        let currentNode = this.root;
        if(!this.root){
            return false;
        }
        else{
            while(currentNode)
            {
                if (val === currentNode.val) {
                    return true;
                }
                if (val < currentNode.val) {
                    if (!currentNode.left) {
                        return false;
                     }
                     else{
                         currentNode = currentNode.left
                     }
             

            }
                else if (val >= currentNode.val) {
                 if (!currentNode.right) {
                     return false;
                 }
                 else {
                     currentNode = currentNode.right
                 }
                

            }
        }


        }

    }
   
}

module.exports = {
    TreeNode,
    BST
};