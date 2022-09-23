async function getData(num){

    const response = await fetch(`https://jsonmock.hackerrank.com/api/medical_records?page=${num}`)
    const data1 = await response.json()
    // console.log(data1)

    let count = 0;
    const {data} = data1
    // console.log(data)
    data.forEach(object => {
        const {vitals} = object
        console.log(vitals.bloodPressureDiastole)
        if(vitals.bloodPressureDiastole<=160 && vitals.bloodPressureDiastole>=120) count++;
        
    });
    // console.log(count)
    count1 = count1 + count
    console.log("total count",count1)

}
let count1  = 0;
for(let i=1; i<=10; i++){
    
    getData(i)
   
}

     