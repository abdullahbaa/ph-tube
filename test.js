// const isVerified = "";
// // if(isVerified == true){
// //     console.log('user is verified');
// // }
// // else{
// //     console.log('user is not verified');

// // }
// console.log(
//     `${isVerified === true ? "" : "" }`
// );

 function getTimeString(time){
    // get hour and rest second
    const hour =parseInt( time/3600);
    let remainingSecond =time % 3600;
    const minute =parseInt(remainingSecond/60);
    remainingSecond =remainingSecond%60;
    return `${hour} hour ${minute} Minute ${remainingSecond} Second ago`
 }
 console.log(getTimeString(4322990));