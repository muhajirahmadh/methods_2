// string 

var str = "HOW ARE U";
document.getElementById("para1").innerHTML = str.charAt(0);
document.getElementById("para2").innerHTML = str[1];

// TRIM

let text1 = "  Hey dude!     ";
let text2 = text1.trim();

document.getElementById("para3").innerHTML =
    "Length text1=" + text1.length + "<br>Length2 text2=" + text2.length;

// is array 
 
var arr = ["ios","bbm","android"];

function myfunc(){
    var x = document.getElementById("para4");
    x.innerHTML = Array.isArray(arr);
}

//reduce right

var num = [20,32,22,11];
var sum = num.reduceRight(myfunc_1);

document.getElementById("para5").innerHTML = "The sum is " + sum;

function myfunc_1(total,value)
{
    return total + value;
}

//json parse

const add ='{"name":"muhajir","age":"22","city":"trichy"}'
const obj = JSON.parse(add);

document.getElementById("para6").innerHTML = "Name="+ obj.name + "<br> City=" + obj.city;

// stringfy
const obj_1 = {name: "ahmadh", age: 21, city: "adirai"};
const myJSON = JSON.stringify(obj_1);

document.getElementById("para7").innerHTML = myJSON;

// date
const d = new Date();
const d1 = new Date();
document.getElementById("para8").innerHTML = d.toISOString();
document.getElementById("para9").innerHTML = d1.toJSON();

// get
var person = {
    firstName: "muhajir",
    lastName : "ahmadh",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  // display data from the object using a getter:
  document.getElementById("para10").innerHTML = person.fullName;
  

  // set

  var person = {
    firstName: "muhajir",
    lastName : "ahmadh",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
  };
  // Set an object property using a setter:
  person.lang = "english";
  // Display data from the object using a getter:
  document.getElementById("para11").innerHTML = person.lang;
  
  // objnew

  var obj_2 = {name: "ahmdh", new: "30"};
  document.getElementById("para12").innerHTML = obj_2.new;

  // bind name

  const per = {
    firstName:"muhajir",
    lastName: "ahmadh",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"ahmadh",
    lastName: "muhajir",
  }
  
  let fullName = per.fullName.bind(member);
  
  document.getElementById("para13").innerHTML = fullName();
  