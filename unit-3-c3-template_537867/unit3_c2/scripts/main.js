var arr=JSON.parse(localStorage.getItem("user"))||[]
function summitform(name,email,address,amount){
    this.name=name;
    this.email= email ;
    this.address=address;
    this.amount=amount;

}

function myform(){
    event.preventDefault();
    var form=document.querySelector("form");
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;
    //console.log(name,email,address,amount);
    var bucket=new summitform(name,email,address,amount)
   // console.log(bucket);
   arr.push(bucket);
   console.log(arr);
   localStorage.setItem("user", JSON.stringify(arr));
}