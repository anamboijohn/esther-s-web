let attendanceArray = [];

// function addEntry(fullName, phoneNumber, course, hallName, gender, roomNumber){
//     attendanceArray.push({fullName, phoneNumber, course, hallName, gender, roomNumber})
// };

// addEntry('Anamboi John Aduko', '0549545530', 'Computer Engineering', 'Jital hostel', 'Male', 18);

// console.log(attendanceArray)

// function tableFor(event, journal){
//     for(let entry of journal){
//         let tableArr=[0, 0, 0, 0], index = 0;
//         if(entry.includes(event)) index++;
//         if(squirel) index +=2;
//         tableArr[index]++;
//     }
// };

// function addEntry(fullName, phoneNumber, region, gender, email){
//     attendanceArray.push({fullName, phoneNumber, region, gender, email})
// };

  function sotore(arr){
      attendanceArray.push(...arr);
      alert(`thank you very much ${arr[0]}, David will be contacting you later on ${arr[1]} or ${arr[arr.length-1]} or probably visit you at ${arr[2]}`)
      
  }
