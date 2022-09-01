
const zigZag =(root) =>{
    let results =[];

    const traverse=(root,level) ={
        if(!root) return;
        if(results[level]){
        results[level].push(root.val)
        }else{
            results[level] =[root.val]
        }

        traverse(root.left, level+1);
        traverse(root.right, level+1);
    }
    traverse(root,0)
    return results.map((b,i) => (i%2)?b.reverse():b)

}