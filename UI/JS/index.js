
fetch(`http://localhost:5500/fetchCustomer`)
    .then(res => res.json())
    .then(function (record) {
        console.log("processing ----------- ");
        console.log("recvd data --- ");
        console.log(record)

        customerRecord = record.data;
        document.getElementById('CUCUID').innerHTML = customerRecord[0].CUCUID;
        document.getElementById('CUSTSID').innerHTML = customerRecord[0].CUSTSID;
        document.getElementById('CUREG').innerHTML = customerRecord[0].CUREG;
        document.getElementById('CUNAME').innerHTML = customerRecord[0].CUNAME;
        document.getElementById('CUCTID').innerHTML = customerRecord[0].CUCTID;
        document.getElementById('CUINID').innerHTML = customerRecord[0].CUINID;
        document.getElementById('CUFNAM').innerHTML = customerRecord[0].CUFNAM;
        document.getElementById('CUCUR').innerHTML = customerRecord[0].CUCUR;
        document.getElementById('CUCNID').innerHTML = customerRecord[0].CUCNID;

    })
    .catch(err => console.log('Error', err))







    