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
    const year =parseInt(time%12);
    const day =parseInt(time/30);

    return `${hour} hour ${minute} Minute ${remainingSecond} Second ${year} years ${day} days ago`

 }
 console.log(getTimeString(770));