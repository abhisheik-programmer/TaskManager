// let chk =0;
index =0;
var A = [
  {
    Task: "meeting",
    Description: "kk",
    Duration: "00:00:00",
  },
  {
    Task: "lunch",
    Description: "cc",
    Duration: "00:00:00",
  },
  {
    Task: "meeting",
    Description: "kk",
    Duration: "00:00:00",
  },
  {
    Task: "meeting",
    Description: "kk",
    Duration: "00:00:00",
  },
  {
    Task: "meeting",
    Description: "kk",
    Duration: "00:00:00",
  },
];

var Q = A;
document.querySelector("#Meeting").addEventListener("click", () => {
  Q = A.filter((item) => item.Task == "meeting");
  var tab = document.getElementById("nn");
  tab.innerHTML = " ";

  // location.reload();
  aa();
});

document.querySelector("#Lunch").addEventListener("click", () => {
  Q = A.filter((item) => item.Task == "lunch");
  var tab = document.getElementById("nn");
  tab.innerHTML = " ";
  aa();
});

document.querySelector("#None").addEventListener("click", () => {
   Q = A;
  var tab = document.getElementById("nn");
  tab.innerHTML = " ";

  // tab.remove();

  // location.reload();
  aa();
});

// document.querySelector("#None").addEventListener("click",()=>{
//     // Q = A.filter(item => item.Task == "lunch");
//     // chk=0;
//     // location.reload();
//     aa();
// })
//     var c1 = tab.innerHTML;

//     c1.innerHtML = "abhi";
// })
let aa = () => {
  // const a = document.createElement( "tr" );
  // a.insertCell(1) ="aa"
  // const root = document.getElementById( 'nn' ) ;
  // root.appendChild (a);
  // document.querySelector("body").style.backgroundColor = "red";
  var tab = document.getElementById("nn");
  tab.innerHTML = " ";

  var h = tab.insertRow(0);
  h1 = h.insertCell(0);
  h2 = h.insertCell(1);
  h3 = h.insertCell(2);
  h4 = h.insertCell(3);
  h5 = h.insertCell(4);

  h1.innerHTML = "S.no";
  h2.innerHTML = "Task";
  h3.innerHTML = "Description";
  h4.innerHTML = "Duration";
  h5.innerHTML = "Delete/Edit"
  Q.map((item, i) => {
    var row = tab.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = i + 1;
    cell2.innerHTML = item.Task;
    cell3.innerHTML = item.Description;
    cell4.innerHTML = item.Duration;
    cell5.innerHTML = ` <button class="but" style="background-color:rgb(183, 25, 25) ; border:rgb(183, 25, 25) " onClick={handleDelete(${i})}> Delete</button>
            <button class="but" style=" background-color: rgb(216, 150, 58); border: rgb(216, 150, 58);" onClick={handleEdit(${i})}> Edit</button>`;
  });
};
// aa();
const handleDelete = (i)=>{
    Q.splice(i , 1);
    aa();
}
const handleEdit = (i)=>{
    
    var chk = document.querySelector("#chk");
      
    if(chk.textContent == "Add")
    {
      chk.textContent = "Update";
    }
    index = i;
    // alert(Q[index].Task);
    document.querySelector("#Task").value = Q[index].Task;
    document.querySelector("#Description").value = Q[index].Description;
    // document.querySelector("#Duration").value = Q[index].Duration;
  
   
}
aa();

// document.querySelector("#Add").addEventListener( "click",

const Add = (event) => {
    event.preventDefault();

    var chk = document.querySelector("#chk");
    if(chk.textContent == "Update")
    {

      Edit(index);
      return false;
    }
    let tsk = document.querySelector("#Task").value;
    let des = document.querySelector("#Description").value;
    // let dur = document.querySelector("#Duration").value;
    let dur = timer.textContent
    console.log(tsk);
    A.push({ Task: tsk, Description: des, Duration: dur });
    Q = A;
    document.querySelector("#Task").value = "";
    document.querySelector("#Description").value = "";
    // document.querySelector("#Duration").value = "";
    aa();
};


const Edit = (index) => {
  // alert("HI");
    //   event.preventDefault();
    var task = document.querySelector("#Task").value;
        var des = document.querySelector("#Description").value;
        // var dur = document.querySelector("#Duration").value;
       var  dur = timer.textContent;
        Q[index ] = {
          Task: task,
          Description: des,
          Duration: dur,
        };
        // A=Q;
        // document.querySelector("#UpdateRow").value = "";
        aa();
        document.querySelector("#Task").value = "";
        document.querySelector("#Description").value = "";
        // document.querySelector("#Duration").value = "";
        //     var  u = document.getElementById("Update");
        // u.style.display="none";
        var chk = document.querySelector("#chk");
        // alert(chk);
        chk.textContent = "Add";
      }
      
      var timer = document.querySelector("#timer");
      var isRunning = false;
      var seconds =0;
      var minutes = 0;
      var hours =0;
      var tt;
      document.querySelector("#timebutton").addEventListener("click",function (){
        if(!isRunning)
    {
        isRunning = true;
        document.querySelector("#timebutton").textContent ="Stop";
       tt =  setInterval(()=>
       {
        seconds++;
        if(seconds>=60)
        {
          minutes++;
            seconds =0;
            if(minutes>=60)
            {
              hours++;
                minutes =0;
                // seconds=0;
            }
        }
        
        var formattedText = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
        timer.innerHTML = `<h2 style="color:  rgba(27,54,83,255);">${formattedText}<h2/>`;
    },1000);
    }
    else{
       
        clearInterval(tt);
        isRunning = false;
        document.querySelector("#timebutton").textContent ="Start";
    }
})

document.querySelector("#Reset").addEventListener("click", function(){
  clearInterval(tt);
    isRunning = false;
    document.querySelector("#timebutton").textContent ="Start";
    timer.innerHTML = `<h2 style="color:  rgba(27,54,83,255);">00:00:00<h2/>`;
});
    
    // const Delete = (event) => {
    //     event.preventDefault();
        
    //     var row = document.querySelector("#DeleteRow").value;
    //     if (row < 1 || row > Q.length) {
    //         alert("Please enter a valid row number");
    //         document.querySelector("#DeleteRow").value = "";
    //         return false;
    //     } else {
    //         Q.splice(row - 1, 1);
    //         document.querySelector("#DeleteRow").value = "";
            
    //         aa();
    //     }
    // };
    
    // const Update = (event) => {
        //   event.preventDefault();
        //   var row = document.querySelector("#UpdateRow").value;
        //   if (row < 1 || row > Q.length) {
            //     alert("Please enter a valid row number");
            //     document.querySelector("#UpdateRow").value = "";
            //     document.querySelector("#UpdateTask").value = "";
            //     document.querySelector("#UpdateDescription").value = "";
            //     document.querySelector("#UpdateDuration").value = "";
            //     return false;
            //   } else {
                //     var task = document.querySelector("#UpdateTask").value;
                //     var des = document.querySelector("#UpdateDescription").value;
    //     var dur = document.querySelector("#UpdateDuration").value;
    //     Q[row - 1] = {
        //       Task: task,
        //       Description: des,
        //       Duration: dur,
        //     };
        //     document.querySelector("#UpdateRow").value = "";
        //     document.querySelector("#UpdateTask").value = "";
        //     document.querySelector("#UpdateDescription").value = "";
        //     document.querySelector("#UpdateDuration").value = "";
        //   }
        //   aa();
        // };
        