/****************************************************************
 *             CODERBYTE SCALE BALANCING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ScaleBalancing(strArr) read strArr which   *
 * will contain two elements, the first being the two positive  *
 * integer weights on a balance scale (left and right sides)    *
 * and the second element being a list of available weights as  *
 * positive integers. Your goal is to determine if you can      *
 * balance the scale by using the least amount of weights from  *
 * the list, but using at most only 2 weights.                  *
 *                                                              *
 * For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then    *
 * this means there is a balance scale with a weight of 5 on    *
 * the left side and 9 on the right side. It is in fact         *
 * possible to balance this scale by adding a 6 to the left     *
 * side from the list of weights and adding a 2 to the right    *
 * side. Both scales will now equal 11 and they are perfectly   *
 * balanced.                                                    *
 *                                                              *
 * Your program should return a comma separated string of the   *
 * weights that were used from the list in ascending order,     *
 * so for this example your code should return the string 2,6   *
 *                                                              *
 * There will only ever be one unique solution and the list of  *
 * available weights will not be empty. It is also possible to  *
 * add two weights to only one side of the scale to balance it. *
 * If it is not possible to balance the scale then your program *
 * should return the string not possible.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[3, 4]", "[1, 2, 7, 7]"]                          *
 * Output 1: 1                                                  *
 *                                                              *
 * Input 2: ["[13, 4]", "[1, 2, 3, 6, 14]"]                     *
 * Output 2: 3,6                                                *
 *                                                              *
 ***************************************************************/

let arr=["[5, 9]", "[1, 2, 6, 7]"]
function scale(arr)
{
    let [arr1,arr2]=arr;
let leftarray=JSON.parse(arr1)
let rightarray=JSON.parse(arr2)
let result;
rightarray.map((e,idx,arr)=>{
    let newleftweight=arr[idx]+leftarray[0]
    if(arr[idx]+leftarray[0]==leftarray[1] ||arr[idx]+leftarray[1]==leftarray[0])
    {
        result=arr[idx];
        console.log("result"+result)
        return result;
        
    }
    
 rightarray.map((e,idxes,arr2)=>{
        let rightsideweight=arr2[idxes]+leftarray[1]
        // console.log(rightsideweight+'right side')
      if(rightsideweight==newleftweight)
      {
        result= [arr[idx],arr2[idxes]].sort((a,b)=>a-b).join(',')
        return result;
      }
    })
    }
    // console.log(newleftweight+"left side")
   
    
    


)

return result ?? "not possible";
}
console.log(scale(["[5, 9]", "[1, 2, 6, 7]"]))
console.log(scale(['[3, 4]', '[1, 2, 7, 7]']))
console.log(scale(['[13, 4]', '[1, 2, 3, 6, 14]']))




function ScaleBalancing(strArr) {
  // Parse the input strings
  const [balanceStr, weightsStr] = strArr;
  const [leftWeight, rightWeight] = JSON.parse(balanceStr);
  console.log(leftWeight)
  console.log(rightWeight)
  const availableWeights = JSON.parse(weightsStr);
  console.log(availableWeights)

  // Try adding one weight to each side and check if the scale balances
  for (const weight1 of availableWeights) {
    const newLeft = leftWeight + weight1;
    if (newLeft === rightWeight) {
      return weight1.toString();
    }

    for (const weight2 of availableWeights) {
      const newRight = rightWeight + weight2;
      if (newLeft === newRight) {
        return [weight1, weight2].sort((a, b) => a - b).join(',');
      }
    }
  }

  // If no solution was found, check if adding a single weight can balance the scale
  for (const weight of availableWeights) {
    if (leftWeight + weight === rightWeight || rightWeight + weight === leftWeight) {
      return weight.toString();
    }
  }

  // If no solution was found, return "not possible"
  return 'not possible';
}

// Test cases
// console.log(ScaleBalancing(['[3, 4]', '[1, 2, 7, 7]']));  // Output: "1"
// console.log(ScaleBalancing(['[13, 4]', '[1, 2, 3, 6, 14]']));  // Output: "3,6"

